import React from "react"
import { graphql, Link, useStaticQuery } from "gatsby"

import './layout.scss';
import { rhythm } from "../utils/typography"
import { Header } from "./header"

export default ({ children }) => {
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
    <div className="layout">
      <header className="layout__header"><Header/></header>
      <main className="layout__main">{children}</main>
      <footer className="layout__footer"/>
    </div>
  )
}
