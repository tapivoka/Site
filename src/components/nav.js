import React from "react"
import { FormattedMessage, Link } from "gatsby-plugin-intl"

import "./nav.scss"

const pages = [
  "research-projects",
  "members",
  "publications",
  "contacts",
]

export const Nav = () => {
  return (
    <nav className="nav">
      <ul className="nav__list">
        {
          pages.map(e => (
              <li key={e} className="nav__item">
                <Link className="nav__link" to={`/${e}/`}>
                  <FormattedMessage id={`pages.${e}`} />
                </Link>
              </li>
            ),
          )
        }
      </ul>
    </nav>
  )
}
