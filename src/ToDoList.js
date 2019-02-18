import React, {Component} from 'react'
class ToDoList extends Component{
        constructor(props){
            super(props);
            this.handleAddTask = this.handleAddTask.bind(this);
            this.handleTaskInput = this.handleTaskInput.bind(this);
            this.handleRemoveTask = this.handleRemoveTask.bind(this);
            this.state = {
                taskName : '',
                listOfTasks : []
            }
        }
        handleAddTask(event){
            event.preventDefault();
            this.state.listOfTasks.push(this.state.taskName);
            this.setState(this.state);
        }
        handleTaskInput(event){  
            this.setState({taskName:event.target.value});
        }
        handleRemoveTask(task,event){
            //console.log(v);
            //console.log(event);
            for(var i = 0; i < this.state.listOfTasks.length; i++){
              if(this.state.listOfTasks[i] === task){
                 delete this.state.listOfTasks[i]
              }
            }
            this.setState({
              listOfTasks:this.state.listOfTasks
            })
        }
    render(){
        const listOfItems = this.state.listOfTasks.map((task,index) => <li onClick={this.handleRemoveTask.bind(this,task)} key={index}><span>{task}</span><span>X</span></li>);
        return(
            <div className="todoListMain">
                <div className="header">
                  <form onSubmit={this.handleAddTask}>
                    <input 
                        placeholder="Task" 
                        value = {this.state.taskName} 
                        onChange = {this.handleTaskInput}
                    />
                    <button type="submit"> Add Task </button>
                  </form>
                  <ul className="theList">{listOfItems}</ul>
                </div>
            </div>
        )
    }
}

export default ToDoList