import React from "react"
import { graphql } from "gatsby"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

export default function Template({ data }) {
  const { markdownRemark } = data
  const { frontmatter, html } = markdownRemark
  return (
    <Layout>
      <SEO title={frontmatter.title} />
      <div className="article-container">
        <div className="article">
          {frontmatter.pageType === "research-note" && (
            <div className="article-warning">
              <p>
                <strong><span role="img" aria-label="warning sign">⚠</span> Warning!</strong> This is an in-progress research
                note exported directly from{" "}
                <Link to="/notes">Jess's note-taking system</Link>. The ideas
                in this note are still under active development.
              </p>
            </div>
          )}
          <p class="small">
            <i>Last Updated: {frontmatter.date}</i>
          </p>
          <div
            className="article-content"
            dangerouslySetInnerHTML={{ __html: html }}
          />
        </div>
      </div>
    </Layout>
  )
}

export const pageQuery = graphql`
  query($slug: String!) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        slug
        title
        pageType
      }
    }
  }
`
