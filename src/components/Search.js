import React, { Component } from 'react';


const people = [
    {
      id: 1,
      first: "Sarah Red",
    },
    {
      id: 2,
      first: "Tom Johnson",
   
    },
    {
      id: 3,
      first: "Kate Winslet",
    },
    {
      id: 4,
      first: "Oliy Smith",
   
    },
    {
      id: 4,
      first: "Oliy Smith",
   
    },
    {
      id: 5,
      first: "Lara Fabian",
   
    },
    {
      id: 6,
      first: "Nik Minory",
   
    },
    {
      id: 7,
      first: "Olivia Stown",
   
    }
    
  ]
  
  function searchingFor(term){
    return function(x){
      return x.first.toLowerCase().includes(term.toLowerCase()) || !term;
    }
  }
  class Search extends React.Component{
    constructor(props){
      super(props);
      
        this.state = {
          people: people,
          term: ""
          
      }
      this.searchHandler = this.searchHandler.bind(this);
    }
    searchHandler(event){
      this.setState({term : event.target.value})
    }
    
    render(){
      return(
      <div className="Search">
          <form>
            <input placeholder="SEARCH" className="personsearch" type="text" onChange={this.searchHandler}/>
          </form>
        {
            this.state.people.filter(searchingFor(this.state.term)
            ).map(person =>
    
              <div key={person.id}>
                <h1 className="personlist">{person.first}</h1>  
               
              </div>
            )
          } 
      </div>    )
    }
  };

  export default Search;