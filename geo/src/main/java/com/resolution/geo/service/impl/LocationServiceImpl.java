package com.resolution.geo.service.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.resolution.geo.model.Location;
import com.resolution.geo.repository.LocationRepository;
import com.resolution.geo.service.LocationService;

@Service
public class LocationServiceImpl implements LocationService {

	@Autowired
	private LocationRepository locationRepo;
	
	@Override
	public Location getLocationByPosition(String lat, String lng) {
		return this.locationRepo.findByLatAndLng(lat, lng);
	}

}
