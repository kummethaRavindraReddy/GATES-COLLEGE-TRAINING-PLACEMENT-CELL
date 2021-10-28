package com.springboot.phase3.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.persistence.Column;

@Entity
@Table(name = "student")                         ///Data stored in this table & table name in database
public class Student {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long id;
	
	@Column(name = "first_name")                        ////Student first name
	private String firstName;

	@Column(name = "last_name")                        /////Student last name
	private String lastName;
	
	@Column(name = "email_id")                        /////Student email id
	private String emailId;
	
	public Student() {
		
	}
	public long getId() {                              ///get id Student
		return id;
	}
	public void setId(long id) {                      /// set id Student
		this.id = id;
	}
	public String getFirstName() {                    //// get Student first name
		return firstName;
	}
	public void setFirstName(String firstName) {         //// set Student first name
		this.firstName = firstName;
	}
	public String getLastName() {                       //// get Student last name
		return lastName;
	}
	public void setLastName(String lastName) {          //// set Student last name
		this.lastName = lastName;
	}
	public String getEmailId() {                        ///get Student email id
		return emailId;
	}
	public void setEmailId(String emailId) {              ///set Student email id
		this.emailId = emailId;
	}
}
