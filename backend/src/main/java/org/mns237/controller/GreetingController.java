package org.mns237.controller;

import org.mns237.dao.GreetingRepository;
import org.mns237.entity.Greeting;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.List;

@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping("/api")
@RestController
public class GreetingController {

    @Autowired
    GreetingRepository greetingRepository;

    @GetMapping("/")
    public List<Greeting> getAllGreetings() {

        List<Greeting> greetings = new ArrayList<>();
        greetingRepository.findAll().forEach(greetings::add);

        return greetings;
    }
}