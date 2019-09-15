import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"

import './research-projects.scss';

export default ({ data }) => {
  const {
    html,
    frontmatter: {
      title
    }
  } = data.markdownRemark;

  return (
    <Layout>
      <div>
        <h1 dangerouslySetInnerHTML={{ __html: title }} />
        <div className="research-project card card--left">
          <div dangerouslySetInnerHTML={{ __html: html }} />
        </div>
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
