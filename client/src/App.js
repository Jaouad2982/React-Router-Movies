import React, { Component } from 'react';
import SavedList from './Movies/SavedList';
import MovieList from './Movies/MovieList';
import Movie from './Movies/Movie';
import {Route} from "react-router-dom";
export default class App extends Component {
  constructor() {
    super();
    this.state = {
      savedList: []
      
    };
  }


  addToSavedList = movie => {
    const savedList = this.state.savedList;
    savedList.push(movie);
    this.setState({ savedList });
  };

  render() {

    return (
      <div>
        <SavedList list={this.state.savedList} />
        <div>Replace this Div with your Routes</div>
        <Route path="/" exact render={(props)=><MovieList{...props}  movie={this.state.savedList} />} />
        <Route path="/movies/:id" exact  render={props=>{
         return  <Movie {...props}  movie={this.state.stavedList}/>}
        }  />
          
        } />
      </div>
    );
  }
}
