/**
 * 呼び出されるアクションを定義する
 * アクションを経由して登録されているすべてのreducerが呼ばれる
 * type分け戦略をしっかりやらないと関係ない処理が実行されてしまったりもする？
 */
import { Action } from 'redux';

export type Actions = AddToDo | SetVisibilityFilter | ToggleTodo;

let nextTodoId: number = 0;

export interface AddToDo extends Action {
    type: 'ADD_TODO'
    id: number
    text: string
}

export const addTodo = (text: string): AddToDo => {
    console.log('!!! action addTodo', text);
    return {
        type: 'ADD_TODO',
        id: nextTodoId++,
        text
    }
}

export interface SetVisibilityFilter extends Action {
    type: 'SET_VISIBILITY_FILTER'
    filter: any
}

export const setVisibilityFilter = (filter: any): SetVisibilityFilter => {
    console.log('!!! action SetVisibilityFilter', filter);
    return {
        type: 'SET_VISIBILITY_FILTER',
        filter
    }
}

export interface ToggleTodo extends Action {
    type: 'TOGGLE_TODO'
    id: number
}

export const toggleTodo = (id: number): ToggleTodo => {
    console.log('!!! action toggleTodo', id);
    return {
        type: 'TOGGLE_TODO',
        id
    }
}
