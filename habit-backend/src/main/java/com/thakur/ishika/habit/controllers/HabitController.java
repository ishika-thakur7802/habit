package com.thakur.ishika.habit.controllers;
import com.thakur.ishika.habit.entities.Habit;
import com.thakur.ishika.habit.repositories.HabitRepository;

import com.thakur.ishika.habit.services.HabitService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class HabitController {
    @Autowired
    private HabitRepository habitRepository;

    @Autowired
    private HabitService habitService;

    @GetMapping("/home")
    public String home() { return "Welcome to Habit"; }

    @GetMapping("/api/habits")
    public List<Habit> getAllHabits()
    {
        return this.habitService.getAllHabits();
    }

    @PostMapping("/api/courses")
    public Habit saveHabit(@RequestBody Habit habit)
    {
        return this.habitService.saveHabit(habit);
    }


}
