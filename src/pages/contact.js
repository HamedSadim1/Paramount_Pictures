import React from "react"
import Layout from "./../components/layout"

const Contact = () => {
  return (
    <div>
      <Layout pageTitle="Contact">
        <div className="container ">
          <form name="contact" method="POST" data-netlify="true">
            <div className="d-flex  justify-content-between gap-2">
              <div className="col-6">
                <label className="text-white mt-3 ms-1 fs-5 ">First Name</label>
                <input
                  type="text"
                  className="form-control"
                  name="name"
                  required="true"
                />
              </div>
              <div className="col-6 ">
                <div className="form-group mr-3">
                  <label className="text-white mt-3 ms-1 fs-5 mr-2">
                    Last Name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    required="true"
                    name="lastName"
                  />
                </div>
              </div>
            </div>
            <div className="d-flex  justify-content-between gap-2">
              <div className="col-6">
                <div className="form-group mr-3">
                  <label className="text-white mt-3 ms-1 fs-5 mr-2">
                    Email
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    name="email"
                    required="true"
                  />
                </div>
              </div>
              <div className="col-6">
                <div className="form-group mr-3">
                  <label className="text-white mt-3 ms-1 fs-5 mr-2">
                    Subject
                  </label>
                  <input type="text" className="form-control" name="subject" />
                </div>
              </div>
            </div>

            <div className="form-group">
              <label className="text-white mt-3 ms-1 fs-5">Message</label>
              <textarea
                className="form-control"
                name="message"
                rows="6"
                required="true"
              />
            </div>
            <input type="hidden" name="form-name" value="contact" />
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
