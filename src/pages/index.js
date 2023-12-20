import React from "react"
import Seo from "../components/seo"

const IndexPage = () => {

  return (
    <div style={{ fontFamily: 'Courier', fontWeight: 'bold', textAlign: 'center' }}>
      <p>Welcome to my workshop</p>
      <img src={"/images/webpage-layout.png"} usemap="#image-map" />
      <map name="image-map">
        <area target="" alt="whiteboards" title="whiteboards" href="https://notes.jessmart.in/Lab+Notebook/Projects/Whiteboard+Snapper" coords="108,154,308,459" shape="rect" />
        <area target="" alt="tools" title="tools" href="https://jessmart.in/articles/tools" coords="603,112,803,479" shape="rect" />
        <area target="" alt="projects" title="projects" href="https://notes.jessmart.in/Lab+Notebook/Projects/Desktop+Browser-based+OS" coords="527,721,1098,728,1314,924,412,913" shape="poly" />
        <area target="" alt="hi" title="hi" href="mailto:jessmartin@gmail.com" coords="199,900,126" shape="circle" />
        <area target="" alt="Research Updates" title="Research Updates" href="https://letters.jessmart.in" coords="196,490,331,589" shape="rect" />
        <area target="" alt="Research Notebook" title="Research Notebook" href="https://notes.jessmart.in" coords="430,512,547,596" shape="rect" />
        <area target="" alt="My Writings" title="My Writings" href="/writings" coords="641,596,686,517,757,515,767,556,742,599" shape="poly" />
        <area target="" alt="Books" title="Books" href="https://notes.jessmart.in/Readwise/Books/A+Pattern+Language" coords="1443,224,1163,378" shape="rect" />
        <area target="" alt="Articles" title="Articles" href="https://notes.jessmart.in/Readwise/Articles/As+We+May+Think+by+Vannevar+Bush" coords="1163,383,1430,485" shape="rect" />
        <area target="" alt="Tweets" title="Tweets" href="https://twitter.com/jessmartin/likes" coords="1174,492,1427,591" shape="rect" />
        <area target="" alt="Videos" title="Videos" href="https://www.youtube.com/jessamartin" coords="1178,611,1427,717" shape="rect" />
        <area target="" alt="Distill &amp; Disseminate Generalizable Insights" title="Distill &amp; Disseminate Generalizable Insights" href="https://notes.jessmart.in/Lab+Notebook/Evergreen+Notes/Discover+and+disseminate+generalizable+insights" coords="923,578,1054,596,1055,482,920,464" shape="poly" />
      </map>

      <p>Return to the <a href="/boring">old, boring homepage</a>.</p>
    </div >
  )
}

export default IndexPage
