import StudentForm from '../components/StudentForm';
import { createStudent } from '../services/studentService';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

function AddStudent() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (data) => {
    setLoading(true);
    setError('');
    try {
      console.log('Submitting student:', data);
      await createStudent(data);
      navigate('/');
    } catch (err) {
      setError('Failed to add student.');
      console.error('Add student error:', err?.response?.data || err.message || err);
    }
    setLoading(false);
  };

  return (
    <div className="container mx-auto p-4 max-w-lg">
      <h2 className="text-2xl font-bold mb-4 text-blue-700">Add Student</h2>
      <StudentForm onSubmit={handleSubmit} loading={loading} />
      {error && <div className="text-red-500 mt-2">{error}</div>}
    </div>
  );
}

export default AddStudent;
