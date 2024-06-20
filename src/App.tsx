import React from 'react';

import './App.css';
import {useAppSelector} from "./hooks/hooks";
import {Todolist} from "./Todolist";


function App() {
    const todos = useAppSelector(state => state.todos)

    return (
        <div className="App">
            {todos?.map(t => <Todolist key={t.id} {...t} />)}
        </div>
    );
}

export default App;
