import React from "react"
import Layout from "../components/layout"
import { Map, Placemark, YMaps } from "react-yandex-maps"

import './contacts.scss'

export default ({ data }) => {
  return (
    <Layout>
      <div>
        <h1>
          Контакты
        </h1>

        <div className="contacts">
          <div className="contacts__info">
            г.Новосибирск <br/>
            ул. Институтская 3
          </div>
          <div className="contacts__map">
            <YMaps>
              <Map
                defaultState={{
                  center: [54.844909, 83.11512],
                  zoom: 16
                }}
                height={400}
                width="100%"
              >
                <Placemark geometry={[54.845160, 83.116898]} />
              </Map>
            </YMaps>
          </div>
        </div>
      </div>
    </Layout>
  )
}
