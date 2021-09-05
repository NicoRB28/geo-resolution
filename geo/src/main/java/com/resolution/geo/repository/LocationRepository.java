package com.resolution.geo.repository;

import java.util.Optional;

import org.springframework.data.repository.CrudRepository;

import com.resolution.geo.model.Location;

public interface LocationRepository extends CrudRepository<Location, Long> {
	
	public Optional<Location> findByLatAndLng(String lat, String lng);
}
