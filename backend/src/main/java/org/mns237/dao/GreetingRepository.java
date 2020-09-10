package org.mns237.dao;

import org.mns237.entity.Greeting;
import org.springframework.data.repository.CrudRepository;

import java.util.List;

public interface GreetingRepository extends CrudRepository<Greeting, Long> {
    List<Greeting>findAll();
}
