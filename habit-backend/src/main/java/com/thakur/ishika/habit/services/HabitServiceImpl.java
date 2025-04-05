package com.thakur.ishika.habit.services;
import com.thakur.ishika.habit.entities.Habit;
import com.thakur.ishika.habit.repositories.HabitRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class HabitServiceImpl implements HabitService{
    @Autowired
    private HabitRepository habitRepository;

    @Override
    public List<Habit> getAllHabits() {
        return habitRepository.findAll();
    }

    @Override
    public Habit saveHabit(Habit habit) {
        return this.habitRepository.save(habit);
    }




}



