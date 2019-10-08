import React from "react"
import { FormattedMessage, useIntl } from "react-intl"
import { graphql } from "gatsby"

import { Layout } from "../components/layout"
import { VacancyCard } from "../components/vacancy-card"

import { getLocalizedNodes } from "../intl/utils"
import { defaultLocale } from "../intl/locales"

import "./vacancies.scss"


export default ({ data, pageContext: { locale } }) => {
  const nodes = data.allMarkdownRemark.edges.map(e => e.node)
  const localizedNodes = getLocalizedNodes(nodes, locale, defaultLocale)

  const { formatMessage } = useIntl()
  const title = formatMessage({ id: "pages.vacancies" })

  return (
    <Layout title={title}>
      <section>
        <h1>{title}</h1>
        {
          localizedNodes.length === 0
          &&
          <p><FormattedMessage id="vacancies-page.no-vacancies" /></p>
        }
        {
          localizedNodes.length > 0
          &&
          <div className="vacancies">
            {localizedNodes.map(
              node =>
                (
                  <VacancyCard
                    key={node.id}
                    node={node}
                  />
                ),
            )}
          </div>
        }
      </section>
    </Layout>
  )
}

export const query = graphql`
    query {
        allMarkdownRemark(filter: {fields: {type: {eq: "vacancies"}}, frontmatter: { active: { eq: true }}}){
            edges {
                node {
                    id
                    excerpt
                    frontmatter {
                        title
                    }
                    fields {
                        slug
                        locale
                    }
                }
            }
        }
    }
`



