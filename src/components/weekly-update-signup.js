import React from "react"

const WeeklyUpdateSignup = () => (
  <div id="weekly-update-signup">
    <p>
      Sign up to receive a{" "}
      <b>weekly dispatch from the frontiers of computing</b>, including links to
      and summaries of interesting writings, discoveries of new people and
      projects, and updates on my personal projects.{" "}
      <a href="https://letters.jessmart.in/archive/">
        Browse the archives
      </a>
      .
    </p>
    <form
      action="https://buttondown.email/api/emails/embed-subscribe/jessmartin"
      method="post"
      target="popupwindow"
      onsubmit="window.open('https://letters.jessmart.in', 'popupwindow')"
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
)

export default WeeklyUpdateSignup
