import { EntityState, createEntityAdapter, createSlice } from "@reduxjs/toolkit";
import { Dayjs } from "dayjs";

type Todo = {
    id: string
    title: string
    startAt?: Dayjs
    endAt?: Dayjs
    completedAt?: Dayjs
    description?: string
    archived: boolean
}

type TodosState = {
    todos: EntityState<Todo, string>
}

const adapter = createEntityAdapter<Todo, string>({
    selectId: x => x.id
})

const initialState = {
    todos: adapter.getInitialState()
} satisfies TodosState

export const todosSlice = createSlice({
    name: 'todos',
    initialState,
    reducers: {}
})

