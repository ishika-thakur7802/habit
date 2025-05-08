package com.thakur.ishika.habit.services;

import com.thakur.ishika.habit.entities.User;

import java.util.List;

public interface UserService {
    List<User> findAll();
    User save(User user);
    User findByUserId(int user_id);
    User findByEmail(String email);

}
