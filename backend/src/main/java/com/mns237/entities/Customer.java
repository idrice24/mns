package com.mns237.entities;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
 
@Entity
@Table(name = "customer")
public class Customer {
 

 //declaration of variable
  @Id
  @GeneratedValue(strategy = GenerationType.AUTO)
  private long id;
 
  @Column(name = "name")
  private String name;
 
  @Column(name = "age")
  private int age;
 
  @Column(name = "active")
  private boolean active;
 
 //a default constructor
  public Customer() {
  }

 //paramestric constuctor
  public Customer(String name, int age) {
    this.name = name;
    this.age = age;
    this.active = false;
  }
 //getter and setter

  public long getId() {
    return id;
  }
 
  public void setName(String name) {
    this.name = name;
  }
 
  public String getName() {
    return this.name;
  }
 
  public void setAge(int age) {
    this.age = age;
  }
 
  public int getAge() {
    return this.age;
  }
 
  public boolean isActive() {
    return active;
  }
 
  public void setActive(boolean active) {
    this.active = active;
  }
 
  @Override
  public String toString() {
    return "Customer [id=" + id + ", name=" + name + ", age=" + age + ", active=" + active + "]";
  }