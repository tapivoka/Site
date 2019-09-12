import { Link } from "gatsby"
import React from "react"

import "./nav.scss"

export const Nav = () => {
  return (
    <nav className="nav">
      <ul className="nav__list">
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
  )
}
