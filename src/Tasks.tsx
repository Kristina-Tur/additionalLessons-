// @flow
import * as React from 'react';
import {TaskType} from "./reducers/tasksReducer";

export const Tasks = ({id, title, isDone}: TaskType) => {
    return (
        <li>
            <span>{title}</span>
            <input type={"checkbox"} checked={isDone}/>
        </li>
    );
};