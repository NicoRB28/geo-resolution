package com.resolution.geo.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.resolution.geo.dto.LocationDTO;
import com.resolution.geo.service.LocationService;

@RestController
@CrossOrigin(origins = "*")
@RequestMapping("/api/geo")
public class LocationController {
	
	@Autowired
	private LocationService locationService;
	
	@GetMapping("/{lat}/{lng}")
	public LocationDTO getLocationByLatAndLng(@PathVariable String lat, @PathVariable String lng) {		
		return new LocationDTO(this.locationService.getLocationByPosition(lat, lng));
	}
}
