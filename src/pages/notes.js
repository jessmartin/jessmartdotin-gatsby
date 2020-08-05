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
      <SEO title="Research Notebook" />
      <div className="article-warning">
        <p>
          <strong>⚠️ Warning!</strong> These are in-progress research notes
          exported directly from Jess's research notebook. The ideas contained
          in these notes are still under active development.
        </p>
      </div>

      <h2>Research Notebook</h2>

      <p>
        This is a collection of notes from Jess's research notebook. Note that
        these notes are raw and largely unedited. They represent ideas that are
        in progress.
      </p>

      <h3>Notes</h3>
      <ul>{Notes}</ul>
    </Layout>
  )
}

export default NotesPage

// prettier-ignore
export const pageQuery = graphql`
  query {
    allMarkdownRemark( filter: { frontmatter: { pageType: { eq: "research-note" } } }, sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          id
          excerpt(pruneLength: 250)
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            slug
            title
            pageType
          }
        }
      }
    }
  }
`
