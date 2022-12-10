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
      <Layout pageTitle={homePage.title}>
        <p>{homePage.description}</p>

        <GatsbyImage image={image} alt={homePage.picture.altText} />

        <div>
          {homePage.featuredProducts.map(movie => {
            return (
              <Movie
                movie={movie}
                key={movie.id}
                slug={`movies/${movie.slug}`}
              />
            )
          })}
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
                  childrenImageSharp {
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
  }
`

export default IndexPage
