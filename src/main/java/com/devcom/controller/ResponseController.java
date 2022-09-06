//package com.devcom.controller;
//
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.http.ResponseEntity;
//import org.springframework.web.bind.annotation.DeleteMapping;
//import org.springframework.web.bind.annotation.PathVariable;
//import org.springframework.web.bind.annotation.PostMapping;
//import org.springframework.web.bind.annotation.PutMapping;
//import org.springframework.web.bind.annotation.RequestBody;
//import org.springframework.web.bind.annotation.RequestMapping;
//import org.springframework.web.bind.annotation.RestController;
//
//import com.devcom.dto.ResponseDto;
//import com.devcom.entity.Response;
//import com.devcom.service.ResponseIService;
//
//@RestController
//@RequestMapping("/response")
//public class ResponseController {
//	
//	@Autowired
//	ResponseIService respService;
//	
//	@PostMapping("/add")
//	public Response addResponse(@RequestBody ResponseDto responseDto) {
//		
//		return respService.addResponse(responseDto);
//	}
//	
//	@PutMapping("/edit/{respId}")
//	public ResponseEntity<Response> editResponse(@PathVariable("respId") int respId,@RequestBody ResponseDto responseDto) {
//		return this.respService.editResponse(respId, responseDto);
//		
//	}
//	
//	@DeleteMapping("/delete/{respId}")
//	public String removeResponse(@PathVariable( "respId") int respId) {
//	     
//	     return respService.removeResponse(respId);
//	}
//
//}