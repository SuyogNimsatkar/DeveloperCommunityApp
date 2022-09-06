package com.devcom.service;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import com.devcom.dto.UserDto;
import com.devcom.entity.User;
import com.devcom.repository.UserRepository;

@Service
public class UserServiceImpl implements UserService {
	@Autowired
	UserRepository userRepo;
	
	@Override
	public ResponseEntity<String> registerUser(UserDto userdto) {
		User user = new User();
		
		user.setUserName(userdto.getUserName());
		user.setPassword(userdto.getPassword());
		user.setRole(userdto.getRole());
		Optional<User> opt1 = userRepo.findByUserName(userdto.getUserName());
		if(opt1.isPresent()) {
			return new ResponseEntity<String>("Already exist", HttpStatus.OK);
		}else {
			userRepo.save(user);
			return new ResponseEntity<String>("Success", HttpStatus.OK);
		}
	
	}
	

}
