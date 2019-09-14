import React from "react"
import Layout from "../components/layout"
import { MemberCard } from "../components/member-card"
import { graphql } from "gatsby"
import "./members.scss"


export default ({ data }) => {
  let members = data.allMarkdownRemark.edges

  return (
    <Layout>
      <div>
        <h1>
          Сотрудники
        </h1>
        <div className="members">
          {members.map(
            ({ node }) =>
              (
                <MemberCard
                  key={node.id}
                  name={[node.frontmatter.lastName, node.frontmatter.firstName].join(" ")}
                  photo={node.frontmatter.photo}
                  slug={node.fields.slug}
                  position={node.frontmatter.position}
                />
              )
          )}
        </div>
      </div>
    </Layout>
  )
}

export const query = graphql`
    query {
        allMarkdownRemark(
            filter: {fields: {type: {eq: "members"}}}, 
            sort: { fields: [frontmatter___lastName], order: [ASC] }
        ){
            totalCount
            edges {
                node {
                    id
                    frontmatter {
                        firstName,
                        middleName
                        lastName,
                        position,
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