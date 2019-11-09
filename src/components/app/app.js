import React from 'react';
import ReactDOM from 'react-dom';

import AppHeader from '../app-header';
import SearchPanel from '../search-panel';
import TodoLIst from '../todo-list';
import ItemStatusFilter from '../item-status-filter';

import './app.css';


const App = ()=>{
    const todoData =[
        {label:'Drink Cofe', important:false,id:1},
        {label:'Make Awesome App', important:true, id:2},
        {label:'Have a lanch', important:false,id:3}
    ];
    return (
    <div>
        <AppHeader toDo={1} done={3} />
        <div className="top-panel d-flex">
            <SearchPanel />
            <ItemStatusFilter />
        </div>
        <TodoLIst todos={todoData}/>
    </div>
    );
};
 export default App;