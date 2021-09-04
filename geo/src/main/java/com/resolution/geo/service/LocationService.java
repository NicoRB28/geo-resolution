package com.resolution.geo.service;

import com.resolution.geo.model.Location;

public interface LocationService {
	
	public Location getLocationByPosition(String lat, String lng);
}
