package com.thakur.ishika.habit.repositories;
import com.thakur.ishika.habit.entities.User;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.*;
public interface UserRepository extends JpaRepository<User, Integer>{

        Optional<User> findById(int user_id);
        Optional<User> findByEmail(String email);
}
