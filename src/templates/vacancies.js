import React from "react"
import { graphql } from "gatsby"

import { Layout } from "../components/layout"
import { getLocalizedNodes } from "../intl/utils"
import { defaultLocale } from "../intl/locales"

import "./vacancies.scss"

export default ({ data, pageContext: { locale } }) => {
  const vacancyNodes = data.allMarkdownRemark.edges.map(e => e.node)
  const vacancy = getLocalizedNodes(vacancyNodes, locale, defaultLocale).shift()

  const {
    html,
    excerpt,
    frontmatter: {
      title,
    },
  } = vacancy

  return (
    <Layout title={title} description={excerpt}>
      <article className="vacancy">
        <h1 dangerouslySetInnerHTML={{ __html: title }} />
        <div className="vacancy__card card card--left">
          <div dangerouslySetInnerHTML={{ __html: html }} />
        </div>
      </article>
    </Layout>
  )
}

export const query = graphql`
    query($slug: String!) {
        allMarkdownRemark(filter: { fields: { slug: { eq: $slug }}, frontmatter: { active: { eq: true }}}) {
            edges {
                node {
                    html
                    excerpt,
                    frontmatter {
                        active
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
