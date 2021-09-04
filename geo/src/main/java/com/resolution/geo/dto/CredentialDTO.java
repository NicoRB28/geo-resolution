package com.resolution.geo.dto;

public class CredentialDTO {
	
	private String token;
	private int expiration;
	private String username;
	
	public CredentialDTO(String token,int expiration, String username) {
		this.token = token;
		this.expiration = expiration;
		this.username = username;
	}
	
	public void setToken(String token) {
		this.token = token;
	}
	
	public String getToken() {
		return this.token;
	}
	
	public void setExpiration(int expiration) {
		this.expiration = expiration;
	}
	
	public int getExpiration() {
		return this.expiration;
	}
	
	public void setUsername(String username) {
		this.username = username;
	}
	
	public String getUsername() {
		return this.username;
	}
}
