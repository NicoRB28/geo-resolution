package com.resolution.geo.dto;

import com.resolution.geo.model.Location;

public class LocationDTO {
	
	private String lanInput;
	private String lngInput;
	private DataDTO data;
	
	public LocationDTO(Location location) {
		this.lanInput = location.getLat();
		this.lngInput = location.getLng();
		this.data = new DataDTO(location.getCity(), location.getCountry(), location.getId());
	}

	public String getLanInput() {
		return lanInput;
	}

	public void setLanInput(String lanInput) {
		this.lanInput = lanInput;
	}

	public String getLngInput() {
		return lngInput;
	}

	public void setLngInput(String lngInput) {
		this.lngInput = lngInput;
	}

	public DataDTO getData() {
		return data;
	}

	public void setData(DataDTO data) {
		this.data = data;
	}
	
}
