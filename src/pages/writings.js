import React from "react"
import { graphql } from "gatsby"

import NoteLink from "../components/note-link"
import Layout from "../components/layout"
import SEO from "../components/seo"

const NotesPage = ({
  data: {
    allMarkdownRemark: { edges },
  },
}) => {
  const Notes = edges.map(edge => (
    <NoteLink key={edge.node.id} post={edge.node} />
  ))

  return (
    <Layout>
      <SEO title="Writings | Jess Martin" />

      <h2>Writings</h2>

      <ul>{Notes}</ul>
    </Layout>
  )
}

export default NotesPage

// prettier-ignore
export const pageQuery = graphql`
  query {
    allMarkdownRemark( filter: { frontmatter: { pageType: { eq: "article" } } }, sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          id
          excerpt(pruneLength: 250)
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            slug
            title
            pageType
            featured
            draft
          }
        }
      }
    }
  }
`
