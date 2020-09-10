package com.mns237.repositories;

import java.util.List;
 
import org.springframework.data.repository.CrudRepository;
 
import com.javasampleapproach.springrest.postgresql.model.Customer;


 //here we find Custer by age from the db
public interface CustomerRepository extends CrudRepository<Customer, Long> {
  List<Customer> findByAge(int age);
}