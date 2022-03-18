import React from "react"
import { Link, graphql } from "gatsby"

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

      <p>
        <strong>
          <Link to="/notes">Research Notebook</Link>
        </strong>{" "}
        - a collection of research notes exported directly from Jess's research
        notebooks.
      </p>

      <h3>Articles</h3>

      <ul>{Notes}</ul>

      <h3>Older Articles</h3>
      <ul>
        <li>
          <a href="https://medium.com/@jessmartin/how-to-trello-your-project-81429919e6a3">
            How To Trello Your Project
          </a>
          &nbsp;What to do when your todo list won’t do. May 2019.
        </li>
        <li>
          <a href="https://medium.com/@jessmartin/why-you-should-use-trello-for-damn-near-everything-dca943d58fa9#.4xl8bwxmk">
            Why You Should Use Trello For Damn Near Everything
          </a>
          &nbsp;No, seriously. April 2015.
        </li>
        <li>
          <a href="https://medium.com/@jessmartin/catching-my-breath-af5a7dcaf220">
            Catching My Breath
          </a>
          &nbsp;After five years building a tech startup, a respite. May 2019.
        </li>
        <li>
          <a href="https://blog.first.io/life-beyond-zillow-5941c97f5081">
            Life Beyond Zillow
          </a>
          &nbsp;Real estate and the return of the relationship. December 2016.
        </li>
        <li>
          <a href="https://blog.first.io/the-irrefutable-math-of-relational-marketing-6ba7784504e4">
            The Irrefutable Math of Relational Marketing
          </a>
          &nbsp;The easiest way to grow your business is to talk to people that
          you already know. October 2016.
        </li>
        <li>
          <a href="https://medium.com/@jessmartin/the-real-raise-amount-92e3bc33a3c1">
            The Real Raise Amount
          </a>
          &nbsp;Fundraising reflections from raising a seed round and Series A.
          May 2015.
        </li>
        <li>
          <a href="https://github.com/jessmartin/writings/raw/master/pcg_paper/generative.pdf">
            Generating graphical content using grammars and graphs
          </a>
          &nbsp;Graduate Thesis, UNC-Chapel Hill. May 2007.
        </li>
      </ul>

    </Layout>
  )
}

export default NotesPage

// prettier-ignore
export const pageQuery = graphql`
  query {
    allMarkdownRemark( filter: { frontmatter: { pageType: { eq: "article" }, , draft: {ne: "yes"} } }, sort: { order: DESC, fields: [frontmatter___date] }) {
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
