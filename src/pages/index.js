import React from "react"
import Layout from "../components/layout"

import './index.scss'
import { graphql } from "gatsby"
import Img from "gatsby-image"


export default ({ data }) => {
  return (
    <Layout>
      <div>
        <h1>
          Приветствуем вас на странице группы Молекулярной фотодинамики
        </h1>
        <Img className="card" fluid={data.file.childImageSharp.fluid} alt="Фото группы"/>
      </div>
    </Layout>
  )
}


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

