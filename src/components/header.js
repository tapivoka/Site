import { graphql, Link, useStaticQuery } from "gatsby"
import React from "react"

import "./header.scss"

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
        <nav className="header__nav">
          <ul className="nav">
            <li className="nav__item">
              <Link className="nav__link" to="/research-projects">Исследования</Link>
            </li>
            <li className="nav__item">
              <Link className="nav__link" to="/members">Сотрудники</Link>
            </li>
            <li className="nav__item">
              <Link className="nav__link" to="/publications">Публикации</Link>
            </li>
            <li className="nav__item">
              <Link className="nav__link" to="/contacts">Контакты</Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  )
}
