package com.resolution.geo.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.resolution.geo.dto.CredentialDTO;
import com.resolution.geo.dto.LoginRequestDTO;
import com.resolution.geo.service.AuthService;


@RestController
@CrossOrigin(origins = "*")
@RequestMapping("/api/login")
public class LoginController {
	
	 @Autowired
	 private AuthService authService;
	 
	 private final int EXPIRATION_IN_SEC = 10000;
	 
	 @PostMapping("/")
	 public ResponseEntity<?> authenticate(@RequestBody LoginRequestDTO request) {
		 if(authService.isLoginSuccess(request.getUsername(),request.getPassword())) {
			 String token = authService.generateToken(request.getUsername(), EXPIRATION_IN_SEC);
			 return ResponseEntity.ok(new CredentialDTO(token,EXPIRATION_IN_SEC, request.getUsername()));
		 }else {
			 return new ResponseEntity<String>("Usuario y/o contraseña incorrectos.",HttpStatus.UNAUTHORIZED);
		 }
	 }
	 
}
