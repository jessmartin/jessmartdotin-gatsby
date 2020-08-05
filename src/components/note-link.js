import React from "react"
import { Link } from "gatsby"

const ArticleLink = ({ post }) => (
  <li>
    <Link to={`../` + post.frontmatter.slug}>{post.frontmatter.title}</Link>
    &nbsp;<small>(Updated {post.frontmatter.date})</small>
  </li>
)

export default ArticleLink
