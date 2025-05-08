package com.thakur.ishika.habit.controllers;

import com.thakur.ishika.habit.entities.User;
import com.thakur.ishika.habit.repositories.UserRepository;
import com.thakur.ishika.habit.services.UserService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class UserController {
    private final UserService userService;
    private final UserRepository userRepository;

    public UserController(final UserService userService, final UserRepository userRepository) {
        this.userService = userService;
        this.userRepository = userRepository;
    }

    @GetMapping("/users")
    public List<User> getUsers() {
        return this.userService.findUsers();
    }

    @PostMapping("/users")
    public User createUser(@RequestBody final User user) {
        return this.userService.save(user);
    }

    @GetMapping("/{id}")
    public User getUserById(@PathVariable final int id) {
        return this.userService.findByUserId(id);
    }

    @GetMapping("/email/{email}")
    public User getUserByEmail(@PathVariable final String email) {
        return this.userService.findByEmail(email);
    }

}
