import React from "react"
import Movie from "../../components/movie"
import { graphql } from "gatsby"
import Layout from "../../components/layout"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

const MoviesPage = ({
  data: {
    allWpMovie: { edges },
    wpPage: { paramountPictures },
  },
}) => {
  const image = getImage(paramountPictures?.picture?.localFile)

  console.log(`paramountPictures : ${paramountPictures}`)
  return (
    <>
      <Layout pageTitle="Movies">
        <p>{paramountPictures?.description}</p>
        <GatsbyImage image={image} alt={paramountPictures?.picture.altText} />
        <div>
          {edges.map(({ node: movie }) => {
            return <Movie movie={movie} key={movie.id} slug={movie.slug} />
          })}
        </div>
      </Layout>
    </>
  )
}

export const query = graphql`
  query {
    wpPage(slug: { eq: "paramount-pictures-page" }) {
      paramountPicturesPage {
        title
        description
        picture {
          localFile {
            childImageSharp {
              gatsbyImageData(
                quality: 100
                placeholder: BLURRED
                layout: FULL_WIDTH
              )
            }
          }
          altText
        }
      }
    }
    allWpMovie {
      edges {
        node {
          id
          slug
          paramountPicturesMeta {
            boxOffice
            budget
            characters
            cinematography
            description
            director
            music
            picture {
              localFile {
                childImageSharp {
                  gatsbyImageData(
                    placeholder: BLURRED
                    transformOptions: { grayscale: true }
                  )
                }
              }
            }
          }
        }
      }
    }
  }
`

export default MoviesPage
