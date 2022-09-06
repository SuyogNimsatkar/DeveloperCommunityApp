package com.devcom.controller;

import java.util.Map;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.devcom.dto.UserDto;
import com.devcom.entity.User;
import com.devcom.repository.UserRepository;
import com.devcom.service.UserService;

@RestController
//@RequestMapping("/register")
public class UserController {
	
	@Autowired
	UserService userService;
	
	@Autowired
	UserRepository userRepo;
	
	@PostMapping("/register")
	public ResponseEntity<String> registerUser(@RequestBody UserDto userdto) {
		return userService.registerUser(userdto);
			
	}
	
	
//	@PostMapping
//	public String loginUser(@RequestBody Map<String, String> userdto) {
//		String username = userdto.getOrDefault("username", null);
//		String password = userdto.getOrDefault("password", null);
//		Optional<User> opt1 = userRepo.findByUserName(username);
//		System.out.println(opt1.get().getPassword());
//		if(opt1.isPresent() && opt1.get().getPassword().equals(password)) {
//			return "User Loin Success";
//		}else {
//			return "Incorrect credentials";
//		}
//		
//	}
	
	
	@PostMapping("/login")
	public ResponseEntity<String> loginUser(@ModelAttribute UserDto userdto) {
		String username = userdto.getUserName();
		String password = userdto.getPassword();
		Optional<User> opt = userRepo.findByUserName(username);
		
		if(opt.isPresent() && opt.get().getPassword().equals(password)) {
			return new ResponseEntity<String>("Login successfully", HttpStatus.OK);
		}else {
			return new ResponseEntity<String>("Incorrect credentials", HttpStatus.OK);
		}
	}
	

}
