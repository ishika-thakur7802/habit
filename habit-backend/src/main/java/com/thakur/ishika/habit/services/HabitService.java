package com.thakur.ishika.habit.services;
import com.thakur.ishika.habit.entities.Habit;

import java.util.List;

public interface HabitService {

    List<Habit> getAllHabits();
    Habit saveHabit(Habit habit);

}
