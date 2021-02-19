import React, {Component} from "react"
import axios from 'axios';
import StarRating from "../starRating"

class Details extends Component {
    constructor(props) {
    super(props)
    this.state= {movie: "", poster: ""};
    }

    //'http://IP/movies/{this.props.match.params.id}
    componentDidMount() {
        axios
            .get(`http://157.230.232.55/movies/${this.props.match.params.id}`)
            .then((response) => this.setState({movie: response.data, poster: response.data.image}))
    }
    
    
    render() { 
       console.log(this.state.movie) 
       const {title, genre, rating, released, id, desxription} = this.state.movie
            return (
            <div class="card"> 
                <div class="card-body">
                  <h5 class="card-title">{title}</h5>
                  <h1>
                      <img
                        class="bd-placeholder-img card-img-top"
                        width="100%"
                        height="225"
                        src= {this.state.poster === null ? "default image" : `http://157.230.232.55${this.state.poster.url}`}
                        role="img"
                        aria-label="Placeholder: Thumbnail"
                        preserveAspectRatio="xMidYMid slice"
                        focusable="false"
                        />
                  </h1>
                  <div>Release Date: {released}</div>
                  <div>Genre: {genre}</div>
                  <p class="card-text">{desxription}</p>
                  <h5>Star Rating:<small className="text-muted"><StarRating rating={rating}/></small></h5>
                </div>
              </div>
            )
    }
}
 
export default Details;


// 1. import axios and get info
// 2. call API in componentDidMount
// 3. Store details like title and actor in state
// 4. plug info into render method using <h1> or <p> or something. 
// <small class="text-muted">Rating: <StarRating rating={rating}/></small>
// import StarRating from ./components/starRating
