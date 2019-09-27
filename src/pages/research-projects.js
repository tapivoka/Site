import React from "react"
import { graphql } from "gatsby"
import { FormattedMessage } from "react-intl"

import { Layout } from "../components/layout"
import { ResearchProjectCard } from "../components/research-project-card"
import { getLocalizedNodes } from "../intl/utils"
import { defaultLocale } from "../intl/locales"

import "./research-projects.scss"

export default ({ data, pageContext: { locale } }) => {
  const nodes = data.allMarkdownRemark.edges.map(e => e.node)
  const localizedNodes = getLocalizedNodes(nodes, locale, defaultLocale)

  return (
    <Layout>
      <section>
        <h1>
          <FormattedMessage id="pages.research-projects" />
        </h1>
        <div className="research-projects">
          {localizedNodes.map(
            node =>
              (
                <ResearchProjectCard
                  key={node.id}
                  title={node.frontmatter.title}
                  photo={node.frontmatter.photo}
                  slug={node.fields.slug}
                />
              ),
          )}
        </div>
      </section>
    </Layout>
  )
}

export const query = graphql`
    query {
        allMarkdownRemark(filter: {fields: {type: {eq: "research-projects"}}}){
            totalCount
            edges {
                node {
                    id
                    frontmatter {
                        title,
                        photo {
                            childImageSharp {
                                fluid(maxWidth: 800) {
                                    ...GatsbyImageSharpFluid
                                }
                            }
                        }
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
