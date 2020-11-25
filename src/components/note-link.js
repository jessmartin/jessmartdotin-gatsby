import React from "react"
import { Link } from "gatsby"

const ArticleLink = ({ post }) => (
  <li>
    <Link to={`../` + post.frontmatter.slug}>{post.frontmatter.title}</Link>
    &nbsp;<span class="updated">{post.frontmatter.date}</span>
  </li>
)

export default ArticleLink
