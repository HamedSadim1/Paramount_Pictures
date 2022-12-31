import React from "react"
import Layout from "./../../components/layout"
import { graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

const MoviePage = ({
  data: {
    wpMovie: {
      paramountPicturesMeta: movie,
      genres: { nodes: genres },
    },
  },
}) => {
  const image = getImage(movie.picture.localFile)
  return (
    <Layout pageTitle="Movie Template">
      <div className="container text-white">
        <div className="d-flex  justify-content-between">
          <div className="col-6 ">
            <p>{movie.description}</p>
            <p>Director: {movie.director}</p>
            <p>Writer: {movie.writer}</p>
            <p>Producers: {movie.producers}</p>
            <p>Music: {movie.music}</p>
            <p>Cinematography: {movie.cinematography}</p>
            <p>Characters: {movie.characters}</p>
            <p>Box Office: {movie.boxOffice}</p>
            <p>Budget: {movie.budget}</p>

            <div className="d-flex justify-content-center align-items-center ">
              <p>Genres</p>
            </div>

            <div className="d-flex justify-content-between  ">
              {genres.map(genre => {
                return <p key={genre.id}>{genre.name}</p>
              })}
            </div>
          </div>
          <div className="col-5 m-4 ">
            <GatsbyImage
              image={image}
              alt={movie.picture.altText}
              className="img-fluid w-100 h-100 "
            />
          </div>
        </div>
      </div>
    </Layout>
  )
}

export const query = graphql`
  query MyQuery($slug: String) {
    wpMovie(slug: { eq: $slug }) {
      paramountPicturesMeta {
        budget
        boxOffice
        characters
        cinematography
        description
        director
        music
        producers
        title
        writer
        picture {
          localFile {
            childImageSharp {
              gatsbyImageData(placeholder: BLURRED)
            }
          }
          altText
        }
      }
      genres {
        nodes {
          name
          id
        }
      }
    }
  }
`

export default MoviePage
