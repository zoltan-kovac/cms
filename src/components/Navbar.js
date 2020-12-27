import React from 'react'
import { Link } from 'gatsby'

const Navbar = class extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      active: false,
      navBarActiveClass: '',
    }
  }

  toggleNavbar = () => {
    this.setState({ active: !this.state.active },
      () => {
        this.state.active
          ? this.setState({ navBarActiveClass: 'show' })
          : this.setState({ navBarActiveClass: '' })
      }
    )
  }

  render() {
    const { navBarActiveClass } = this.state

    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container">
          <button className="navbar-toggler" type="button" onClick={this.toggleNavbar}>
            <span className="navbar-toggler-icon"></span>
          </button>
          <a className="navbar-brand" href="/">Navbar</a>
          <div className={`collapse navbar-collapse ${navBarActiveClass}`}>
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link" activeClassName="active" to="/about">
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" activeClassName="active" to="/products">
                  Products
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" activeClassName="active" to="/blog">
                  Blog
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" activeClassName="active" to="/contact">
                Contact
                </Link>
              </li>
            </ul>
            <form className="d-flex">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
              <button className="btn btn-outline-success" type="submit">Search</button>
            </form>
          </div>
        </div>
      </nav>
    )
  }
}

export default Navbar
