import * as React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import Footer from "./Footer"
import { btn, brandName } from "../Style.module.css"

const Layout = ({ pageTitle, children }) => {
  const data = useStaticQuery(graphql`
    query {
      wpPage(slug: { eq: "home-page" }) {
        homePage {
          title
        }
      }
    }
  `)
  const { title } = data.wpPage.homePage

  return (
    <div className="bg-dark">
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <a className={`navbar-brand ms-5  ${brandName}`} href="/">
          {title}
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon">
            <i className="fas fa-bars"></i>
          </span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active ">
              <Link
                to="/"
                className={`text-decoration-non text-white ms-5 me-5 ${btn}`}
              >
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/movies"
                className={`text-decoration-non text-white ${btn}`}
              >
                Movies
              </Link>
            </li>
            <li className="nav-item ms-5">
              <Link
                to="/contact"
                className={`text-decoration-non text-white ${btn}`}
              >
                Contact
              </Link>
            </li>
            <li className="nav-item ms-5">
              <Link
                to="/about"
                className={`text-decoration-non text-white ${btn}`}
              >
                About
              </Link>
            </li>
          </ul>
        </div>
      </nav>

      <main>
        <h1 className={` ${brandName} text-white text-center`}>{pageTitle}</h1>
        {children}
      </main>
      <Footer />
    </div>
  )
}

export default Layout
