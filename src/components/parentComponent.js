import axios from 'axios';
import React, { Component } from 'react';
import ChildComponent from "./childComponent";
import Pagination from "./pagination";
import{ movieSelect } from "../util/moviesselect"
import ButtonGroup from "./buttonGroup"
import {BrowserRouter as Router, Switch,Route,Link} from "react-router-dom";
//import PictureComponent from "./picComponent"
class ParentComponent extends Component {
    constructor(props){
        super(props);
        this.state = {movies: [], moviesOnPage:3, currentPage:1, allGenres: [], currentGenre:"", sortGenre:""};
        this.handlePageChange = this.handlePageChange.bind(this);
        this.handleGenre = this.handleGenre.bind(this); 
    }

    handleGenre(hgenre) {
        console.log(hgenre, "hgenre is here")
        this.setState({ currentGenre: hgenre })
    }

    handlePageChange(page){
        this.setState({currentPage: page})

    }

    getGenres(movies){ 
        console.log(movies, "This is movie")
        const allGenres= movies.map((m) =>  m.genre);
        const uniqueGenres = ['All Genres',...new Set(allGenres)];
        console.log(uniqueGenres)
        this.setState({allGenres:uniqueGenres})
    }
    componentDidMount() {
        axios
            .get("http://157.230.232.55/movies")
            .then((response) => this.setState({movies: response.data}, this.getGenres(response.data)))
    }


    render() { 
        const {movies, currentPage,moviesOnPage, currentGenre} =this.state;
      
        const filteredMovies = currentGenre && currentGenre !== "All Genres" ? //&& is and
        movies.filter(m=>m.genre === currentGenre)
        : movies;
        console.log("Filtered", currentGenre, filteredMovies, moviesOnPage)
          const newmovies = movieSelect(filteredMovies, currentPage, moviesOnPage)
          console.log(newmovies)
        return (
        <div>
            <ButtonGroup 
            genres={this.state.allGenres} 
            genreClick={this.handleGenre} />
        <div>
            {newmovies.map((m) => ( 
            <ChildComponent 
            key={m.id} 
            movie= {m} />
            ))}
            
        </div>
        <Pagination numberOfMovies={filteredMovies.length}
                moviesOnPage={this.state.moviesOnPage}
                pageChange={this.handlePageChange}
                currentPage={this.state.currentPage}
                />
        </div>
        )
    }
}
 
export default ParentComponent;