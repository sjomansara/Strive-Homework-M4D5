import React, { useEffect, useState } from 'react'
import { Card, Spinner, Alert } from "react-bootstrap"

const ShowDetails = (props) => {

    const [movieDetails, setMovieDetails] = useState({})
    const [isLoading, setIsLoading] = useState(false)
    const [isError, setIsError] = useState(false)
    

    useEffect( async () => {
        try {
            let response = await fetch(
              "http://www.omdbapi.com/?apikey=2cd49fbb&i=" + props.id
            )
            if (response.ok) {
              console.log("response ok!")
            let details = await response.json()
            setMovieDetails(details)
            console.log(details)
            } else {
              console.log('Server Error')
              setIsError(true)
              setIsLoading(false)
            }
          } catch (error) {
            console.log(error)
            setIsError(true)
            setIsLoading(false)
          }
        }
    )

    return (
       <div>
           <h1 className="text-white">Movie Details</h1>
           {
                    isLoading && 
                    <Spinner animation="border" variant="dark" className="mx-auto" />
                }
                  {
                    isError &&
                    <Alert variant="danger" className="col-2">
                        An error occurred!
                    </Alert>
                }
        <Card className="col-2" id="detailsCard">
          <Card.Img id="cardImg" variant="top" src={movieDetails.Poster} className="mt-3" />
          <Card.Body className="text-white">
          <Card.Text>Title: {movieDetails.Title}</Card.Text>
          <Card.Text>Runtime: {movieDetails.Runtime}</Card.Text>
          <Card.Text>Released: {movieDetails.Released}</Card.Text>
          <Card.Text>Genre: {movieDetails.Genre}</Card.Text>
          <Card.Text>Language: {movieDetails.Language}</Card.Text>
          </Card.Body>
        </Card>
       </div>
    )
}

export default ShowDetails