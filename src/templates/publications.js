import React from "react"
import { graphql } from "gatsby"

import { Layout } from "../components/layout"
import { getLocalizedNodes } from "../intl/utils"
import { defaultLocale } from "../intl/locales"

import "./publications.scss"

export default ({ data, pageContext: { locale } }) => {
  const publicationNodes = data.allMarkdownRemark.edges.map(e => e.node)
  const publication = getLocalizedNodes(publicationNodes, locale, defaultLocale).shift()

  const {
    html,
    frontmatter: {
      title,
      journal,
      year,
      volume,
      author,
      doi,
      issue
    }
  } = publication;

  return (
    <Layout>
      <h1 dangerouslySetInnerHTML={{ __html: title }} />
      <div className="publication card card--left">
        <div className="publication__abstract" dangerouslySetInnerHTML={{ __html: html }} />
        <h4 className="publication__authors">{author}</h4>
        <div className="publication__journal">{journal} {year}, {volume}{issue && (', ' + issue) } </div>
        <a href={'https://doi.org/' + doi} target="_blank" rel="noopener noreferrer">{doi}</a>
      </div>
    </Layout>
  )
}

export const query = graphql`
    query($slug: String!) {
        allMarkdownRemark(filter: { fields: { slug: { eq: $slug }}}) {
            edges {
                node {
                    html
                    frontmatter {
                        title
                        journal
                        year
                        volume
                        issue
                        author
                        doi
                    }
                    fields {
                        slug
                        locale
                    }
                }                
            }
        }
    }
`
