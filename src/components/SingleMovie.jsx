import React from "react";

import { Card } from "react-bootstrap";

class SingleMovie extends React.Component {
  state = {
    Poster: [],
  };

  componentDidMount = async () => {
    try {
      let response = await fetch(
        "http://www.omdbapi.com/?apikey=2cd49fbb&i= " + this.props.id
      );
      console.log(response);
      let image = await response.json();
      console.log(image);
      this.setState({ Poster: image.Poster });
    } catch (error) {
      console.log(error);
    }
  };

  render() {
    return (
      <div>
        <Card id="netflixCard">
          <Card.Img id="cardImg" variant="top" src={this.state.Poster} />
        </Card>
      </div>
    );
  }
}

export default SingleMovie;
