import React from "react"
import { graphql } from "gatsby"
import { useIntl } from "react-intl"

import { Layout } from "../components/layout"
import { MemberCard } from "../components/member-card"
import { defaultLocale } from "../intl/locales"
import { getLocalizedNodes } from "../intl/utils"

import "./members.scss"

export default ({ data, pageContext: { locale } }) => {
  const nodes = data.allMarkdownRemark.edges.map(e => e.node)
  const localizedNodes = getLocalizedNodes(nodes, locale, defaultLocale)

  const { formatMessage } = useIntl()
  const title = formatMessage({ id: "pages.members" })

  return (
    <Layout title={title}>
      <section>
        <h1>{title}</h1>
        <div className="members">
          {localizedNodes.map(
            node =>
              (
                <MemberCard
                  key={node.id}
                  name={[node.frontmatter.lastName, node.frontmatter.firstName].join(" ")}
                  photo={node.frontmatter.photo}
                  slug={node.fields.slug}
                  position={node.frontmatter.position}
                />
              ),
          )}
        </div>
      </section>
    </Layout>
  )
}

export const query = graphql`
    query {
        allMarkdownRemark(
            filter: {fields: {type: {eq: "members"}}},
            sort: { fields: [frontmatter___lastName], order: [ASC] }
        ){
            totalCount
            edges {
                node {
                    id
                    frontmatter {
                        firstName,
                        middleName
                        lastName,
                        position,
                        photo {
                            childImageSharp {
                                fluid(maxWidth: 800) {
                                    ...GatsbyImageSharpFluid
                                }
                            }
                        }
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
