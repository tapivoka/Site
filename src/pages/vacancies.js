import React from "react"
import { FormattedMessage } from "react-intl"

import { Layout } from "../components/layout"

import "./vacancies.scss"

export default ({ data }) => {
  return (
    <Layout>
      <section>
        <h1>
          <FormattedMessage id="pages.vacancies" />
        </h1>
        <p><FormattedMessage id="vacancies-page.no-vacancies" /></p>
      </section>
    </Layout>
  )
}


