import React from "react"

import { Link } from "gatsby"
import Img from "gatsby-image"

import "./member-card.scss"

export const MemberCard = ({ name, photo, slug, position }) => {
  return (
    <div className="member-card card card--bottom">
      <div className="member-card__image-wrapper">
        <Img className="member-card__image" fluid={photo.childImageSharp.fluid} alt={name}/>
      </div>
      <div className="member-card__info">
        <div className="member-card__name">{name}</div>
        <div className="member-card__position">{position}</div>
        <Link className="member-card__more-link" to={slug}>Подробнее</Link>
      </div>
    </div>
  )
}
