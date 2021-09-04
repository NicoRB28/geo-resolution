package com.resolution.geo.service.impl;

import java.security.Key;
import java.util.Calendar;
import java.util.Date;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import io.jsonwebtoken.SignatureAlgorithm;
import io.jsonwebtoken.security.Keys;
import io.jsonwebtoken.*;

import com.resolution.geo.model.User;
import com.resolution.geo.service.AuthService;
import com.resolution.geo.service.UserService;

@Service
public class AuthServiceImpl implements AuthService {
	
	@Autowired
	private UserService userService;
	
	final static Key key = Keys.secretKeyFor(SignatureAlgorithm.HS256);
	
	@Override
	public String generateToken(String username, int seconds) {
		Date expiration = getExpiration(new Date(),seconds);
		
		return Jwts.builder().setSubject(username).signWith(key).setExpiration(expiration).compact();
	}

	@Override
	public boolean validateToken(String token) {
		String prefix = "Bearer";
		try {
			if(token.startsWith(prefix)) {
				token = token.substring(prefix.length()).trim();
			}
			
			Jwts.parser().setSigningKey(key).parseClaimsJws(token).getBody();
			
			return true;			
		
		} catch ( ExpiredJwtException e) {
			return false;
		}catch(JwtException e) {
			return false;
		}
		
	}
	
	@Override
	public boolean isLoginSuccess(String username, String password) {
		User user = this.userService.getUserByUserName(username);
		return (user.getPassword().equals(password));
	}

	private Date getExpiration(Date date, int seconds) {
		Calendar calendar = Calendar.getInstance();
		calendar.setTime(date);
		calendar.add(Calendar.SECOND,seconds);
		
		return calendar.getTime();
	}
	
}
