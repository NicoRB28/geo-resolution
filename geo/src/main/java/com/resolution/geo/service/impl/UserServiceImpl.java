package com.resolution.geo.service.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.resolution.geo.model.User;
import com.resolution.geo.repository.UserRepository;
import com.resolution.geo.service.UserService;

@Service
public class UserServiceImpl implements UserService {
	
	@Autowired
	private UserRepository userRepo;
	
	@Override
	public User getUserByUserName(String username) {
		return this.userRepo.findByUsername(username).orElseThrow(() -> new RuntimeException("Usuario: "+username+" no encontrado"));
	}
	
	
}
