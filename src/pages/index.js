import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import Seo from "../components/seo"
import NoteLink from "../components/note-link"
import WeeklyUpdateSignup from "../components/weekly-update-signup"

const IndexPage = ({
  data: {
    allMarkdownRemark: { edges },
  },
}) => {
  const RecentNotes = edges.map(edge => (
    <NoteLink key={edge.node.id} post={edge.node} />
  ))

  return (
    <Layout>
      <Seo title="Jess Martin" />
      <div class="portrait">
        <Image />
      </div>
      <h2 class="left-title">Welcome.</h2>

      <p>I'm Jess Martin.</p>

      <p>
        I <Link to="/writings">write</Link>, <a href="#talks">speak</a>, and{" "}
        <a href="#work">create the future of computing</a>.
      </p>

      <section>
        <h3>Featured Articles</h3>
        <ul>{RecentNotes}</ul>

        <WeeklyUpdateSignup />
      </section>

      <h3 id="work">Work</h3>
      <h4>Current: Applied Research @ <a href="https://fission.codes">Fission</a></h4>
      <ul>
        <li>
          I <strong>livestream</strong> my adventures in programming on YouTube
          via{" "}
          <a href="https://www.youtube.com/user/jessamartin">
            Coding With Jess
          </a>
          .
        </li>
        <li>
          I'm <strong>investigating</strong> new economic models for resourcing open source software through <a href="https://sociotechnica.org">SocioTechnica</a>.
        </li>
        <li>
          I help <strong>organize</strong> a monthly meetup called <a href="https://toolsforthought.rocks/">Tools for for Thought Rocks</a>.
        </li>
        <li>
          I <strong>publish</strong> my <a href="/notes/">research notes</a> via
          a home-grown note-taking system.
        </li>
        <li>
          My <strong>research interests</strong> are{" "}
          <a href="/notes/0581F68D-2A5F-4851-A617-A9FBD3592636-827-0000351A69320E9E">
            Realtime Collaboration Systems
          </a>
          , the impact of rich{" "}
          <a href="/notes/AE1554A0-EC67-4063-911D-334B8BEB0085-1675-0000E70184C1E679">
            Knowledge Representations
          </a>
          , and inventing new{" "}
          <a href="/notes/20E186CF-BDF2-4143-8B94-69ECABD3E7B0-951-000059BBE372F180">
            Tools for Thinking
          </a>
          .
        </li>
      </ul>

      <h4>Projects & Open Source</h4>
      <ul>
        <li>
          <a href="https://github.com/jessmartin/mumblr">
            Mumblr
          </a>{" "}
          - Micro-blogging in the vein of tumblr, powered by Fission's <a href="https://github.com/fission-suite/webnative">WebNative</a>.
        </li>
        <li>
          <a href="https://mediums.jessmart.in">
            Medium Mashup
          </a>{" "}
          - An Innovation Game where you invent a new tool using randomly selected mediums and notations.
        </li>
        <li>
          <a href="https://github.com/jessmartin/spotify-new-releases">
            Spotify New Releases
          </a>{" "}
          - 🎶 Timeline view of new albums by your Spotify-followed artists. 🎶
        </li>
        <li>
          <a href="https://github.com/jessmartin/CoolButtons">CoolButtons</a> -
          Nifty, iOS style glossy buttons for iOS.
        </li>
        <li>
          <a href="https://github.com/jessmartin/taskpaper-tmbundle">
            Taskpaper TextMate Bundle
          </a>{" "}
          - Use TextMate to manage your{" "}
          <a href="http://www.hogbaysoftware.com/products/taskpaper">
            Taskpaper
          </a>{" "}
          files, complete with keyboard shortcuts and text highlighting.
        </li>
        <li>
          <a href="https://github.com/jessmartin/language-popularity">
            Language Popularity
          </a>{" "}
          - Simple language popularity tracker based on usage and discussion on
          a few different sites.
        </li>
        <li class="hide">Procedural House Generation</li>
      </ul>

      <h4>Startups</h4>
      <ul>
        <li>
          <a href="http://first.io">First</a> - Helping real estate agents
          connect with their clients at the perfect time. Acquired by{" "}
          <a href="https://remax.com">RE/MAX</a> (
          <a href="https://investors.remax.com/investor-relations/press-releases/financial-releases/press-release-details/2019/REMAX-Acquires-Data-Science-Startup-First-Continuing-the-Brands-Technological-Transformation/default.aspx">
            press release
          </a>
          ).
        </li>
        <li>
          <a href="http://ranger.io">Ranger</a> - Partnered with{" "}
          <a href="https://twitter.com/shayfrendt">Shay Frendt</a> to build a
          heroku-based monitoring service. We got{" "}
          <a href="http://blog.exceptional.io/news/we-acquire-ranger-io-to-give-monitoring-shot-in-the-arm/">
            acquired
          </a>{" "}
          (
          <a href="http://techcrunch.com/2012/11/29/exceptional-buys-ranger/">
            press @ TC
          </a>
          ).
        </li>
        <li>
          <a href="https://twitter.com/enroll_io">Enroll</a> - A platform for
          managing in-person classes, workshops, and courses.
        </li>
        <li class="hide">
          <a href="/hours">Office Hours for Startups</a> - Meeting with local
          entrepreneurs to help them grow their business.
        </li>
      </ul>


      <h3 id="talks">Talks</h3>
      <p>Talks I've given in various venues.</p>
      <ul>
        <li>
          <a href="https://speakerdeck.com/jessmartin/product-management-philosophy-and-practices">
            Product Management: Philosophy &amp; Practices
          </a>
          , delivered at <a href="http://cloudfactory.com">CloudFactory</a>,
          January 2013.
        </li>
        <li>
          <a href="https://speakerdeck.com/jessmartin/practices-for-personal-productivity">
            Practices for Personal Productivity
          </a>
          , delivered at <a href="http://cloudfactory.com">CloudFactory</a>,
          January 2013.
        </li>
        <li>
          <a href="https://speakerdeck.com/jessmartin/being-smart-with-debt-tactical-tools-for-technical-debt">
            Being Smart with Debt: Tactical Tools for Technical Debt
          </a>
          , delivered at <a href="http://cloudfactory.com">CloudFactory</a>,
          December 2012.
        </li>
        <li>
          <a href="https://speakerdeck.com/jessmartin/tale-of-a-rewrite-lessons-learned-rewriting-ranger">
            Tale of a Rewrite: Lessons Learned Rewriting Ranger
          </a>
          , delivered at <a href="http://cloudfactory.com">CloudFactory</a>,
          December 2012.
        </li>
        <li>
          <a href="https://speakerdeck.com/jessmartin/speak-interface-conversations-between-developers-and-designers">
            Learn to Speak Interface: Conversations Between Developers and
            Designers
          </a>
          , delivered at{" "}
          <a href="http://en.oreilly.com/rails2010/public/schedule/detail/14326">
            RailsConf 2010
          </a>
          , July 2010.
        </li>
        <li>
          <a href="https://speakerdeck.com/jessmartin/on-giving">On Giving</a>,
          delivered at <a href="http://thinkrelevance.com">Relevance</a>,
          November 2011.
        </li>
        <li>
          <a href="https://github.com/jessmartin/writings/tree/master/make_your_site_feel_better">
            3 Tips to Make Your Site Feel Better
          </a>
          , lightning talk at DevNation Austin, May 2010.
        </li>
        <li>
          <a href="https://github.com/jessmartin/talks/tree/master/three_questions_of_a_product_champion">
            3 Questions of a Product Champion
          </a>
          , delivered at DevNation Durham, February 2010.
        </li>
        <li>
          <a href="https://github.com/jessmartin/writings/tree/master/css_html_the_way">
            CSS and HTML: The One True Way
          </a>
          , delivered at DevNation Boulder, October 2009.
        </li>
        <li class="hide">
          Cloud Talk: A RunCodeRun Case Study, delivered at DevNation Boston,
          August 2009.
        </li>
        <li class="hide">
          Getting Girls With Musical Magic and Ruby, delivered with Chad
          Humphries at Developer Day Durham, March 2009.
        </li>
        <li class="hide">
          Procedural House Generation: A method for dynamically generating floor
          plans, delivered at Interactive 3D Graphics and Games, March 2006.
        </li>
      </ul>

      <h3 id="creators">Creators I Support</h3>
      <p>I love supporting people who are doing interesting, thoughtful creative work.</p>

      <p>I monetarily support the following creators:</p>
      <ul>
        <li><a href="https://alexanderobenauer.com/membership">Alexander Obernauer</a></li>
        <li><a href="https://www.patreon.com/quantumcountry">Andy Matuschak</a></li>
        <li><a href="http://pketh.org/">Pirijan</a></li>
        <li><a href="https://simonsarris.substack.com/">Simon Sarris</a></li>
        <li><a href="https://twitter.com/_vojto">Vojtech Rinik</a></li>
      </ul>

      <h3>Elsewhere on the web</h3>
      <p>
        My code is on <a href="http://github.com/jessmartin">github</a>.
        I'm <a href="http://twitter.com/jessmartin">@jessmartin</a> on twitter.
      </p>
    </Layout >
  )
}

export default IndexPage

// prettier-ignore
export const pageQuery = graphql`
  query {
    allMarkdownRemark(limit: 5, filter: {frontmatter: {featured: {eq: "yes"}}}, sort: {fields: frontmatter___date, order: DESC}) {
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "MMMM DD, YYYY")
            slug
            pageType
          }
        }
      }
    }
  }
`
