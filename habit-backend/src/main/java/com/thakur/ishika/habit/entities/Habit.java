package com.thakur.ishika.habit.entities;
import com.thakur.ishika.habit.enums.frequency;
import jakarta.persistence.*;

@Entity
public class Habit{

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    @Column(name = "habit_name", nullable = false)
    private String habit_name;

    @Column(name = "habit_description", nullable = false)
    private String habit_description;
    //frequency enum which suggests the type of frequency the habit is to be followed
    @Enumerated(EnumType.STRING)
    @Column(name = "habit_freq")
    private frequency habit_freq;

    @Column(name = "habit_streak_current", nullable = false)
    private int habit_streak_current;

    @Column(name = "habit_streak_longest", nullable = false)
    private int habit_streak_longest;

    @Column(name = "habit_days_miss", nullable = false)
    private int habit_days_miss;

    @Column(name = "habit_completion_rate", nullable = false)
    private double habit_completion_rate;

    @ManyToOne(fetch= FetchType.LAZY)
    @JoinColumn(name = "userid_habit")
    private User user;

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getHabit_name() {
        return habit_name;
    }

    public void setHabit_name(String habit_name) {
        this.habit_name = habit_name;
    }

    public String getHabit_description() {
        return habit_description;
    }

    public void setHabit_description(String habit_description) {
        this.habit_description = habit_description;
    }

    public frequency getHabit_freq() {
        return habit_freq;
    }

    public void setHabit_freq(frequency habit_freq) {
        this.habit_freq = habit_freq;
    }

    public int getHabit_streak_current() {
        return habit_streak_current;
    }

    public void setHabit_streak_current(int habit_streak_current) {
        this.habit_streak_current = habit_streak_current;
    }

    public int getHabit_streak_longest() {
        return habit_streak_longest;
    }

    public void setHabit_streak_longest(int habit_streak_longest) {
        this.habit_streak_longest = habit_streak_longest;
    }

    public int getHabit_days_miss() {
        return habit_days_miss;
    }

    public void setHabit_days_miss(int habit_days_miss) {
        this.habit_days_miss = habit_days_miss;
    }

    public double getHabit_completion_rate() {
        return habit_completion_rate;
    }

    public void setHabit_completion_rate(double habit_completion_rate) {
        this.habit_completion_rate = habit_completion_rate;
    }

}

