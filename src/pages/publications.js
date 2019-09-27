import React from "react"
import { graphql } from "gatsby"
import { FormattedMessage } from "react-intl"

import { Layout } from "../components/layout"
import { PublicationCard } from "../components/publication-card"
import { groupBy } from "../utils/group-by"
import { getLocalizedNodes } from "../intl/utils"
import { defaultLocale } from "../intl/locales"

import "./publications.scss"

export default ({ data, pageContext: { locale } }) => {
  const nodes = data.allMarkdownRemark.edges.map(e => e.node)
  const localizedNodes = getLocalizedNodes(nodes, locale, defaultLocale)

  const groupedByYear = groupBy(localizedNodes, e => e.frontmatter.year)
  const years = Object.keys(groupedByYear).sort().reverse()

  return (
    <Layout>
      <section>
        <h1>
          <FormattedMessage id="pages.publications" />
        </h1>
        <div className="publications">
          {years.map(
            year => (
              <section className="publications__section" key={year}>
                <h2 className="publications__year">{year}</h2>
                {groupedByYear[year].map(
                  node =>
                    (
                      <PublicationCard node={node} key={node.id} />
                    ),
                )}
              </section>
            ),
          )}
        </div>
      </section>
    </Layout>
  )
}

export const query = graphql`
    query {
        allMarkdownRemark(filter: {fields: {type: {eq: "publications"}}}){
            totalCount
            edges {
                node {
                    id
                    html
                    frontmatter {
                        title
                        journal
                        year
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
