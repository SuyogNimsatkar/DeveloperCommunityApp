package com.devcom.entity;

import java.util.Date;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonFormat;


@Entity
@Table(name="DeveloperTable")
public class Developer {
	
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private int devId;
	
	private String name;
	private String email;
	private String skillLevel;
	
	@JsonFormat(pattern="yyyy-MM-dd")
	private Date memberSince;
	
	@OneToOne(targetEntity = User.class, cascade = CascadeType.MERGE)
	@JoinColumn(name = "DevUser_fk", referencedColumnName = "userId")
	private User user;
	
	private int totalFeeds;
	private int reputation;
	private boolean isVerified;
	private boolean isBlocked;
	
	public Developer() {
		
	}
	
	public Object setUser() {
		return user.userId;
	}
	
	public int getDevId() {
		return devId;
	}
	public void setDevId(int devId) {
		this.devId = devId;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public String getSkillLevel() {
		return skillLevel;
	}
	public void setSkillLevel(String skillLevel) {
		this.skillLevel = skillLevel;
	}
	public Date getMemberSince() {
		return memberSince;
	}
	public void setMemberSince(Date memberSince) {
		this.memberSince = memberSince;
	}
	public int getTotalFeeds() {
		return totalFeeds;
	}
	public void setTotalFeeds(int totalFeeds) {
		this.totalFeeds = totalFeeds;
	}
	public int getReputation() {
		return reputation;
	}
	public void setReputation(int reputation) {
		this.reputation = reputation;
	}
	public boolean isVerified() {
		return isVerified;
	}
	public void setVerified(boolean isVerified) {
		this.isVerified = isVerified;
	}
	public boolean isBlocked() {
		return isBlocked;
	}
	public void setBlocked(boolean isBlocked) {
		this.isBlocked = isBlocked;
	}
	
	public User getUser() {
		return user;
	}
	
	public void setUser(User user) {
		this.user = user;
	}
}
