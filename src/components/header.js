import React, { useState } from "react"
import cn from "classnames"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons"

import { Nav } from "./nav"
import { Link } from "../intl/link"


import "./header.scss"

export const Header = () => {
  const [isNavVisible, setNavVisibility] = useState(false)

  const toogleNavVisibility = () => {
    setNavVisibility(!isNavVisible)
  }

  return (
    <div className="header">
      <div className="header__container">
        <div className="header__title">
          <Link className="header__title-link" to="/">mpd_group</Link>
        </div>
        <div className="header__menu-icon" onClick={toogleNavVisibility}>
          <FontAwesomeIcon icon={isNavVisible ? faTimes : faBars} />


        </div>
        <div className={cn("header__nav", { "header__nav--visible": isNavVisible })}>
          <Nav />
        </div>
      </div>
    </div>
  )
}
