package com.thakur.ishika.habit.entities;
import jakarta.persistence.*;

@Entity
public class Habit{

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;
    private String habit_name;
    private String habit_description;
    //frequency enum which suggests the type of frequency the habit is to be followed
    private int habit_streak_current;
    private int habit_streak_longest;
    private int habit_days_miss;
    private double habit_completion_rate;
}

