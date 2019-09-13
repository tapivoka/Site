import React, { useState } from "react"
import { Link } from "gatsby"

import cn from "classnames"

import "./publication-card.scss"

export const PublicationCard = ({ node }) => {
  const [isAbstractVisible, setAbstractVisibility] = useState(false)

  const toogleAbstractVisibility = () => {
    setAbstractVisibility(!isAbstractVisible)
  }

  return (
    <div className="publication-card card card--left">
      <h3 className="publication-card__title" dangerouslySetInnerHTML={{ __html: node.frontmatter.title }} />
      <div>{node.frontmatter.journal}</div>
      <div className="publication-card__links">
        {
          !!node.html &&
          <button className="link-button publication-card__link" onClick={toogleAbstractVisibility}>Аннотация</button>
        }
        <Link className="publication-card__link" to={node.fields.slug}>Подробнее</Link>
      </div>
      <div
        className={cn("publication-card__abstract", { "publication-card__abstract--visible": isAbstractVisible })}
        dangerouslySetInnerHTML={{ __html: node.html }}
      />
    </div>
  )
}
