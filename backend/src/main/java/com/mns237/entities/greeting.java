package com.idrice24.MNS.entities;

public class greeting{
	private final long id;
	private final String content;

	//constructor
	public greeting(long id, String content){
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