import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"

import "./members.scss"
import { PublicationCard } from "../components/publication-card"

export default ({ data }) => {
  const member = data.member.frontmatter
  const publications = data.publications.edges

  let educations = member.educations || [];
  educations = educations.sort((a, b) => +b.start - +a.start);

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
                <h4 className="member__interests-label">Область интересов:</h4>
                <ul className="member__interests-list">
                  {member.interests.map((e, i) => (
                    <li className="member__interest" key={i}>{e}</li>
                  ))}
                </ul>
              </div>
            }
          </div>
          <div className="member__photo-wrapper card">
            <img className="member__photo" src={member.photoUrl} />
          </div>
        </div>
        {
          educations.length > 0 &&
          <>
            <h2>Образование</h2>
            <div className="member__educations card card--left">
              {educations.map((e, i) => (
                <div key={i} className="member__education education">
                  <div className="education__first-line">
                    <h4 className="education__place">{e.place}</h4>
                    <div className="education__dates">{e.start} - {e.end || "настоящее время"}</div>
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
            <h2>Публикации</h2>
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
                photoUrl
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