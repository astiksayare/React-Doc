import * as State from './hooks/state/assignment/index';
import * as Reducer from './hooks/reducer';
import * as Assignment from './assignment';

export const Task = () => {
    // return <State.TodoList />
    // return <State.ShoppingList />
    // return <Reducer.ReduceAssignment.User />

    return <Assignment.ContextReducer.Items.Main />
}