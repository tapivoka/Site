import React from "react"
import Layout from "../components/layout"
import { graphql, Link } from "gatsby"

export default ({ data }) => {
  let publications = data.allMarkdownRemark.edges

  return (
    <Layout>
      <div>
        <h1>
          Публикации
        </h1>
        <div className="publications">
          {publications.map(
            ({ node }) =>
              (
                <div key={node.id}>
                  <h3 dangerouslySetInnerHTML={{ __html: node.frontmatter.title }}/>
                  <p> {node.frontmatter.journal} </p>
                  <Link to={node.fields.slug}>Подробнее</Link>
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
                    frontmatter {
                        title,
                        journal
                    }
                    fields {
                        slug
                    }
                }
            }
        }
    }
`
