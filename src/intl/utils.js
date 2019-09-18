import { groupBy } from "../utils/group-by"
import { navigate as gatsbyNavigate } from "gatsby"
import { defaultLocale, locales } from "./locales"

export function getLocalizedNodes(nodes, locale, defaultLocale) {
  const groupedNodes = groupBy(nodes, e => e.fields.slug)
  const result = []

  Object.keys(groupedNodes).forEach(slug => {
    const group = groupedNodes[slug]

    let localizedNode = group.filter(e => e.fields.locale === locale).shift()

    if (!localizedNode) {
      localizedNode = group.filter(e => e.fields.locale === defaultLocale).shift()
    }

    if (localizedNode) {
      result.push(localizedNode)
    }
  })

  return result
}

export const navigate = (to, options) => {
  if (typeof window === "undefined") {
    return
  }

  const { locale } = window.___gatsbyIntl

  const link = locale !== defaultLocale ? `/${locale}${to}` : `${to}`

  gatsbyNavigate(link, options)
}

export const changeLocale = (locale, to) => {
  const removeLocalePart = pathname => {
    const firstPart = pathname.split("/")[1]

    if (locales.indexOf(firstPart) !== -1) {
      return pathname.replace(`/${firstPart}`, ``)
    } else {
      return pathname
    }
  }

  const pathname = to || removeLocalePart(window.location.pathname)

  let link = `${pathname}${window.location.search}`

  if (locale !== defaultLocale) {
    link = `/${locale}/${link}`
  }

  gatsbyNavigate(link)
}


