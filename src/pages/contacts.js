import React, { useState } from "react"
import Layout from "../components/layout"
import { Map, Placemark, YMaps } from "react-yandex-maps"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faAt, faMapMarkerAlt, faMobileAlt, faUniversity } from "@fortawesome/free-solid-svg-icons"

import "./contacts.scss"

export default ({ data }) => {
  const [mapLoaded, setMapLoaded] = useState(false)

  const handleMapLoaded = () => setMapLoaded(true)

  return (
    <Layout>
      <div>
        <h1>
          Контакты
        </h1>

        <div className="contacts">
          <div className="contacts__info card card--left">
            <FontAwesomeIcon className="contacts__icon" icon={faUniversity} />
            <div className="contacts__text">Институт химической кинетики и горения им.&nbsp;В.В.&nbsp;Воеводского Сибирского отделения <br />Российской академии наук
            </div>

            <FontAwesomeIcon className="contacts__icon" icon={faMapMarkerAlt} />
            <div className="contacts__text">630090 <br /> г. Новосибирск <br /> ул. Институтская, 3</div>

            <FontAwesomeIcon className="contacts__icon" icon={faMobileAlt} />
            <div className="contacts__text">+7 (383) 330-76-23</div>

            <FontAwesomeIcon className="contacts__icon" icon={faAt} />
            <div className="contacts__text">baklanov@kinetics.nsc.ru</div>
          </div>
          <div className="contacts__map card">
            {
              !mapLoaded
              &&
              <div className="loader" />
            }
            <YMaps>
              <Map
                onLoad={handleMapLoaded}
                defaultState={{
                  center: [54.844909, 83.11512],
                  zoom: 16,
                }}
                height={350}
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
