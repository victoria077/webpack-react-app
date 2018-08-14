import React, { Component } from 'react';




export default class TestComponent extends Component {
    constructor(props){
        super(props)
        this.state = { label: ""};
        
      }
      componentWillMount() {
       
        var  conf =  localStorage.getItem("name")
       
       if (conf !== null){this.setState({label: ("Hello," + localStorage.getItem("name") )});}
            else{
                alert("error")
            }
           
        }
      
    
      render() {
        return (
          <div>
            <div>{this.state.label}</div>
         
          </div>
        )
      }
    }