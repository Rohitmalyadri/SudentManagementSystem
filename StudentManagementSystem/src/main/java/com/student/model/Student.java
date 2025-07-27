package com.student.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class Student {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	private String fullName;
	private String rollNo;
	private String email;
	 public Student() {
	    }

	    public Student(String rollNo, String fullName, String email) {
	        this.rollNo = rollNo;
	        this.fullName = fullName;
	        this.email = email;
	    }

	    // Getters and Setters
	    public Long getId() {
	        return id;
	    }

	    public void setId(Long id) {
	        this.id = id;
	    }

	    public String getRollNo() {
	        return rollNo;
	    }

	    public void setRollNo(String rollNo) {
	        this.rollNo = rollNo;
	    }

	    public String getFullName() {
	        return fullName;
	    }

	    public void setFullName(String fullName) {
	        this.fullName = fullName;
	    }

	    public String getEmail() {
	        return email;
	    }

	    public void setEmail(String email) {
	        this.email = email;
	    }

	    @Override
	    public String toString() {
	        return "Student [id=" + id + ", rollNo=" + rollNo + ", fullName=" + fullName + ", email=" + email + "]";
	    }
}
