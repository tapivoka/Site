import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"

export default ({ data }) => {
  const researchProject = data.markdownRemark
  return (
    <Layout>
      <div>
        <h1>{researchProject.frontmatter.title} </h1>
        <div dangerouslySetInnerHTML={{ __html: researchProject.html }} />
      </div>
    </Layout>
  )
}

export const query = graphql`
    query($name: String!, $type: String!) {
        markdownRemark(fields: { name: { eq: $name }, type: { eq: $type} }) {
            html
            frontmatter {
                title
            }
        }
    }
`
