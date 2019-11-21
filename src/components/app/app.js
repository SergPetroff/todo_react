import React,{Component} from 'react';
import ReactDOM from 'react-dom';

import AppHeader from '../app-header';
import SearchPanel from '../search-panel';
import TodoLIst from '../todo-list';
import ItemStatusFilter from '../item-status-filter';
import ItemAddForm from '../item-add-form';

import './app.css';


export default class App extends Component {
    
    maxId= 100;
    state={
        todoData :[
            this.createTodoItem("Drink Cofe"),
            this.createTodoItem("Make Awesome App"),
            this.createTodoItem("Have a lanch")
        ],
        term:'',
        filter:'active'//active,all,done
    }

    filter(items,filter){
        switch(filter){
            case 'all':
            return items;
            case 'active':
            return items.filter((item)=>!item.done);
            case 'done':
            return items.filter((item)=>item.done);
            default:
            return items;
        }
    }
    deleteItem=(id)=>{
        this.setState(({todoData})=>{
            const idx = todoData.findIndex((el)=>el.id===id);
            const newArray = [...todoData.slice(0,idx),...todoData.slice(idx+1)];
            return{
                todoData:newArray
            }
        })
    };
    createTodoItem(label){
        return {
            label,
            important:false,
            done:false,
            id:this.maxId++
        }
    }
    addItem=(text)=>{

        const newItem=this.createTodoItem(text);

        this.setState(({todoData})=>{
            const newArray = [...todoData,newItem];
            
            return{
                todoData:newArray
            }
        })

    };

    
    toggleProperty(arr,id,propName){
        const idx = arr.findIndex((el)=>el.id===id);
        const oldItem = arr[idx];
        const newItem = {...oldItem, [propName]:!oldItem[propName]};

        return [...arr.slice(0,idx),
            newItem,
            ...arr.slice(idx+1)
        ];
    }
    onToggleImportant = (id)=>{
        this.setState(({todoData})=>{
            
            return{
                todoData:this.toggleProperty(todoData,id,"important")
            }

    })
    };
    onToggleDone = (id)=>{
        this.setState(({todoData})=>{
            
                return{
                    todoData:this.toggleProperty(todoData,id,"done")
                }
    
        })
        
    };
    searchItem=(itemlist,term)=>{
        

        if(term.length===0){
            return itemlist
        }

        return itemlist.filter((el)=>el.label.toLowerCase().indexOf(term.toLowerCase()) !== -1)
       
    };
    onSearchChange=(term)=>{
        this.setState({
            term
        })   
    }
    onFilterChange=(filter)=>{
        this.setState({
            filter
        })  
    }
    render(){
        const {todoData,term,filter} = this.state;
        const visibleItems = this.filter(this.searchItem(todoData,term),filter);
        const doneCount = todoData.filter((el)=> el.done).length;

        const todoCount = todoData.length-doneCount;
        return (
            <div>
                <AppHeader toDo={todoCount} done={doneCount} />
                <div className="top-panel d-flex">
                    <SearchPanel onSearchChange={this.onSearchChange}/>
                    <ItemStatusFilter filter={filter}
                    onFilterChange={this.onFilterChange}/>
                </div>
                <TodoLIst todos={visibleItems}
                onDeleted={this.deleteItem}
                onToggleImportant={this.onToggleImportant}
                onToggleDone={this.onToggleDone}
                /> 
                <ItemAddForm onAddItem ={this.addItem}/>
            </div>
            );
    }
};
