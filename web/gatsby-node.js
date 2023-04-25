const {isFuture,parseISO} = require('date-fns')
/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

async function createProjectPages (graphql, actions) {
  const {createPage} = actions
  const result = await graphql(`
    {
      allSanityInterview(filter: {slug: {current: {ne: null}}, publishedAt: {ne: null}}) {
        edges {
          node {
            id
            publishedAt
            slug {
              current
            }
          }
        }
      }
    }
  `)

  if (result.errors) throw result.errors

  const projectEdges = (result.data.allSanityInterview || {}).edges || []

  projectEdges
    .filter(edge => !isFuture(parseISO(edge.node.publishedAt)))
    .forEach(edge => {
      const id = edge.node.id
      const slug = edge.node.slug.current
      const path = `/interview/${slug}/`

      createPage({
        path,
        component: require.resolve('./src/templates/interview.js'),
        context: {id}
      })
    })
}

exports.createPages = async ({graphql, actions}) => {
  await createProjectPages(graphql, actions)
}
