import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"

import "./publication.scss"

export default ({ data }) => {
  const publication = data.markdownRemark
  return (
    <Layout>
      <h1 dangerouslySetInnerHTML={{ __html: publication.frontmatter.title }} />
      <div className="publication card card--left">
        <div className="publication__abstract" dangerouslySetInnerHTML={{ __html: publication.html }} />
        <h4 className="publication__authors">{publication.frontmatter.author}</h4>
        <div className="publication__journal">{publication.frontmatter.journal}</div>
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
