import React from "react"
import { graphql } from "gatsby"
import { FormattedMessage } from "gatsby-plugin-intl"
import Img from "gatsby-image"

import Layout from "../components/layout"
import { PublicationCard } from "../components/publication-card"

import "./members.scss"

export default ({ data }) => {
  const member = data.member.frontmatter
  const publications = data.publications.edges

  let educations = member.educations || []
  educations = educations.sort((a, b) => +b.start - +a.start)

  return (
    <Layout>
      <div className="member">
        <h1>{member.lastName} {member.firstName} {member.middleName} </h1>
        <div className="member__info-block">
          <div className="member__info card card--left">
            <h3 className="member__position">{member.position}</h3>
            {
              member.interests &&
              <div className="member__interests">
                <h4 className="member__interests-label">
                  <FormattedMessage id="member-page.interests" />
                </h4>
                <ul className="member__interests-list">
                  {member.interests.map((e, i) => (
                    <li className="member__interest" key={i}>{e}</li>
                  ))}
                </ul>
              </div>
            }
          </div>
          <div className="member__photo-wrapper card">
            <Img className="member__photo" fluid={member.photo.childImageSharp.fluid} />
          </div>
        </div>
        {
          educations.length > 0 &&
          <>
            <h2>
              <FormattedMessage id="member-page.education" />
            </h2>
            <div className="member__educations card card--left">
              {educations.map((e, i) => (
                <div key={i} className="member__education education">
                  <div className="education__first-line">
                    <h4 className="education__place">{e.place}</h4>
                    {
                      e.start
                      &&
                      <div className="education__dates">
                        {e.start} - {e.end || <FormattedMessage id="member-page.now" />}
                      </div>
                    }
                  </div>
                  <div className="education__level">{e.level}</div>
                  <div className="education__diploma" dangerouslySetInnerHTML={{ __html: e.diploma }} />
                </div>
              ))}
            </div>
          </>
        }
        {
          publications.length > 0
          &&
          <>
            <h2>
              <FormattedMessage id="member-page.publications" />
            </h2>
            <div className="member__publications">
              {publications.map(
                ({ node }) =>
                  (
                    <PublicationCard node={node} key={node.id} />
                  ),
              )}
            </div>
          </>
        }
      </div>

    </Layout>
  )
}

export const query = graphql`
    query($name: String!, $type: String!) {
        member: markdownRemark(fields: { name: { eq: $name }, type: { eq: $type} }) {
            frontmatter {
                firstName
                middleName
                lastName
                photo {
                    childImageSharp {
                        fluid(maxWidth: 800) {
                            ...GatsbyImageSharpFluid
                        }
                    }
                }
                position
                educations {
                    start
                    end
                    level
                    place
                    diploma
                }
                interests
            }
        }
        publications: allMarkdownRemark(filter: {
            fields: { type: {eq: "publications"}  },
            frontmatter: { members: { eq: $name } }
        }) {
            totalCount
            edges {
                node {
                    id
                    html
                    frontmatter {
                        title
                        journal
                        year
                        author
                    }
                    fields {
                        slug
                    }
                }
            }
        }
    }
`
