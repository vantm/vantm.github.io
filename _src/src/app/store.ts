import { configureStore } from "@reduxjs/toolkit";
import { todosSlice } from "../features/todos/todoSlice";

export default configureStore({
    reducer: {
        todos: todosSlice.reducer
    },
    middleware(getDefaultMiddlewares) {
        return getDefaultMiddlewares({
            immutableCheck: true,
            serializableCheck: true,
            thunk: true,
            actionCreatorCheck: true
        }).concat([

        ])
    }
})