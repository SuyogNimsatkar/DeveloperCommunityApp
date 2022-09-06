package com.devcom.service;

import org.springframework.http.ResponseEntity;

import com.devcom.dto.UserDto;
import com.devcom.entity.User;

public interface UserService{

	ResponseEntity<String> registerUser(UserDto userdto);
	

}

