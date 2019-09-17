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
    frontmatter: {
      title,
    },
  } = researchProject

  return (
    <Layout>
      <div>
        <h1 dangerouslySetInnerHTML={{ __html: title }} />
        <div className="research-project card card--left">
          <div dangerouslySetInnerHTML={{ __html: html }} />
        </div>
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
