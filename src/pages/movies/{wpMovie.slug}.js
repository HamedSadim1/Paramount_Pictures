import React from "react"
import Layout from "./../../components/layout"
import { graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import Carousel from "react-bootstrap/Carousel"
import { img } from "../../Style.module.css"

const MoviePage = ({
  data: {
    wpMovie: {
      paramountPicturesMeta: movie,
      genres: { nodes: genres },
    },
  },
}) => {
  const image = getImage(movie.picture.localFile)
  const image1 = getImage(movie.picture1.localFile)
  const image2 = getImage(movie.picture2.localFile)
  const image3 = getImage(movie.picture3.localFile)

  const { title } = movie
  return (
    <Layout pageTitle={title} className="mb-4">
      <div className="container text-white mt-5">
        <div className="d-flex  justify-content-between">
          <div className="col-6 ">
            <p>{movie.description}</p>
            <p>
              <span className="text-primary me-2">
                <strong>Director:</strong>
              </span>
              {movie.director}
            </p>
            <p>
              <span className="text-primary me-2">
                <strong>Writer:</strong>
              </span>
              {movie.writer}
            </p>
            <p>
              <span className="text-primary me-2">
                <strong>Producers:</strong>
              </span>
              {movie.producers}
            </p>
            <p>
              <span className="text-primary me-2">
                <strong>Music:</strong>
              </span>
              {movie.music}
            </p>
            <p>
              <span className="text-primary me-2">
                <strong>Cinematography:</strong>
              </span>
              {movie.cinematography}
            </p>
            <p>
              <span className="text-primary me-2">
                <strong>Characters:</strong>
              </span>
              {movie.characters}
            </p>
            <p>
              <span className="text-primary me-2">
                <strong>Box Office:</strong>
              </span>
              {movie.boxOffice}
            </p>
            <p>
              <span className="text-primary me-2">
                <strong>Budget:</strong>
              </span>
              {movie.budget}
            </p>

            <div className="d-flex justify-content-center align-items-center ">
              <p className="text-primary me-2">
                <strong>Genres:</strong>
              </p>
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
              className="img-fluid w-100 h-100 rounded "
            />
          </div>
        </div>

        <div className="d-flex justify-content-center align-items-center mt-5 me-5 me-5">
          <h3>
            <strong>Images of {title}</strong>
          </h3>
        </div>
      </div>
      <Carousel className="d-flex justify-content-center mt-5 mb-5">
        <Carousel.Item>
          <GatsbyImage
            image={image1}
            alt={movie.picture1.altText}
            className={`${img} rounded `}
          />
        </Carousel.Item>
        <Carousel.Item>
          <GatsbyImage
            image={image2}
            alt={movie.picture2.altText}
            className={`${img} rounded `}
          />
        </Carousel.Item>
        <Carousel.Item>
          <GatsbyImage
            image={image3}
            alt={movie.picture3.altText}
            className={`${img} rounded`}
          />
        </Carousel.Item>
      </Carousel>
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
        picture1 {
          localFile {
            childImageSharp {
              gatsbyImageData(placeholder: BLURRED)
            }
          }
          altText
        }
        picture2 {
          localFile {
            childImageSharp {
              gatsbyImageData(placeholder: BLURRED)
            }
          }
          altText
        }
        picture3 {
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
