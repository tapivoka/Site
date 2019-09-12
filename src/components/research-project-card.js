import React from "react"
import { Link } from "gatsby"

import "./research-project-card.scss"

export const ResearchProjectCard = ({ title, photoUrl, slug }) => {
  return (
    <div className="research-project-card card card--bottom">
      <div className="research-project-card__image-wrapper">
        <img className="research-project-card__image"
          src={photoUrl}
        />
      </div>
      <div className="research-project-card__info">
        <div className="research-project-card__title">{title}</div>
        <Link className="research-project-card__more-link" to={slug}>Подробнее</Link>
      </div>
    </div>
  )
}
