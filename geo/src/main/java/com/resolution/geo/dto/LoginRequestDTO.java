package com.resolution.geo.dto;

public class LoginRequestDTO {
	
	private String username;
	private String password;
	
	public LoginRequestDTO() {
	
	}
	
	public void setUsername(String username) {
		this.username = username;
	}
	
	public String getUsername() {
		return this.username;
	}
	
	public void setPassword(String password) {
		this.password = password;
	}
	
	public String getPassword() {
		return this.password;
	}
}
