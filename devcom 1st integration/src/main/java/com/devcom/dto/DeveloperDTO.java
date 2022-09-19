package com.devcom.dto;

import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

public class DeveloperDTO {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int devId;

	private int userId;
	private String name;
	private String email;
	private String skillLevel;
	private boolean isBlocked;

	public int getUserId() {
		return userId;
	}

	public void setUserId(int userId) {
		this.userId = userId;
	}

	public DeveloperDTO() {

	}

	public DeveloperDTO(String name, String email, String skillLevel) {
		super();
		this.name = name;
		this.email = email;
		this.skillLevel = skillLevel;
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

	public boolean isBlocked(boolean b) {
		return isBlocked;
	}

	public void setBlocked(boolean isBlocked) {
		this.isBlocked = isBlocked;
	}

}
