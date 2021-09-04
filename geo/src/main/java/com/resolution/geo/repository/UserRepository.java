package com.resolution.geo.repository;

import org.springframework.data.repository.CrudRepository;

import com.resolution.geo.model.User;

public interface UserRepository extends CrudRepository<User, Long>{

}
