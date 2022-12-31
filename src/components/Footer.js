import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import { footerIcons } from "../Style.module.css"

const Footer = () => {
  return (
    <div>
      <footer className="bg-dark text-center text-white">
        <div
          className="text-center p-3"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
        >
          <div className="container p-4">
            <section className={`mb-4 ${footerIcons}`}>
              <a
                className="btn btn-outline-light btn-floating m-1"
                href="#!"
                role="button"
              >
                <StaticImage
                  src="./img/twitter.svg"
                  alt="instagram"
                  width={30}
                  height={30}
                />
              </a>

              <a
                className="btn btn-outline-light btn-floating m-1"
                href="#!"
                role="button"
              >
                <StaticImage
                  src="./img/instagram.svg"
                  alt="instagram"
                  width={30}
                  height={30}
                />
              </a>

              <a
                className="btn btn-outline-light btn-floating m-1"
                href="#!"
                role="button"
              >
                <StaticImage
                  src="./img/facebook.svg"
                  alt="instagram"
                  width={30}
                  height={30}
                />
              </a>
            </section>
          </div>
          <div>
            <p>
              <a
                className={`text-white nav-link ${footerIcons}`}
                href="https://www.paramountpictures.com/"
              >
                <p>Hamed Sadim &copy; 2023 ParamountPicture</p>
              </a>
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Footer
