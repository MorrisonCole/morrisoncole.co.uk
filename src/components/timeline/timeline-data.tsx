import { ChildFriendly, Home, School, Work } from "@material-ui/icons/";
import React from "react";
import { CSSProperties } from "@material-ui/core/styles/withStyles";
import { ImageSharp, ImageSharpFluid } from "../../../types/graphql-types";
import { IGatsbyImageData } from "gatsby-plugin-image";

interface TimelineIcon {
  background: CSSProperties;
  icon: JSX.Element;
}

class BornIcon implements TimelineIcon {
  background = { background: "rgb(33, 150, 243)", color: "#fff" };
  icon = (<ChildFriendly />);
}

class HomeIcon implements TimelineIcon {
  background = { background: "rgb(233, 30, 99)", color: "#fff" };
  icon = (<Home />);
}

class SchoolIcon implements TimelineIcon {
  background = { background: "rgb(233, 30, 99)", color: "#fff" };
  icon = (<School />);
}

class WorkIcon implements TimelineIcon {
  background = { background: "rgb(233, 30, 99)", color: "#fff" };
  icon = (<Work />);
}

export interface TimelineEntryData {
  date: string;
  icon: TimelineIcon;
  image: IGatsbyImageData;
  mainLink: string;
  subtitle1: string;
  subtitle2: string;
  text: string;
  title: string;
}

export function life(
  imageFiles: Map<string, IGatsbyImageData>
): TimelineEntryData[] {
  return [
    {
      date: "2020 - Now",
      icon: new WorkIcon(),
      image: imageFiles.get("unity"),
      mainLink: "https://unity.com/",
      subtitle1: "Senior Software Engineer",
      subtitle2: "",
      text: "Building new tools to democratize game development 🛠",
      title: "Unity",
    },
    {
      date: "2019",
      icon: new HomeIcon(),
      image: imageFiles.get("tokyo"),
      mainLink: "https://goo.gl/maps/7FFdpXCeUU3koAAv9",
      subtitle1: "Tokyo",
      subtitle2: "",
      text: "From Kobe to Tokyo, where I'm now working and teaching in the software industry 🙌",
      title: "Moved 🇯🇵",
    },
    {
      date: "2019 - 2020",
      icon: new WorkIcon(),
      image: imageFiles.get("medmain"),
      mainLink: "https://medmain.com/",
      subtitle1: "Software Engineer, Server",
      subtitle2: "",
      text: "Developing products at the forefront of AI-assisted medicine.",
      title: "Medmain Inc.",
    },
    {
      date: "2019",
      icon: new HomeIcon(),
      image: imageFiles.get("kobe"),
      mainLink: "https://goo.gl/maps/hURywEujBbYCqqbA6",
      subtitle1: "Kobe, Hyogo",
      subtitle2: "",
      text: "Studied Japanese, hiked (a lot), and begun exploring Japan!",
      title: "Moved 🇯🇵",
    },
    {
      date: "2015 - 2019",
      icon: new WorkIcon(),
      image: imageFiles.get("improbable"),
      mainLink: "https://www.crunchbase.com/organization/improbable",
      subtitle1: "Software Engineer & Product Manager",
      subtitle2: "",
      text:
        "Improbable contacted me when they were an early-stage startup of around 40 people. The mission " +
        "merged the gaming industry with challenging software and product problems, so I immediately interviewed and " +
        "the rest, as they say, is history. Improbable now stands at around 400 people. I was sad to leave after I " +
        "had experienced so much there, but new horizons beckoned!",
      title: "Improbable",
    },
    {
      date: "2013 - 2015",
      icon: new WorkIcon(),
      image: imageFiles.get("shazam"),
      mainLink: "https://www.crunchbase.com/organization/shazam",
      subtitle1: "Junior Software Engineer",
      subtitle2: "(Aqc. by Apple, 2018)",
      text: "After interning here during the final year of my degree, I joined the Android team full-time.",
      title: "Shazam",
    },
    {
      date: "2013",
      icon: new WorkIcon(),
      image: imageFiles.get("thirdnerve"),
      mainLink:
        "https://steamcommunity.com/sharedfiles/filedetails/?id=92967778",
      subtitle1: "Founder",
      subtitle2: "",
      text:
        "I founded Third Nerve at UCL during a resurgence of independent games. We developed" +
        " a multiplayer platformer that we took to game festivals around the UK and successfully got greenlit on Steam.",
      title: "Third Nerve",
    },
    {
      date: "2010 - 2014",
      icon: new SchoolIcon(),
      image: imageFiles.get("ucl"),
      mainLink: "https://www.ucl.ac.uk/",
      subtitle1: "BSc Computer Science",
      subtitle2: "First-class Honours",
      text: "Rather than attend music College, I decided to get a degree in Computer Science. Graduated with 1st-class honours.",
      title: "University College London",
    },
    {
      date: "2010",
      icon: new HomeIcon(),
      image: imageFiles.get("london"),
      mainLink: "https://goo.gl/maps/QoKpM98YJtjERNmY8",
      subtitle1: "London, UK",
      subtitle2: "",
      text: "",
      title: "Moved 🇬🇧",
    },
    {
      date: "2006 - 2010",
      icon: new SchoolIcon(),
      image: imageFiles.get("wcs"),
      mainLink: "https://wells.cathedral.school/",
      subtitle1: "Specialist Musician",
      subtitle2: "3 A-Levels (A*-A), 6 GCSEs (A*-A)",
      text: "I joined as a trombonist with a full musical scholarship.",
      title: "Wells Cathedral School",
    },
    {
      date: "1992",
      icon: new BornIcon(),
      image: imageFiles.get("falmouth"),
      mainLink: "https://goo.gl/maps/w7SRynhttGuu4Nst7",
      subtitle1: "Falmouth, Cornwall",
      subtitle2: "",
      text: "",
      title: "Born 🇬🇧",
    },
  ];
}
