import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"

import "./publication.scss"

export default ({ data }) => {
  const {
    html,
    frontmatter: {
      title,
      journal,
      year,
      volume,
      author,
      doi,
      issue
    }
  } = data.markdownRemark;

  return (
    <Layout>
      <h1 dangerouslySetInnerHTML={{ __html: title }} />
      <div className="publication card card--left">
        <div className="publication__abstract" dangerouslySetInnerHTML={{ __html: html }} />
        <h4 className="publication__authors">{author}</h4>
        <div className="publication__journal">{journal} {year}, {volume}{issue && (', ' + issue) } </div>
        <a href={'https://doi.org/' + doi} target="_blank" rel="noopener noreferrer">{doi}</a>
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
                year
                volume
                issue
                author
                doi
            }
        }
    }
`
