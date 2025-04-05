package com.thakur.ishika.habit.entities;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;
import org.yaml.snakeyaml.DumperOptions;

import java.util.Set;

@Setter
@Getter
@Entity
public class User{
    @Id
    private int user_id;
    private String username;
    private String password;

    private String email;

    @OneToMany(cascade= CascadeType.ALL, fetch= FetchType.LAZY, mappedBy = "user")
    private Set<Habit> habitList;

}