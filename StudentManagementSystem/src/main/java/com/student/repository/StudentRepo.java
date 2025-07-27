package com.student.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.student.model.Student;

public interface StudentRepo extends JpaRepository<Student,Long> {
	//public Student findByid(long id);
	
}
