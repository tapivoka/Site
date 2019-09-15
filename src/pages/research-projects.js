import React from "react"
import { graphql } from "gatsby"
import { FormattedMessage } from "gatsby-plugin-intl"

import Layout from "../components/layout"
import { ResearchProjectCard } from "../components/research-project-card"

import "./research-projects.scss"

export default ({ data }) => {
  let researchProjects = data.allMarkdownRemark.edges

  return (
    <Layout>
      <div>
        <h1>
          <FormattedMessage id="pages.research-projects" />
        </h1>
        <div className="research-projects">
          {researchProjects.map(
            ({ node }) =>
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
      </div>
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
                    }
                }
            }
        }
    }
`
