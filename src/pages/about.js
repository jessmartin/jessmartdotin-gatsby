import React from "react"

import Layout from "../components/layout"
import Image from "../components/image"
import Seo from "../components/seo"

const AboutPage = () => (
  <Layout>
    <Seo title="About Jess Martin" />
    <div className="portrait">
      <Image />
    </div>
    <h2>About Jess</h2>

    <p>
      Jess Martin is a seasoned software developer and product thinker focusing
      on the intersection of great technology, legitimate business value, and
      awesome customer experience. Jess has started several companies including{" "}
      <a href="https://first.io">First</a>, a category-defining intelligent CRM
      for real estate agents and <a href="http://ranger.io">Ranger</a>, an
      uptime monitoring service acquired in 2012. He has led teams to design,
      develop and deploy dozens of products for companies at various stages,
      from startups to the Fortune 100.
    </p>

    <p>
      More details on{" "}
      <a href="https://www.linkedin.com/in/jessmartin/">LinkedIn</a>.
    </p>

    <h2>How I Help</h2>

    <p>
      I specialize in building web and mobile products, focusing on the
      full-stack. I'm skilled at all phases of product development, with
      particular experience in navigating the difficult, uncertain beginning
      phase. I'm well-suited to help build:
    </p>

    <ul>
      <li>Prototypes</li>
      <li>First versions</li>
      <li>Architecture overhauls</li>
      <li>Re-writes</li>
      <li>Dramatic new features</li>
    </ul>

    <p>
      If you're not exactly sure what needs to be built, I can help with that,
      too. I can assist with the planning conversations, facilitate discussions
      around trade-offs and suggest creative solutions that help more quickly
      accomplish the project's goals.
    </p>

    <p>
      I love collaborating with teams and I'm also comfortable with building all
      aspects of the project myself.
    </p>

    <p>
      While I have very broad experience, I focus on a few technologies that
      allow me to provide maximum value:
    </p>
    <ul>
      <li>Ruby (Rails, Sinatra, etc)</li>
      <li>React or JQuery javascript front-ends</li>
      <li>React Native for mobile apps</li>
    </ul>

    <h2>Get to Know Me</h2>
    <p>
      If you want to get to know me a little better, I wrote a{" "}
      <a href="/user-guide">User Guide to Working With Jess</a> where you can
      learn a bit about what makes me tick.
    </p>
    <p>Contact me at jessmartin at gmail dot com.</p>
  </Layout>
)

export default AboutPage
