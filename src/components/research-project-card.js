import React from "react"
import { Link } from "gatsby"

import "./research-project-card.scss"
import Img from "gatsby-image"

export const ResearchProjectCard = ({ title, photo, slug }) => {
  return (
    <div className="research-project-card card card--bottom">
      <div className="research-project-card__image-wrapper">
        <Img className="research-project-card__image" fluid={photo.childImageSharp.fluid} alt={title}/>
      </div>
      <div className="research-project-card__info">
        <div className="research-project-card__title">{title}</div>
        <Link className="research-project-card__more-link" to={slug}>Подробнее</Link>
      </div>
    </div>
  )
}
