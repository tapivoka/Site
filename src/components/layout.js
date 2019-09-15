import React from "react"
import { Helmet } from "react-helmet"
import { injectIntl } from "gatsby-plugin-intl"

import "./layout.scss"
import { Header } from "./header"

export default injectIntl(({ children, intl }) => {
  return (
    <div className="layout">
      <Helmet>
        <html lang={intl.locale} />
        <meta charSet="utf-8" />
        <title>{ intl.formatMessage({ id: "meta.title"})}</title>
        <meta name="description" content={ intl.formatMessage({ id: "meta.description"})} />
      </Helmet>
      <header className="layout__header"><Header /></header>
      <main className="layout__main">{children}</main>
      <footer className="layout__footer" />
    </div>
  )
})
