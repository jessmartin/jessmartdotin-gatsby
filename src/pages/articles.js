import React from "react"
import { graphql } from "gatsby"

import ArticleLink from "../components/article-link"
import Layout from "../components/layout"
import SEO from "../components/seo"

const ArticlesPage = ({
  data: {
    allMarkdownRemark: { edges },
  },
}) => {
  const Articles = edges.map(edge => (
    <ArticleLink key={edge.node.id} post={edge.node} />
  ))

  return (
    <Layout>
      <SEO title="Jess Martin - Articles" />
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
      <ul>{Articles}</ul>
    </Layout>
  )
}

export default ArticlesPage

export const pageQuery = graphql`
  query {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          id
          excerpt(pruneLength: 250)
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            slug
            title
          }
        }
      }
    }
  }
`
