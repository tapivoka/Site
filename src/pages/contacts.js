import React, { useState } from "react"
import { FormattedHTMLMessage, FormattedMessage, useIntl } from "react-intl"
import { Map, Placemark, YMaps } from "react-yandex-maps"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faAt, faMapMarkerAlt, faMobileAlt, faUniversity } from "@fortawesome/free-solid-svg-icons"

import { Layout } from "../components/layout"

import "./contacts.scss"

export default ({ pageContext: { locale } }) => {
  const [mapLoaded, setMapLoaded] = useState(false)

  const handleMapLoaded = () => setMapLoaded(true)

  const { formatMessage } = useIntl()
  const title = formatMessage({ id: "pages.contacts" })

  return (
    <Layout title={title}>
      <section>
        <h1>{title}</h1>

        <div className="contacts">
          <div className="contacts__info card card--left">
            <FontAwesomeIcon className="contacts__icon" icon={faUniversity} />
            <div className="contacts__text">
              <FormattedHTMLMessage id="contacts-page.name" />
            </div>

            <FontAwesomeIcon className="contacts__icon" icon={faMapMarkerAlt} />
            <div className="contacts__text">
              <FormattedHTMLMessage id="contacts-page.address" />
            </div>

            <FontAwesomeIcon className="contacts__icon" icon={faMobileAlt} />
            <div className="contacts__text">
              <FormattedMessage id="contacts-page.phone-number" />
            </div>

            <FontAwesomeIcon className="contacts__icon" icon={faAt} />
            <div className="contacts__text">
              <FormattedMessage className="contacts__text" id="contacts-page.email" />
            </div>
          </div>
          <div className="contacts__map card">
            {
              !mapLoaded
              &&
              <div className="loader" />
            }
            <YMaps query={{ lang: locale }}>
              <Map
                onLoad={handleMapLoaded}
                defaultState={{
                  center: [54.844909, 83.11512],
                  zoom: 16,
                }}
                height="100%"
                width="100%"
              >
                <Placemark geometry={[54.845160, 83.116898]} />
              </Map>
            </YMaps>
          </div>
        </div>

      </section>
    </Layout>
  )
}
