import React from "react"
import { Link as GatsbyLink } from "gatsby"
import { useIntl } from "react-intl"

import { defaultLocale } from "./locales"

export const Link = ({ to, children, ...props }) => {
  const { locale } = useIntl()

  const path = locale === defaultLocale ? to : `/${locale}${to}`
  return <GatsbyLink to={path} {...props}>{children}</GatsbyLink>
}

