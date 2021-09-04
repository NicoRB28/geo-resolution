package com.resolution.geo.repository;

import org.springframework.data.repository.CrudRepository;

import com.resolution.geo.model.Location;

public interface LocationRepository extends CrudRepository<Location, Long> {

}
