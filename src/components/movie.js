import React from "react"
import { Link } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { imageContainer, hoverOverlay } from "../Style.module.css"

const Movie = ({ movie, slug }) => {
  const profile = getImage(movie.paramountPicturesMeta.picture.localFile)
  console.log(movie)
  return (
    <div className="mt-5 mb-5 hover">
      <div className={imageContainer}>
        <Link
          to={slug}
          className="col-12 col-md-6 col-lg-4 text-white text-decoration-none"
        >
          <GatsbyImage
            image={profile}
            alt={movie.paramountPicturesMeta.picture.altText}
            style={{
              width: 200,
              height: 300,
            }}
            className="img-thumbnail img-fluid"
          />
          <div className={hoverOverlay}>
            <article>
              {movie.paramountPicturesMeta.title && (
                <div className="d-flex justify-content-center">
                  <h2>{movie.paramountPicturesMeta.title}</h2>
                </div>
              )}
            </article>
          </div>
        </Link>
      </div>
    </div>
  )
}

export default Movie
