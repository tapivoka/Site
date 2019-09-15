import React from "react"
import { FormattedMessage } from "gatsby-plugin-intl"

import Layout from "../components/layout"

export default () => {
  return (
    <Layout>
      <div>
        <h1>
          <FormattedMessage id="pages.404" />
        </h1>
      </div>
    </Layout>
  )
}
