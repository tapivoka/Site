import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import { injectIntl, FormattedMessage } from "gatsby-plugin-intl"

import Layout from "../components/layout"

import "./index.scss"

export default injectIntl(({ data, intl }) => {
  return (
    <Layout>
      <div>
        <h1>
          <FormattedMessage id="index-page.header" />
        </h1>
        <Img className="card"
          fluid={data.file.childImageSharp.fluid}
          alt={intl.formatMessage({ id: "index-page.image-alt" })}
        />
      </div>
    </Layout>
  )
})


export const query = graphql`
    query {
        file(relativePath: { eq: "group-photo.jpeg" }) {
            childImageSharp {
                fluid {
                    ...GatsbyImageSharpFluid
                }
            }
        }
    }
`

