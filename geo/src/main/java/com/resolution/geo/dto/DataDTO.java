package com.resolution.geo.dto;

public class DataDTO {
	
	private long id;
	private String city;
	private String country;
	
	public DataDTO(String city, String country, long id) {
		this.id = id;
		this.city = city;
		this.country = country;
	}

	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}

	public String getCity() {
		return city;
	}

	public void setCity(String city) {
		this.city = city;
	}

	public String getCountry() {
		return country;
	}

	public void setCountry(String country) {
		this.country = country;
	}
	
}
