import React from "react"
import { FormattedMessage } from "react-intl"

import { Link } from "../intl/link"

import "./vacancy-card.scss"

export const VacancyCard = ({ node }) => {
  return (
    <article className="vacancy-card card card--left card--with-hover">
      <h3 className="vacancy-card__title" dangerouslySetInnerHTML={{ __html: node.frontmatter.title }} />
      <p>{node.excerpt}</p>
      <Link className="publication-card__more-link" to={node.fields.slug}>
        <FormattedMessage id="common.more-details" />
      </Link>
    </article>
  )
}
