package com.student.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.student.model.Student;
import com.student.repository.StudentRepo;

import java.util.List;
import java.util.Optional;

@Service
public class StudentService {
	@Autowired
	private StudentRepo studentRepo;
	
	 // CREATE a new student
    public Student saveStudent(Student student) {
        return studentRepo.save(student);
    }

    // READ all students
    public List<Student> getAllStudents() {
        return studentRepo.findAll();
    }

    // READ a single student by ID
    public Optional<Student> getStudentById(Long id) {
        return studentRepo.findById(id);
    }

    // UPDATE a student
    public Student updateStudent(Long id, Student studentDetails) {
        // First, find the existing student.
        Student existingStudent = studentRepo.findById(id)
                .orElseThrow(() -> new RuntimeException("Student not found with id: " + id));

        // Now, update its fields.
        existingStudent.setRollNo(studentDetails.getRollNo()); // --- CHANGE: Update rollNo
        existingStudent.setFullName(studentDetails.getFullName());
        existingStudent.setEmail(studentDetails.getEmail());

        // Save the updated student back to the database.
        return studentRepo.save(existingStudent);
    }

    // DELETE a student
    public void deleteStudent(Long id) {
        // Check if student exists before deleting
        if (!studentRepo.existsById(id)) {
            throw new RuntimeException("Student not found with id: " + id);
        }
        studentRepo.deleteById(id);
    }
}
