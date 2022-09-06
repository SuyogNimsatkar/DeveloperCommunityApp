//package com.devcom.entity;
//
//import javax.persistence.Entity;
//import javax.persistence.GeneratedValue;
//import javax.persistence.GenerationType;
//import javax.persistence.Id;
//import javax.persistence.Table;
//
//@Entity
//@Table(name="Admintable")
//public class Admin {
//	
//	@Id
//	@GeneratedValue(strategy = GenerationType.IDENTITY)
//	int userid;
//	
//	String username;
//	String password;
//	Boolean status;
//	public int getUserid() {
//		return userid;
//	}
//	public Admin() {
//		super();
//	}
//	public Admin(int userid, String username, String password, Boolean status) {
//		super();
//		this.userid = userid;
//		this.username = username;
//		this.password = password;
//		this.status = status;
//	}
//	public void setUserid(int userid) {
//		this.userid = userid;
//	}
//	public String getUsername() {
//		return username;
//	}
//	
//	public void setUsername(String username) {
//		this.username = username;
//	}
//	public String getPassword() {
//		return password;
//	}
//	public void setPassword(String password) {
//		this.password = password;
//	}
//	public Boolean getStatus() {
//		return status;
//	}
//	public void setStatus(Boolean status) {
//		this.status = status;
//	}
//	
//
//	
//
//}
