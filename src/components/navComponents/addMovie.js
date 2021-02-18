import React, { Component } from "react";
import axios from "axios";
class AddMovies extends Component {
  constructor(props) {
    super(props);
    this.state = { title: " ", genre: "", actor: "", rating: "" };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }
  handleSubmit(event) {
    const { title, genre, actor, rating } = this.state;
    event.preventDefault();
    axios
      .post("http://157.230.232.55/movies", {
        title: title,
        genre: genre,
        actor: actor,
        rating: rating,
      })
      .then((response) => console.log(response));
  }
  render() {
    return (
      <React.Fragment>
        <div className="container">
          <h1 style={{ color: "red" }}>{this.state.title}</h1>
          <h1 style={{ color: "red" }}>{this.state.genre}</h1>
          <form>
            <div className="row mb-3">
              <label htmlFor="title" className="col-sm-2 col-for-label">
                Movie Title
              </label>
              <div className="col-sm-10">
                <input
                  value={this.state.title}
                  id="title"
                  className="form-control"
                  type="text"
                  name="title"
                  onChange={this.handleChange}
                />
              </div>
            </div>
            <div className="row mb-3">
              <label htmlFor="genre" className="col-sm-2 col-for-label">
                Genre
              </label>
              <div className="col-sm-10">
                <input
                  value={this.state.genre}
                  id="genre"
                  className="form-control"
                  type="text"
                  name="genre"
                  onChange={this.handleChange}
                />
              </div>
            </div>
            <div className="row mb-3">
              <label htmlFor="actor" className="col-sm-2 col-for-label">
                Actor
              </label>
              <div className="col-sm-10">
                <input
                  value={this.state.actor}
                  id="actor"
                  className="form-control"
                  type="text"
                  name="actor"
                  onChange={this.handleChange}
                />
              </div>
            </div>
            <div className="row mb-3">
              <label htmlFor="rating" className="col-sm-2 col-for-label">
                Rating
              </label>
              <div className="col-sm-10">
                <input
                  value={this.state.rating}
                  id="rating"
                  className="form-control"
                  type="text"
                  name="rating"
                  onChange={this.handleChange}
                />
              </div>
            </div>
            <button
              onClick={this.handleSubmit}
              type="submit"
              className="btn btn-primary"
            >
              Add Movie
            </button>
          </form>
        </div>
      </React.Fragment>
    );
  }
}

export default AddMovies;