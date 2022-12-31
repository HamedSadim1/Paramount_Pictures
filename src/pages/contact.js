import React from "react"
import Layout from "./../components/layout"

const Contact = () => {
  return (
    <div>
      <Layout pageTitle="Contact">
        <div className="container ">
          <form>
            <div className="d-flex  justify-content-between gap-2">
              <div className="col-6">
                <label
                  htmlFor="firstName"
                  className="text-white mt-3 ms-1 fs-5 "
                >
                  First Name
                </label>
                <input type="text" className="form-control" id="firstName" />
              </div>
              <div className="col-6 ">
                <div className="form-group mr-3">
                  <label
                    htmlFor="lastName"
                    className="text-white mt-3 ms-1 fs-5 mr-2"
                  >
                    Last Name
                  </label>
                  <input type="text" className="form-control" id="lastName" />
                </div>
              </div>
            </div>
            <div className="d-flex  justify-content-between gap-2">
              <div className="col-6">
                <div className="form-group mr-3">
                  <label
                    htmlFor="email"
                    className="text-white mt-3 ms-1 fs-5 mr-2"
                  >
                    Email
                  </label>
                  <input type="email" className="form-control" id="email" />
                </div>
              </div>
              <div className="col-6">
                <div className="form-group mr-3">
                  <label
                    htmlFor="subject"
                    className="text-white mt-3 ms-1 fs-5 mr-2"
                  >
                    Subject
                  </label>
                  <input type="text" className="form-control" id="subject" />
                </div>
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="message" className="text-white mt-3 ms-1 fs-5">
                Message
              </label>
              <textarea className="form-control" id="message" rows="6" />
            </div>
            <button type="submit" className="btn btn-success mt-3 mb-5">
              Submit
            </button>
          </form>
        </div>
      </Layout>
    </div>
  )
}

export default Contact
