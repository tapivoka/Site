import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"

export default ({ data }) => {
  const member = data.markdownRemark
  return (
    <Layout>
      <div>
        <h1>{member.frontmatter.firstName} {member.frontmatter.middleName} {member.frontmatter.lastName} </h1>
        <h2>{member.frontmatter.position}</h2>
        <div dangerouslySetInnerHTML={{ __html: member.html }} />
      </div>
    </Layout>
  )
}

export const query = graphql`
    query($name: String!, $type: String!) {
        markdownRemark(fields: { name: { eq: $name }, type: { eq: $type} }) {
            html
            frontmatter {
                firstName,
                middleName
                lastName,
                position
            }
        }
    }
`
