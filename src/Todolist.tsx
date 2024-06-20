import * as React from 'react';
import {InitialType} from "./reducers/todolistReducer";
import {useAppSelector} from "./hooks/hooks";
import {Tasks} from "./Tasks";
import {useDispatch} from "react-redux";
import {addTaskAC} from "./reducers/tasksReducer";

export const Todolist = ({id, title, filter}: InitialType) => {
    const tasks = useAppSelector(state => state.tasks[id])

    const dispatch = useDispatch()
    console.log(tasks)
    const mappedTasks = tasks.map(el => <Tasks key={el.id} {...el}/>)

    const onClickHandler = () => {
        const title = '20.06.2024'
        dispatch(addTaskAC(id, title))
    }
    return (
        <div>
            <h3>{title}</h3>
            <div>
                <input type={'text'}/>
                <button onClick={onClickHandler}>+</button>
            </div>
            <ul>
                {mappedTasks}
            </ul>
        </div>
    );
};