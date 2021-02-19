import React, { Component } from 'react';
import StarRating from "./starRating"
import {BrowserRouter as Router, Switch,Route,Link} from "react-router-dom";

class ChildComponent extends Component {

    render() {
      console.log(this.props.movie)
        const {title, genre, rating, released,desxription, image, id} = this.props.movie
        return(
          <div class="col m-">
          <div class="card shadow-sm">
            <img
              class="bd-placeholder-img card-img-top"
              width="100%"
              height="225"
              src= {image.url === "" ? "default image" : `http://157.230.232.55${image.url}`}
              role="img"
              aria-label="Placeholder: Thumbnail"
              preserveAspectRatio="xMidYMid slice"
              focusable="false"
            />
            <div class="card-body">
              <p class="card-text">
                {desxription}
              </p>
              <div class="d-flex justify-content-between align-items-center">
                <div class="btn-group">
                  <button type="button" class="btn btn-sm btn-outline-secondary">
                    View
                  </button>
                  <button type="button" class="btn btn-sm btn-outline-secondary">
                    Edit
                  </button>
                  <Link to={`/details/${id}`}>
                  <button type="button" class="btn btn-sm btn-outline-secondary">
                    Details
                  </button>
                  </Link>
                </div>
                <div></div>
                <small class="text-muted"><StarRating rating={rating}/></small>
                
              </div>
            </div>
          </div>
        </div>
        )

    }

}
 
export default ChildComponent;
