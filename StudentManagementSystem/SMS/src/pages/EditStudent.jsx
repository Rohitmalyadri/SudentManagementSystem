import StudentForm from '../components/StudentForm';
import { getStudentById, updateStudent } from '../services/studentService';
import { useNavigate, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

function EditStudent() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [student, setStudent] = useState(null);

  useEffect(() => {
    const fetchStudent = async () => {
      setLoading(true);
      try {
        const res = await getStudentById(id);
        setStudent(res.data);
      } catch {
        setError('Failed to load student.');
      }
      setLoading(false);
    };
    fetchStudent();
  }, [id]);

  const handleSubmit = async (data) => {
    setLoading(true);
    setError('');
    try {
      await updateStudent(id, data);
      navigate('/');
    } catch {
      setError('Failed to update student.');
    }
    setLoading(false);
  };

  if (loading) return <div className="text-center py-8">Loading...</div>;
  if (error) return <div className="text-red-500 text-center py-8">{error}</div>;
  if (!student) return null;

  return (
    <div className="container mx-auto p-4 max-w-lg">
      <h2 className="text-2xl font-bold mb-4 text-blue-700">Edit Student</h2>
      <StudentForm onSubmit={handleSubmit} initialValues={student} loading={loading} />
    </div>
  );
}

export default EditStudent;
