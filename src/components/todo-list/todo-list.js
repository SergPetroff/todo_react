import React from 'react';
import TodoListItem from '../todo-list-item';
import './todo-list.css';
const TodoLIst = ({todos})=>{
    const elements = todos.map((item)=>{

        const {id,...itemprops} = item;
        return (
            <li key={item.id} className="list-group-item">
                <TodoListItem {...itemprops}
               /*  label={item.label}
                important = {item.important} */
                />
            </li>
        );
    });
    return (
        <ul className="list-group todo-list">
           {elements}
        </ul>
    );
};

export default TodoLIst