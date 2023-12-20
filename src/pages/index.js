import React from "react"
import Seo from "../components/seo"

const IndexPage = () => {

  return (
    <div style={{ fontFamily: 'Courier', fontWeight: 'bold', textAlign: 'center' }}>
      <Seo title="Jess's Workshop"></Seo>
      <style>{`
        svg {
          position: absolute;
          top: 0;
          left: 0;
          pointer-events: none; /* allows clicking through to the image if needed */
        }

        .svg-link {
          fill: transparent;
          stroke: none;
          pointer-events: all; /* ensures the SVG shapes are clickable */
        }

        .svg-link:hover {
          fill: rgba(255, 255, 255, 0.5); /* Example hover effect, adjust as needed */
          mix-blend-mode: lighten;
        }
      `}</style>
      <p>Welcome to <a href="https://twitter.com">Jess's</a> workshop.</p>
      <div style={{ position: 'relative', textAlign: 'left' }}>
        <img src={"/images/webpage-layout.png"} />

        <svg style={{ position: 'absolute', top: '0', left: '0', pointerEvents: 'none' }} width="1538" height="1228" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
          <a xlinkHref="https://notes.jessmart.in/Lab+Notebook/Projects/Whiteboard+Snapper"><rect x="108" y="154" width="200" height="305" class="svg-link" /></a>
          <a xlinkHref="https://jessmart.in/articles/tools"><rect x="603" y="112" width="200" height="367" class="svg-link" /></a>
          <a xlinkHref="https://notes.jessmart.in/Lab+Notebook/Projects/Desktop+Browser-based+OS"><polygon points="527,721,1098,728,1314,924,412,913" class="svg-link" /></a>
          <a xlinkHref="mailto:jessmartin@gmail.com"><circle cx="199" cy="900" r="126" class="svg-link" /></a>
          <a xlinkHref="https://letters.jessmart.in"><rect x="196" y="490" width="135" height="99" class="svg-link" /></a>
          <a xlinkHref="https://notes.jessmart.in"><rect x="430" y="512" width="117" height="84" class="svg-link" /></a>
          <a xlinkHref="/writings"><polygon points="641,596,686,517,757,515,767,556,742,599" class="svg-link" /></a>
          <a xlinkHref="https://notes.jessmart.in/Readwise/Books/A+Pattern+Language"><rect x="1163" y="224" width="280" height="154" class="svg-link" /></a>
          <a xlinkHref="https://notes.jessmart.in/Readwise/Articles/As+We+May+Think+by+Vannevar+Bush"><rect x="1163" y="383" width="267" height="102" class="svg-link" /></a>
          <a xlinkHref="https://twitter.com/jessmartin/likes"><rect x="1174" y="492" width="253" height="99" class="svg-link" /></a>
          <a xlinkHref="https://www.youtube.com/jessamartin"><rect x="1178" y="611" width="249" height="106" class="svg-link" /></a>
          <a xlinkHref="https://notes.jessmart.in/Lab+Notebook/Evergreen+Notes/Discover+and+disseminate+generalizable+insights"><polygon points="923,578,1054,596,1055,482,920,464" class="svg-link" /></a>
        </svg>

      </div>
      <p>Return to the <a href="/boring">old, boring homepage</a>.</p>
    </div >
  )
}

export default IndexPage
