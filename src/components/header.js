import React from "react"
import { Link } from "gatsby-plugin-intl"

import { Nav } from "./nav"

import "./header.scss"

export const Header = () => {
  return (
    <div className="header">
      <div className="header__container">
        <div className="header__title">
          <Link className="header__title-link" to="/">mpd_group</Link>
        </div>
        <div className="header__nav">
          <Nav />
        </div>
      </div>
    </div>
  )
}
