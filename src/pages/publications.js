import React from "react"
import Layout from "../components/layout"
import { graphql } from "gatsby"
import "./publications.scss"
import { PublicationCard } from "../components/publication-card"
import { groupBy } from "../utils/group-by"

export default ({ data }) => {
  let publications = data.allMarkdownRemark.edges

  let groupedByYear = groupBy(publications, e => e.node.frontmatter.year)

  let years = Object.keys(groupedByYear).sort().reverse();

  return (
    <Layout>
      <div>
        <h1>
          Публикации
        </h1>
        <div className="publications">
          {years.map(
            year => (
              <div className="publications__section" key={year}>
                <h2 className="publications__year">{year}</h2>
                {groupedByYear[year].map(
                  ({ node }) =>
                    (
                      <PublicationCard node={node} key={node.id} />
                    ),
                )}
              </div>
            ),
          )}
        </div>
      </div>
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
                    }
                }
            }
        }
    }
`
