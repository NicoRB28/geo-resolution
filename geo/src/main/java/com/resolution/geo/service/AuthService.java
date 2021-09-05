package com.resolution.geo.service;

public interface AuthService {
	
	public String generateToken(String username, int seconds);
	
	public boolean validateToken(String token);
	
	public boolean isLoginSuccess(String username, String password);
}
