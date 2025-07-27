import { useEffect, useState } from 'react';
import { getAllStudents, deleteStudent } from '../services/studentService';
import { useNavigate } from 'react-router-dom';

function StudentList() {
  const [students, setStudents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [deleteId, setDeleteId] = useState(null);
  const [showConfirm, setShowConfirm] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    loadStudents();
  }, []);

  const loadStudents = async () => {
    setLoading(true);
    setError('');
    try {
      const res = await getAllStudents();
      setStudents(Array.isArray(res.data) ? res.data : []);
    } catch {
      setError('Failed to fetch students.');
      setStudents([]);
    }
    setLoading(false);
  };

  const handleDelete = (id) => {
    setDeleteId(id);
    setShowConfirm(true);
  };

  const confirmDelete = async () => {
    if (deleteId) {
      try {
        await deleteStudent(deleteId);
        setShowConfirm(false);
        setDeleteId(null);
        loadStudents();
      } catch {
        setError('Failed to delete student.');
      }
    }
  };

  return (
    <div className="flex justify-center items-center min-h-[50vh]">
      <div className="w-full bg-white rounded-3xl shadow-xl p-10 md:p-10 max-w-[1200px] transition-all">
        <div className="flex flex-col md:flex-row justify-between items-center mb-6 gap-4">
          <h2 className="text-2xl font-bold text-blue-700">All Students</h2>
          <button
            className="bg-gradient-to-r from-blue-400 to-blue-600 text-white px-6 py-2 rounded-lg shadow-md hover:from-blue-500 hover:to-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-200 transition"
            onClick={() => navigate('/add')}
          >
            Add Student
          </button>
        </div>
        {error && <div className="text-red-500 mb-4">{error}</div>}
        {loading ? (
          <div className="text-center py-8">Loading...</div>
        ) : (
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white rounded shadow">
              <thead>
                <tr>
                  <th className="py-2 px-4 border-b">Roll No</th>
                  <th className="py-2 px-4 border-b">Full Name</th>
                  <th className="py-2 px-4 border-b">Email</th>
                  <th className="py-2 px-4 border-b">Actions</th>
                </tr>
              </thead>
              <tbody>
                {students.length === 0 ? (
                  <tr>
                    <td colSpan="4" className="text-center py-4">No students found.</td>
                  </tr>
                ) : (
                  students.map((student) => (
                    <tr key={student.id || student.rollNo} className="hover:bg-blue-50 transition">
                      <td className="py-2 px-4 border-b">{student.rollNo}</td>
                      <td className="py-2 px-4 border-b">{student.fullName}</td>
                      <td className="py-2 px-4 border-b">{student.email}</td>
                      <td className="py-2 px-4 border-b flex gap-2">
                        <button
                          className="bg-green-500 text-white px-3 py-1 rounded-lg shadow hover:bg-green-600 transition"
                          onClick={() => navigate(`/edit/${student.id}`)}
                        >
                          Edit
                        </button>
                        <button
                          className="bg-red-500 text-white px-3 py-1 rounded-lg shadow hover:bg-red-600 transition"
                          onClick={() => handleDelete(student.id)}
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        )}
        {showConfirm && (
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-30 z-50">
            <div className="bg-white p-6 rounded shadow-lg w-80">
              <h3 className="text-lg font-semibold mb-4">Confirm Delete</h3>
              <p>Are you sure you want to delete this student?</p>
              <div className="flex justify-end gap-2 mt-6">
                <button
                  className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300"
                  onClick={() => setShowConfirm(false)}
                >
                  Cancel
                </button>
                <button
                  className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
                  onClick={confirmDelete}
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default StudentList;
