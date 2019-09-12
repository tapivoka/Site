import React from "react"
import Layout from "../components/layout"

import './index.scss'
import groupPhoto from '../../content/group-photo.jpeg';


export default ({ data }) => {
  return (
    <Layout>
      <div>
        <h1>
          Приветствуем вас на странице группы Молекулярной фотодинамики
        </h1>

        <img className="card" src={groupPhoto} />
      </div>
    </Layout>
  )
}
