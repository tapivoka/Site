import { groupBy } from "../utils/group-by"

export function getLocalizedNodes(nodes, locale, defaultLocale) {
  const groupedNodes = groupBy(nodes, e => e.fields.slug)
  const result = []

  Object.keys(groupedNodes).forEach(slug => {
    const group = groupedNodes[slug];

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

