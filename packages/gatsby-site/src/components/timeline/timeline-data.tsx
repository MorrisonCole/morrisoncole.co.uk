import { ChildFriendly, Home, School, Work } from "@mui/icons-material/";
import React from "react";
import { CSSObject, useTheme } from "@mui/material/styles";
import { StaticImage } from "gatsby-plugin-image";

interface TimelineIcon {
  background: CSSObject;
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

export interface TimelineEntry {
  date: string;
  icon: TimelineIcon;
  image: JSX.Element;
  mainLink: string;
  subtitle1: string;
  subtitle2: string;
  text: string;
  title: string;
}

export function getTimelineEntries(): TimelineEntry[] {
  const theme = useTheme();

  const unityLight = (
    <StaticImage src="./images/unity-white.png" alt="Unity Logo" />
  );

  const unityDark = (
    <StaticImage src="./images/unity-black.png" alt="Unity Logo" />
  );

  return [
    {
      date: "2020 - Now",
      icon: new WorkIcon(),
      image: theme.palette.mode === "dark" ? unityLight : unityDark,
      mainLink: "https://unity.com/",
      subtitle1: "Senior Software Engineer",
      subtitle2: "",
      text: "Building new tools to democratize game development 🛠",
      title: "Unity",
    },
    {
      date: "2019",
      icon: new HomeIcon(),
      image: <StaticImage src="./images/tokyo.jpg" alt="Tokyo at night" />,
      mainLink: "https://goo.gl/maps/7FFdpXCeUU3koAAv9",
      subtitle1: "Tokyo",
      subtitle2: "",
      text: "From Kobe to Tokyo, where I'm now working and teaching in the software industry 🙌",
      title: "Moved 🇯🇵",
    },
    {
      date: "2019 - 2020",
      icon: new WorkIcon(),
      image: <StaticImage src="./images/medmain.png" alt="Medmain logo" />,
      mainLink: "https://medmain.com/",
      subtitle1: "Software Engineer, Server",
      subtitle2: "",
      text: "Developing products at the forefront of AI-assisted medicine.",
      title: "Medmain Inc.",
    },
    {
      date: "2019",
      icon: new HomeIcon(),
      image: <StaticImage src="./images/kobe.jpg" alt="Kobe cityscape" />,
      mainLink: "https://goo.gl/maps/hURywEujBbYCqqbA6",
      subtitle1: "Kobe, Hyogo",
      subtitle2: "",
      text: "Studied Japanese, hiked (a lot), and begun exploring Japan!",
      title: "Moved 🇯🇵",
    },
    {
      date: "2015 - 2019",
      icon: new WorkIcon(),
      image: (
        <StaticImage src="./images/improbable.png" alt="Improbable logo" />
      ),
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
      image: <StaticImage src="./images/shazam.png" alt="Shazam logo" />,
      mainLink: "https://www.crunchbase.com/organization/shazam",
      subtitle1: "Junior Software Engineer",
      subtitle2: "(Aqc. by Apple, 2018)",
      text: "After interning here during the final year of my degree, I joined the Android team full-time.",
      title: "Shazam",
    },
    {
      date: "2013",
      icon: new WorkIcon(),
      image: (
        <StaticImage src="./images/thirdnerve.png" alt="Third Nerve logo" />
      ),
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
      image: <StaticImage src="./images/ucl.jpg" alt="UCL quad" />,
      mainLink: "https://www.ucl.ac.uk/",
      subtitle1: "BSc Computer Science",
      subtitle2: "First-class Honours",
      text: "Rather than attend music College, I decided to get a degree in Computer Science. Graduated with 1st-class honours.",
      title: "University College London",
    },
    {
      date: "2010",
      icon: new HomeIcon(),
      image: <StaticImage src="./images/london.jpg" alt="London cityscape" />,
      mainLink: "https://goo.gl/maps/QoKpM98YJtjERNmY8",
      subtitle1: "London, UK",
      subtitle2: "",
      text: "",
      title: "Moved 🇬🇧",
    },
    {
      date: "2006 - 2010",
      icon: new SchoolIcon(),
      image: (
        <StaticImage
          src="./images/wcs.jpg"
          alt="Wells Cathedral School alleyway"
        />
      ),
      mainLink: "https://wells.cathedral.school/",
      subtitle1: "Specialist Musician",
      subtitle2: "3 A-Levels (A*-A), 6 GCSEs (A*-A)",
      text: "I joined as a trombonist with a full musical scholarship.",
      title: "Wells Cathedral School",
    },
    {
      date: "1992",
      icon: new BornIcon(),
      image: (
        <StaticImage src="./images/falmouth.jpg" alt="Falmouth townscape" />
      ),
      mainLink: "https://goo.gl/maps/w7SRynhttGuu4Nst7",
      subtitle1: "Falmouth, Cornwall",
      subtitle2: "",
      text: "",
      title: "Born 🇬🇧",
    },
  ];
}
