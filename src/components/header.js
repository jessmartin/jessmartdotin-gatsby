import PropTypes from "prop-types"
import React from "react"
import { Link } from "gatsby"

const Header = ({ siteTitle }) => (
  <header
    style={{
      marginBottom: `1.45rem`,
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: `800px`,
        padding: `1em 0`,
      }}
    >
      <h1>
        <a href="/">{siteTitle}</a>
      </h1>
      <ul className="nav">
        <li>
          <Link to="/boring">Boring</Link>
        </li>
        <li>
          <Link to="/writings">Writings</Link>
        </li>
        <li>
          <Link to="https://notes.jessmart.in">Notes</Link>
        </li>
      </ul>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
