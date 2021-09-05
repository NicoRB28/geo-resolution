package com.resolution.geo;

import static org.junit.jupiter.api.Assertions.assertFalse;
import static org.junit.jupiter.api.Assertions.assertTrue;
import static org.mockito.Mockito.when;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.springframework.boot.test.context.SpringBootTest;

import com.resolution.geo.model.User;
import com.resolution.geo.service.AuthService;
import com.resolution.geo.service.UserService;
import com.resolution.geo.service.impl.AuthServiceImpl;

@SpringBootTest
public class UserApplicationTests {
	
	@Mock
	private UserService userService;
	
	@InjectMocks
	private AuthService authService = new AuthServiceImpl();

	@Mock
	private User userWithValidCredentials;
	
	@BeforeEach
	void init() {
		when(userWithValidCredentials.getUsername()).thenReturn("julio1234");
		when(userWithValidCredentials.getPassword()).thenReturn("1234");
	}
	
	@Test
	public void testIsLoginSuccess() {
		when(userService.getUserByUserName("julio1234")).thenReturn(userWithValidCredentials);
		assertTrue(authService.isLoginSuccess("julio1234", "1234"));
		assertFalse(authService.isLoginSuccess("julio1234", "12"));
	}
	
	@Test
	public void testValidateToken() {
		String token = authService.generateToken("julio1234", 10000);
		assertTrue(authService.validateToken(token));
		assertFalse(authService.validateToken(token.concat("222221")));
	}
	
}
