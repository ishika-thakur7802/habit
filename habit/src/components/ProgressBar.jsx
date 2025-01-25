import React from "react";
import '..pages-css/ProgressBar.css';

const ProgressBar=()=>{
    return(
        <div className={'progress_bar'}>
            <ul>
                <li>Habits=</li>
                <li>Best Current Streak=</li>
                <li>Average Habit Completion Rate=</li>
            </ul>
        </div>
    );
};

export default ProgressBar;