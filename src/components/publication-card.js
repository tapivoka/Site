import React from "react"
import { Link } from "gatsby"

import "./publication-card.scss"

export const PublicationCard = ({ node }) => {
  return (
    <div key={node.id} className="publication-card">
      <h3 className="publication-card__title" dangerouslySetInnerHTML={{ __html: node.frontmatter.title }} />
      <div>{node.frontmatter.journal}</div>
      <Link className="publication-card__more-link" to={node.fields.slug}>Подробнее</Link>
    </div>
  )
}
