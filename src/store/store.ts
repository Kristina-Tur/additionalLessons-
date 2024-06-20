import {combineReducers, legacy_createStore as createStore} from "redux";
import {todolistReducer} from "../reducers/todolistReducer";
import {tasksReducer} from "../reducers/tasksReducer";

const rootReducer = combineReducers({
    todos: todolistReducer,
    tasks: tasksReducer
})

export const store = createStore(rootReducer)

export type RootReducer = ReturnType<typeof rootReducer>
export type RootState = ReturnType<typeof store.getState>