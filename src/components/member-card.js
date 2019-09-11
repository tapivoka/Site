import React from "react"

import "./member-card.scss"
import { Link } from "gatsby"

export const MemberCard = ({ name, photoUrl, slug, position }) => {
  return (
    <div className="member-card">
      <div className="member-card__image-wrapper">
        <img className="member-card__image"
          src={photoUrl}
        />
      </div>
      <div className="member-card__info">
        <div className="member-card__name">{name}</div>
        <div className="member-card__position">{position}</div>
        <Link className="member-card__more-link" to={slug}>Подробнее</Link>
      </div>
    </div>
  )
}
