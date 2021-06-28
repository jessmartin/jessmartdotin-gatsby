import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import NoteLink from "../components/note-link"

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
      <SEO title="Jess Martin" />
      <div class="portrait">
        <Image />
      </div>
      <h2 class="left-title">Welcome.</h2>

      <p>I'm Jess Martin.</p>

      <p>
        I <a href="#writings">write</a>, <a href="#talks">speak</a>, and{" "}
        <a href="#work">create the future of computing</a>.
      </p>

      <section>
        <h3>Recent</h3>
        <ul>{RecentNotes}</ul>

        <div id="weekly-update-signup">
          <p>
            Sign up to receive a{" "}
            <b>weekly dispatch from the frontiers of computing</b>, including
            links to and summaries of interesting writings, discoveries of new
            people and projects, and updates on my personal projects.
          </p>
          <form
            action="https://buttondown.email/api/emails/embed-subscribe/jessmartin"
            method="post"
            target="popupwindow"
            onsubmit="window.open('https://buttondown.email/jessmartin', 'popupwindow')"
          >
            <input
              id="first-name"
              type="text"
              name="metadata__first-name"
              required
              placeholder="First Name"
            />
            <input
              id="last-name"
              type="text"
              name="metadata__last-name"
              required
              placeholder="Last Name"
            />
            <input
              id="email"
              type="email"
              name="email"
              required
              placeholder="email@email.com"
            />
            <input class="signup-submit" type="submit" value="Subscribe" />
          </form>
        </div>
      </section>

      <h3 id="work">Work</h3>
      <h4>Current</h4>
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
          I <strong>publish</strong> my <a href="/notes/">research notes</a> via
          a home-grown note-taking system.
        </li>
        <li>
          My current <strong>research interests</strong> are{" "}
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
        <li>
          I design and deliver educational experiences to{" "}
          <strong>teach software engineering</strong> at scale at{" "}
          <a href="https://lambdaschool.com/">Lambda School</a>.
        </li>
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

      <h4>Projects & Open Source</h4>
      <ul>
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

      <h3 id="writings">Writings</h3>
      <p>
        <strong>
          <Link to="/notes">Research Notebook</Link>
        </strong>{" "}
        - a collection of research notes exported directly from Jess's research
        notebooks.
      </p>

      <p>A collection of articles across various subjects.</p>
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

      <h3>Elsewhere on the web</h3>
      <p>
        I post code on <a href="http://github.com/jessmartin">github</a>.
      </p>
      <p>
        I write on <a href="https://medium.com/@jessmartin">medium</a>.
      </p>
      <p>
        I occasionally <a href="http://twitter.com/jessmartin">tweet</a>.
      </p>
    </Layout>
  )
}

export default IndexPage

// prettier-ignore
export const pageQuery = graphql`
  query {
    allMarkdownRemark(limit: 5, sort: {fields: frontmatter___date, order: DESC}) {
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
