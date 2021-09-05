package com.resolution.geo;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.web.servlet.FilterRegistrationBean;
import org.springframework.context.annotation.Bean;

import com.resolution.geo.filter.JWTAuthenticationFilter;
import com.resolution.geo.service.AuthService;

@SpringBootApplication
public class GeoApplication {
	
	@Autowired
	private AuthService	authService;
	
	public static void main(String[] args) {
		SpringApplication.run(GeoApplication.class, args);
	}
	
	@Bean
	public FilterRegistrationBean<JWTAuthenticationFilter> jwtFilterRegistration(){
		FilterRegistrationBean<JWTAuthenticationFilter> filterRegistrationBean = new FilterRegistrationBean<>();
		
		filterRegistrationBean.setFilter(new JWTAuthenticationFilter(authService));
		filterRegistrationBean.addUrlPatterns("/api/geo/*");
		
		return filterRegistrationBean;
	}

}
