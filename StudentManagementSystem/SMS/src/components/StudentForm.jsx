import React, { useState, useEffect } from 'react';

function StudentForm({ onSubmit, initialValues = {}, loading }) {
  const [values, setValues] = useState({
    rollNo: '',
    fullName: '',
    email: '',
  });

  useEffect(() => {
    // Set initial values once on mount
    if (initialValues && Object.keys(initialValues).length > 0) {
      setValues((prev) => ({ ...prev, ...initialValues }));
    }
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!values.rollNo || !values.fullName || !values.email) {
      alert("All fields are required!");
      return;
    }
    onSubmit(values);
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="rollNo">
          Roll Number
        </label>
        <input
          type="text"
          name="rollNo"
          id="rollNo"
          value={values.rollNo}
          onChange={handleChange}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          placeholder="Enter Roll Number"
        />
      </div>

      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="fullName">
          Full Name
        </label>
        <input
          type="text"
          name="fullName"
          id="fullName"
          value={values.fullName}
          onChange={handleChange}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          placeholder="Enter Full Name"
        />
      </div>

      <div className="mb-6">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
          Email Address
        </label>
        <input
          type="email"
          name="email"
          id="email"
          value={values.email}
          onChange={handleChange}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          placeholder="Enter Email"
        />
      </div>

      <div className="flex items-center justify-center">
        <button
          type="submit"
          disabled={loading}
          className={`${
            loading ? 'bg-gray-400 cursor-not-allowed' : 'bg-blue-500 hover:bg-blue-700'
          } text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline`}
        >
          {loading ? 'Submitting...' : 'Submit'}
        </button>
      </div>
    </form>
  );
}

export default StudentForm;
