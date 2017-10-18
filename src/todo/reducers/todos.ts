// reducerはstate
// メソッドの引数stateの初期値がstateのデフォルトとなる？
// stateはどこかに属していないとだめってことではない？
// statteを利用しているComponentが自動的に影響を受ける？
// reducerメソッドのstateは引数のデフォルトをセットしないと何故かおこられるので注意

// import * as Actions from '../actions/index';

export interface TodosState {
    id: number
    text: string
    completed: boolean
}

// actionはanyにしたくは無いのだが、型指定するとcombineReducersでエラーになってしまう
export const todos = (state: TodosState[] = [], action: any): TodosState[] => {

    console.log('**** reducer todos *****', state, action);

    switch (action.type) {
        case 'ADD_TODO':
            return [
                ...state,
                {
                    id: action.id,
                    text: action.text,
                    completed: false
                }
            ];
        case 'TOGGLE_TODO':
            return state.map((todo: any) =>
                (todo.id === action.id)
                    ? {...todo, completed: !todo.completed}
                    : todo
            );
        default:
            return state
    }
}