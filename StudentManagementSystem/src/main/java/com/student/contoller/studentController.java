package com.student.contoller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.student.model.Student;
import com.student.service.StudentService;


@RestController
@RequestMapping("/api/students")
@CrossOrigin("*")
public class studentController {
	 @Autowired
	    private StudentService studentService;

	    // Endpoint to CREATE a new student
	    // URL: POST http://localhost:7071/api/students
	    @PostMapping
	    public Student createStudent(@RequestBody Student student) {
	        return studentService.saveStudent(student);
	    }

	    // Endpoint to GET all students
	    // URL: GET http://localhost:7071/api/students
	    @GetMapping
	    public List<Student> getAllStudents() {
	        return studentService.getAllStudents();
	    }

	    // Endpoint to GET a single student by their ID
	    // URL: GET http://localhost:7071/api/students/1
	    @GetMapping("/{id}")
	    public ResponseEntity<Student> getStudentById(@PathVariable Long id) {
	        return studentService.getStudentById(id)
	                .map(ResponseEntity::ok) // If found, return 200 OK with the student
	                .orElse(ResponseEntity.notFound().build()); // If not found, return 404 Not Found
	    }

	    // Endpoint to UPDATE a student
	    // URL: PUT http://localhost:7071/api/students/1
	    @PutMapping("/{id}")
	    public ResponseEntity<Student> updateStudent(@PathVariable Long id, @RequestBody Student studentDetails) {
	        try {
	            Student updatedStudent = studentService.updateStudent(id, studentDetails);
	            return ResponseEntity.ok(updatedStudent);
	        } catch (RuntimeException e) {
	            return ResponseEntity.notFound().build();
	        }
	    }

	    // Endpoint to DELETE a student
	    // URL: DELETE http://localhost:7071/api/students/1
	    @DeleteMapping("/{id}")
	    public ResponseEntity<Void> deleteStudent(@PathVariable Long id) {
	        try {
	            studentService.deleteStudent(id);
	            return ResponseEntity.noContent().build(); // Return 204 No Content on successful deletion
	        } catch (RuntimeException e) {
	            return ResponseEntity.notFound().build();
	        }
	    }
	
}
