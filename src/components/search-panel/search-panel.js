import React,{Component} from 'react';

import './search-panel.css'

export default class SearchPanel extends Component{
    state={
        term:''
    }
    onSearchChange=(e)=>{
        const term = e.target.value
        this.setState({
            term
        })
        this.props.onSearchChange(term)
    }
    render (){
        const searchText = "Введите текст";
        const{searchItem}= this.props;
        const  searchStyle = {
            fontSize:'20px'
        }
       
        
       return <input type="text"  className="form-control search-input"
        placeholder={searchText}
        style={searchStyle}
        onChange={this.onSearchChange}
        value={this.state.term}/>
    }

    
}