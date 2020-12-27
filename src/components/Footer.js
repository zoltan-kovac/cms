import React from "react"
import facebook from '../img/social/facebook.svg'
import instagram from '../img/social/instagram.svg'
import twitter from '../img/social/twitter.svg'
import vimeo from '../img/social/vimeo.svg'

const Footer = class extends React.Component {
  render() {
    return (
      <footer className="text-muted py-5">
        <div className="container">
          <p className="float-end mb-1">
            <a href="# ">Back to top</a>
          </p>
          <div className="btn-group" role="group" aria-label="Social links example">
            <a title="facebook" href="https://facebook.com" className="btn btn-link">
              <img
                src={facebook}
                alt="Facebook"
                style={{ width: "1em", height: "1em" }}
              />
            </a>
            <a title="twitter" href="https://twitter.com" className="btn btn-link">
              <img
                className="fas fa-lg"
                src={twitter}
                alt="Twitter"
                style={{ width: "1em", height: "1em" }}
              />
            </a>
            <a title="instagram" href="https://instagram.com" className="btn btn-link">
              <img
                src={instagram}
                alt="Instagram"
                style={{ width: "1em", height: "1em" }}
              />
            </a>
            <a title="vimeo" href="https://vimeo.com" className="btn btn-link">
              <img
                src={vimeo}
                alt="Vimeo"
                style={{ width: "1em", height: "1em" }}
              />
            </a>
          </div>
        </div>
      </footer>
    )
  }
}

export default Footer
