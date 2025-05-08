package com.thakur.ishika.habit.services;

import com.thakur.ishika.habit.entities.User;
import com.thakur.ishika.habit.repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class UserServiceImpl implements UserService{
    private final UserRepository userRepository;

    public UserServiceImpl(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    @Override
    public List<User> findUsers(){
        return userRepository.findAll();
    }

    @Override
    public User save(User user){
        return this.userRepository.save(user);
    }

    @Override
    public User findByUserId(int user_id){
        Optional<User> user= userRepository.findById(user_id);
        if(user.isPresent()){
            return user.get();
        }
        else {
            System.out.println("user not found");
            return null;
        }
    }

    @Override
    public User findByEmail(String email){
        Optional<User> user= userRepository.findByEmail(email);

        if(user.isPresent()){
            return user.get();
        }
        else {
            System.out.println("user not found");
            return null;
        }

    }
}
