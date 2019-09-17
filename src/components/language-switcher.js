import React from "react"
import { useIntl } from "react-intl"

import { changeLocale } from "../intl/utils"
import { locales } from "../intl/locales"

import './language-switcher.scss'

export const LanguageSwitcher = () => {
  const { locale } = useIntl()

  const handleChangeLocaleClick = (locale) => {
    changeLocale(locale)
  }

  const switchToLocales = locales.filter(e => e !== locale)

  return (
    <div className="language-switcher">
      {
        switchToLocales.map(e => (
          <div
            key={e}
            className="language-switcher__locale"
            onClick={() => handleChangeLocaleClick(e)}
          >{e}</div>
        ))
      }
    </div>
  )


}
