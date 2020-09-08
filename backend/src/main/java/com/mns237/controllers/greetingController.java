package com.idrice24.MNS.controllers;

import java.util.concurrent.atomic.AtomicLong;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class greetingController{
    private static final String template = "hello, %s";
    private final AtomicLong counter = new AtomicLong();

    @GetMapping("greeting")
    public Greeting greeting(@RequestParam(value ="name", defaultValue = "World") String name){
        return new Greeting(counter.incrementAndGet(). String.format(template, name));
    }
}