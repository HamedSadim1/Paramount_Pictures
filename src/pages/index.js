import * as React from "react"
import Layout from "../components/layout"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { graphql } from "gatsby"
import Movie from "../components/movie"

const IndexPage = ({
  data: {
    wpPage: { homePage },
  },
}) => {
  const image = getImage(homePage.picture.localFile)
  return (
    <main>
      <Layout pageTitle={`College Project ${homePage.title}`}>
        <div className="container row mt-5">
          <div className="col col-md-6">
            <GatsbyImage
              image={image}
              alt={homePage.picture.altText}
              className="img-thumbnail bg-dark rounded mx-auto  h-100 "
            />
          </div>

          <div
            className="col col-md-6
          d-flex
          justify-content-center
          align-items-center "
          >
            <p className="text-white  text-center text-md-start  mt-5 mt-md-0">
              {homePage.description}
            </p>
          </div>
        </div>

        <div className="card bg-dark">
          <div className="card-header">
            <h2 className=" text-center mt-5 text-white">
              Featured Paramount Pictures Movies
            </h2>
            <p class="card-text text-white text-center">
              Paramount Pictures has produced some of the most iconic and
              beloved movies of all time. From classic films like "The
              Godfather" and "Titanic" to modern blockbusters like "Mission
              Impossible" and "A Quiet Place," the studio has consistently
              delivered high-quality entertainment for audiences around the
              world.
            </p>
            <div className="card-body d-flex justify-content-center align-items-center flex-wrap gap-5">
              {homePage.featuredProducts.map((movie, index) => {
                return (
                  <Movie
                    movie={movie}
                    key={index}
                    slug={`movies/${movie.slug}`}
                  />
                )
              })}
            </div>
          </div>
        </div>
      </Layout>
    </main>
  )
}

export const query = graphql`
  query {
    wpPage(slug: { eq: "home-page" }) {
      homePage {
        title
        description
        picture {
          altText
          localFile {
            childImageSharp {
              gatsbyImageData(transformOptions: { grayscale: true })
            }
          }
        }
        featuredProducts {
          ... on WpMovie {
            id
            slug
            paramountPicturesMeta {
              title
              picture {
                localFile {
                  childImageSharp {
                    gatsbyImageData(
                      placeholder: BLURRED
                      transformOptions: { grayscale: false }
                    )
                  }
                }
                altText
              }
            }
          }
        }
      }
    }
  }
`

export default IndexPage
