package com.resolution.geo.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;

import com.resolution.geo.model.User;

public interface UserRepository extends CrudRepository<User, Long>{
	
	public Optional<User> findByUsername( String username);
}
