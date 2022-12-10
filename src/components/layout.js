import * as React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import {
  container,
  nav,
  navLinks,
  navLinkItem,
  navLinkText,
} from "./layout.module.css"

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
    <div className={container}>
      <title>{title}</title>
      <nav className={nav}>
        <header className={title}></header>
        <ul className={navLinks}>
          <li></li>
          <li className={navLinkItem}>
            <Link className={navLinkText} to="/">
              Home
            </Link>
          </li>
          <li className={navLinkItem}>
            <Link className={navLinkText} to="/about">
              Paramount Pictures
            </Link>
          </li>
        </ul>
      </nav>
      <main>
        <h1>{pageTitle}</h1>
        {children}
      </main>
    </div>
  )
}

export default Layout
