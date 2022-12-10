import React from "react"
import { Link } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

const Movie = ({ movie, slug }) => {
  const profile = getImage(movie.paramountPicturesMeta.picture.localFile)
  return (
    <div>
      <Link to={slug}>
        <GatsbyImage image={profile} alt={movie.paramountPicturesMeta.title} />
        <article>
          {movie.paramountPicturesMeta.title && (
            <p>{movie.paramountPicturesMeta.title}</p>
          )}
        </article>
      </Link>
    </div>
  )
}

export default Movie
