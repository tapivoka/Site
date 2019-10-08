import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import { FormattedMessage, useIntl } from "react-intl"

import { Layout } from "../components/layout"

import "./index.scss"

export default ({ data }) => {
  const { formatMessage } = useIntl()

  return (
    <Layout>
      <section>
        <h1>
          <FormattedMessage id="index-page.header" />
        </h1>
        <Img className="card"
          fluid={data.file.childImageSharp.fluid}
          alt={formatMessage({ id: "index-page.image-alt" })}
        />
      </section>
    </Layout>
  )
}

export const query = graphql`
    query {
        file(relativePath: { eq: "group-photo.jpg" }) {
            childImageSharp {
                fluid(maxWidth: 1200) {
                    ...GatsbyImageSharpFluid
                }
            }
        }
    }
`

