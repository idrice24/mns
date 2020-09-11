package org.mns237.controller;

import org.mns237.dao.GreetingRepository;
import org.mns237.entity.Greeting;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.hateoas.CollectionModel;
import org.springframework.hateoas.EntityModel;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

import static org.springframework.hateoas.server.mvc.WebMvcLinkBuilder.linkTo;
import static org.springframework.hateoas.server.mvc.WebMvcLinkBuilder.methodOn;

@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping("/api")
@RestController
public class GreetingController {

    @Autowired
    GreetingRepository greetingRepository;

    @GetMapping("/employees/{id}")
    EntityModel<Greeting> one(@PathVariable Long id) {

        Greeting greeting = greetingRepository.findById(id).get(); //


        return EntityModel.of(greeting, //
                linkTo(methodOn(GreetingController.class).one(id)).withSelfRel(),
                linkTo(methodOn(GreetingController.class).all()).withRel("greeting"));
    }

    @GetMapping("/")
    public CollectionModel<EntityModel<Greeting>> all() {



        List<EntityModel<Greeting>> greetings = greetingRepository.findAll().stream()
                .map(employee -> EntityModel.of(employee,
                        linkTo(methodOn(GreetingController.class).one(employee.getId())).withSelfRel(),
                        linkTo(methodOn(GreetingController.class).all()).withRel("greetings")))
                .collect(Collectors.toList());

        return CollectionModel.of(greetings, linkTo(methodOn(GreetingController.class).all()).withSelfRel());

    }
}