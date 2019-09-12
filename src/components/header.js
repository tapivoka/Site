import { graphql, Link, useStaticQuery } from "gatsby"
import React from "react"

import "./header.scss"
import { Nav } from "./nav"

export const Header = () => {
  const data = useStaticQuery(
    graphql`
        query {
            site {
                siteMetadata {
                    title
                }
            }
        }
    `)

  return (
    <div className="header">
      <div className="header__container">
        <div className="header__title">
          <Link className="header__title-link" to="/">mpd_group</Link>
        </div>
        <div className="header__nav">
          <Nav/>
        </div>
      </div>
    </div>
  )
}
