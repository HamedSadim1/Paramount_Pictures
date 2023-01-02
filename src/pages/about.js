import * as React from "react"
import Layout from "../components/layout"
import { StaticImage } from "gatsby-plugin-image"

const AboutPage = () => {
  return (
    <Layout pageTitle="About Us">
      <div className="container mt-5">
        <div className="row">
          <div className="col-12">
            <p className="text-white">
              Paramount Pictures Corporation is an American film studio based in
              Hollywood, California. It is a subsidiary of ViacomCBS and is a
              member of the Motion Picture Association of America (MPAA). The
              studio is known for producing and distributing films of various
              genres and commercial success, and is the oldest surviving film
              studio in the world. Paramount Pictures is a member of the "Big
              Five" major American film studios and the National Association of
              Theatre Owners (NATO).
            </p>
          </div>

          <div className="col-12">
            <StaticImage
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7w8jKCT9xCgvbZirvcP_nHUH67Oelh1e2gw&usqp=CAU"
              alt="Paramount Pictures Logo"
              className="img-fluid"
            />
          </div>

          <div className="col-12">
            <h1 className="text-white">History</h1>
            <p className="text-white">
              Paramount Pictures was founded in 1912 as the Famous Players Film
              Company by Adolph Zukor, who had previously co-founded the
              Vitagraph Company in 1897. Famous Players became one of the
              leading film producers in the world, producing and distributing
              films until 1918. In 1919, the company was acquired by Carl
              Laemmle, who merged it with his independent company, the
              Independent Moving Picture Company (IMP), to form the General Film
              Company. The new company was led by Laemmle's brother, William,
              and was based at the Vitagraph Studios in Fort Lee, New Jersey. In
              1920, Zukor returned to Famous Players and was reelected as
              president of the company. In 1922, Zukor convinced Laemmle to
              reorganize the company as Paramount Pictures Corporation, with
              Zukor as president. Laemmle was appointed head of production and
              William Laemmle was appointed head of distribution. The company
              was incorporated as a Delaware corporation on March 23, 1923.
              Paramount Pictures was the first American film studio to release a
              talking picture, with the 1927 film The Jazz Singer. The company's
              first major success was the 1928 film Wings, which was nominated
              for eight Academy Awards and won the Academy Award for Best
              Picture. In 1929, Zukor convinced Laemmle to sell his interest in
              the company to Paramount, and Laemmle became a Paramount
              vice-president. In 1930, Zukor was named president of Paramount
              Pictures Corporation, and in 1931, he was named chairman of the
              board. In 1932, Zukor convinced Laemmle to sell his interest in
              the company to Paramount, and Laemmle became a Paramount
              vice-president.
            </p>

            <StaticImage
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7w8jKCT"
              alt="Paramount Pictures Logo"
              className="img-fluid"
            />
          </div>

          <div className="col-12">
            <h1 className="text-white">Filmography</h1>
            <p className="text-white">
              Paramount Pictures has produced and distributed films since 1912.
              The studio has produced over 1,000 films, including many Academy
              Award winners and nominees. Some notable films produced by
              Paramount Pictures include:
              <ul>
                <li>Wings (1927)</li>
                <li>The Jazz Singer (1927)</li>
                <li>City Lights (1931)</li>
                <li>Gone with the Wind (1939)</li>
                <li>Grease (1978)</li>
                <li>Titanic (1997)</li>
                <li>Interstellar (2014)</li>
                <li>A Quiet Place (2018)</li>
              </ul>
            </p>

            <StaticImage
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7w8jKCT"
              alt="Paramount Pictures Logo"
              className="img-fluid"
            />
          </div>

          <div className="col-12">
            <h1 className="text-white">Location</h1>
            <p className="text-white">
              Paramount Pictures is headquartered in the Paramount Pictures
              Plaza building in Hollywood, California. The studio also has
              offices and facilities in various locations around the world,
              including New York, London, and India.
            </p>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default AboutPage
