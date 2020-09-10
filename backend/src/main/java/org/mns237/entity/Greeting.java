package org.mns237.entity;

import javax.persistence.*;

@Entity
@Table(name = "greeting")
public class Greeting {
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private   long id;
	@Column(name = "content")
	private   String content;
	//a default constructor
	public Greeting() {
	}
	//constructor
	public Greeting(long id, String content){
		this.id = id;
		this.content = content;
	} 
	//get Method+
	public long getId(){
		return id;
	}
	public String getContent(){
		return content;
	}
}