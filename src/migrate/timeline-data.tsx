// @ts-ignore
import FalmouthImage from "../migrate/images/timeline/falmouth.jpg"
// @ts-ignore
import WcsImage from "../migrate/images/timeline/wcs.jpg"
// @ts-ignore
import UclImage from "../migrate/images/timeline/ucl.jpg"
// @ts-ignore
import ShazamImage from "../migrate/images/timeline/shazam.png"
// @ts-ignore
import ImprobableImage from "../migrate/images/timeline/improbable.png"
// @ts-ignore
import KobeImage from "../migrate/images/timeline/kobe.jpg"
// @ts-ignore
import MedmainImage from "../migrate/images/timeline/medmain.png"
// @ts-ignore
import LondonImage from "../migrate/images/timeline/london.jpg"
// @ts-ignore
import ThirdNerveImage from "../migrate/images/timeline/thirdnerve.png"
import { ChildFriendly, Home, School, Work } from "@material-ui/icons/"
import React from "react"

const icons = {
  "born": {
    "icon": <ChildFriendly/>,
    "background": { background: "rgb(33, 150, 243)", color: "#fff" },
  },
  "home": {
    "icon": <Home/>,
    "background": { background: "rgb(233, 30, 99)", color: "#fff" },
  },
  "school": {
    "icon": <School/>,
    "background": { background: "rgb(233, 30, 99)", color: "#fff" },
  },
  "work": {
    "icon": <Work/>,
    "background": { background: "rgb(233, 30, 99)", color: "#fff" },
  },
}

export const life = [
  {
    "date": "2019 - Now",
    "icon": icons.work,
    "title": "Medmain Inc.",
    "image": MedmainImage,
    "subtitle1": "Software Engineer, Server",
    "subtitle2": "",
    "text": "Developing products at the forefront of AI-assisted medicine.",
    "mainLink": "https://medmain.net/",
  },
  {
    "date": "2019",
    "icon": icons.home,
    "title": "Moved 🇯🇵",
    "image": KobeImage,
    "subtitle1": "Kobe, Hyogo",
    "subtitle2": "",
    "text": "Studying Japanese and brushing up on new technologies.",
    "mainLink": "https://goo.gl/maps/hURywEujBbYCqqbA6",
  },
  {
    "date": "2015 - 2019",
    "icon": icons.work,
    "title": "Improbable",
    "image": ImprobableImage,
    "subtitle1": "Software Engineer & Product Manager",
    "subtitle2": "",
    "text": "Improbable contacted me when they were an early-stage startup of around 40 people. The mission " +
      "merged the gaming industry with challenging software and product problems, so I immediately interviewed and the rest, as they" +
      " say, is history. Improbable now stands at around 400 people. I was sad to leave after I had experienced so much" +
      " there, but new horizons beckoned!",
    "mainLink": "https://www.crunchbase.com/organization/improbable",
  },
  {
    "date": "2013 - 2015",
    "icon": icons.work,
    "title": "Shazam",
    "image": ShazamImage,
    "subtitle1": "Junior Software Engineer",
    "subtitle2": "(Aqc. by Apple, 2018)",
    "text": "After interning here during the final year of my degree, I joined the Android team full-time.",
    "mainLink": "https://www.crunchbase.com/organization/shazam",
  },
  {
    "date": "2013",
    "icon": icons.work,
    "title": "Third Nerve",
    "image": ThirdNerveImage,
    "subtitle1": "Founder",
    "subtitle2": "",
    "text": "I founded Third Nerve at UCL during a resurgence of independent games. We developed" +
      " a multiplayer platformer that we took to game festivals around the UK and successfully got greenlit on Steam.",
    "mainLink": "https://steamcommunity.com/sharedfiles/filedetails/?id=92967778",
  },
  {
    "date": "2010 - 2014",
    "icon": icons.school,
    "title": "University College London",
    "image": UclImage,
    "subtitle1": "BSc Computer Science",
    "subtitle2": "First-class Honours",
    "text": "Rather than attend music College, I decided to get a degree in Computer Science. Graduated with 1st-class honours.",
    "mainLink": "https://www.ucl.ac.uk/",
  },
  {
    "date": "2010",
    "icon": icons.home,
    "title": "Moved 🇬🇧",
    "image": LondonImage,
    "subtitle1": "London, UK",
    "subtitle2": "",
    "text": "",
    "mainLink": "https://goo.gl/maps/QoKpM98YJtjERNmY8",
  },
  {
    "date": "2006 - 2010",
    "icon": icons.school,
    "title": "Wells Cathedral School",
    "image": WcsImage,
    "subtitle1": "Specialist Musician",
    "subtitle2": "3 A-Levels (A*-A), 6 GCSEs (A*-A)",
    "text": "I joined as a trombonist with a full musical scholarship.",
    "mainLink": "https://wells.cathedral.school/",
  },
  {
    "date": "1992",
    "icon": icons.born,
    "title": "Born 🇬🇧",
    "image": FalmouthImage,
    "subtitle1": "Falmouth, Cornwall",
    "subtitle2": "",
    "text": "",
    "mainLink": "https://goo.gl/maps/w7SRynhttGuu4Nst7",
  },
]