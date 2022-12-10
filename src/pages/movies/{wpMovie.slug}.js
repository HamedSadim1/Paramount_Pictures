import React from "react"
import Layout from "./../../components/layout"
import { graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

const MoviePage = ({
  data: {
    wpMovie: { paramountPicturesMeta: movie },
  },
}) => {
  const image = getImage(movie.picture.localFile)
  return (
    <div>
      <Layout pageTitle="Movie Template">
        <GatsbyImage image={image} alt={movie.picture.altText} />
        <p>{movie.description}</p>
        <p>Director: {movie.director}</p>
        <p>Writer: {movie.writer}</p>
        <p>Producers: {movie.producers}</p>
        <p>Music: {movie.music}</p>
        <p>Cinematography: {movie.cinematography}</p>
        <p>Characters: {movie.characters}</p>
        <p>Box Office: {movie.boxOffice}</p>
        <p>Budget: {movie.budget}</p>
      </Layout>
    </div>
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
    }
  }
`

export default MoviePage
