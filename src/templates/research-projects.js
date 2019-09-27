import React from "react"
import { graphql } from "gatsby"

import { Layout } from "../components/layout"
import { getLocalizedNodes } from "../intl/utils"
import { defaultLocale } from "../intl/locales"

import "./research-projects.scss"

export default ({ data, pageContext: { locale } }) => {
  const researchProjectNodes = data.allMarkdownRemark.edges.map(e => e.node)
  const researchProject = getLocalizedNodes(researchProjectNodes, locale, defaultLocale).shift()

  const {
    html,
    excerpt,
    frontmatter: {
      title,
    },
  } = researchProject

  return (
    <Layout title={title} description={excerpt}>
      <article className="research-project">
        <h1 dangerouslySetInnerHTML={{ __html: title }} />
        <div className="research-project__card card card--left">
          <div dangerouslySetInnerHTML={{ __html: html }} />
        </div>
      </article>
    </Layout>
  )
}

export const query = graphql`
    query($slug: String!) {
        allMarkdownRemark(filter: { fields: { slug: { eq: $slug }}}) {
            edges {
                node {
                    html
                    excerpt,
                    frontmatter {
                        title
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
