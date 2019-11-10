import React,{Component} from 'react';
import './todo-list-item.css';


//Создаем класс для хранения состояния и наследумся от React класса
export default class TodoListItem extends Component{

  //создаем конструктор что бы фн onLabelClick вызывалась в текущем ершы
  constructor(){
    super();
    this.state={
      done:false,
      important:false
    }
    this.onLabelClick = ()=>{
      //console.log(`Done:${this.props.label}`)
      this.setState((state)=>{
        return {
          done:!state.done
        };
      });
    };
    this.onMarkImportant = ()=>{
      this.setState((state)=>{
        return {
          important:!state.important
        };
      });
    };
  };
  
  render(){
    const {label} = this.props;
    const {done, important} = this.state;
    let classNames = "todo-list-item";
    if(done){
      classNames +=' done';
    }
    if(important){
      classNames+= " important";
    }

    return <span className={classNames}>
        <span
        className="todo-list-item-label"
        onClick={this.onLabelClick}>
        {label}
        </span>
          <button type="button"
                  className="btn btn-outline-success btn-sm float-right"
                  onClick={this.onMarkImportant}>
            <i className="fa fa-exclamation" />
          </button>

          <button type="button"
                  className="btn btn-outline-danger btn-sm float-right">
            <i className="fa fa-trash-o" />
          </button>
        </span>
  }
}
