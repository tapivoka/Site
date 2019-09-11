const path = require(`path`)

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions
  if (node.internal.type === `MarkdownRemark`) {
    const fileNode = getNode(node.parent)

    createNodeField({
      node,
      name: `type`,
      value: fileNode.relativeDirectory,
    })
    createNodeField({
      node,
      name: `name`,
      value: fileNode.name,
    })
    createNodeField({
      node,
      name: `slug`,
      value: `/${fileNode.relativeDirectory}/${fileNode.name}`,
    })

  }
}

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const result = await graphql(`
    query {
      allMarkdownRemark {
        edges {
          node {
            fields {
              type,
              name,
              slug
            }
          }
        }
      }
    }
  `)
  result.data.allMarkdownRemark.edges.forEach(({ node }) => {
    createPage({
      path: node.fields.slug,
      component: path.resolve(`./src/templates/${node.fields.type}.js`),
      context: {
        name: node.fields.name,
        type: node.fields.type,
        slug: node.fields.slug
      },
    })
  })
}
