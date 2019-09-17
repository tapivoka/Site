import React from "react"
import { IntlProvider } from "react-intl"

export const flatten = ((nestedMessages, prefix = "") => {
  if (nestedMessages === null) {
    return {}
  }
  return Object.keys(nestedMessages).reduce((messages, key) => {
    const value = nestedMessages[key]
    const prefixedKey = prefix ? `${prefix}.${key}` : key

    if (typeof value === "string") {
      Object.assign(messages, { [prefixedKey]: value })
    } else {
      Object.assign(messages, flatten(value, prefixedKey))
    }

    return messages
  }, {})
})


const getMessages = locale => {
  const messages = require(`../locales/${locale}.json`)

  return flatten(messages)
}

export default ({ element, props }) => {
  if (!props) {
    return
  }

  const { locale } = props.pageContext

  let messages = getMessages(locale)

  return (
    <IntlProvider locale={locale} messages={messages}>
      {element}
    </IntlProvider>
  )
}
