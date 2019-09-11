import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"

export default ({ data }) => {
  const publication = data.markdownRemark
  return (
    <Layout>
      <div>
        <h2 dangerouslySetInnerHTML={{ __html: publication.frontmatter.title }}/>
        <h3>{publication.frontmatter.journal}</h3>
        <h4>{publication.frontmatter.author}</h4>
        <div dangerouslySetInnerHTML={{ __html: publication.html }} />
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
                journal
                author
            }
        }
    }
`
