package com.thakur.ishika.habit.repositories;
import com.thakur.ishika.habit.entities.Habit;
import org.springframework.data.jpa.repository.JpaRepository;

public interface HabitRepository extends JpaRepository<Habit, Long> {
}
