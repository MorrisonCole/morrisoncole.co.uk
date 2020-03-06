import {
  ChildFriendly, Home, School, Work
} from '@material-ui/icons/'
import React from 'react'
import FalmouthImage from './images/timeline/falmouth.jpg'
import ImprobableImage from './images/timeline/improbable.png'
import KobeImage from './images/timeline/kobe.jpg'
import LondonImage from './images/timeline/london.jpg'
import MedmainImage from './images/timeline/medmain.png'
import ShazamImage from './images/timeline/shazam.png'
import ThirdNerveImage from './images/timeline/thirdnerve.png'
import TokyoImage from './images/timeline/tokyo.jpg'
import UclImage from './images/timeline/ucl.jpg'
import WcsImage from './images/timeline/wcs.jpg'

const icons = {
  born: {
    background: { background: 'rgb(33, 150, 243)', color: '#fff' },
    icon: <ChildFriendly />
  },
  home: {
    background: { background: 'rgb(233, 30, 99)', color: '#fff' },
    icon: <Home />
  },
  school: {
    background: { background: 'rgb(233, 30, 99)', color: '#fff' },
    icon: <School />
  },
  work: {
    background: { background: 'rgb(233, 30, 99)', color: '#fff' },
    icon: <Work />
  }
}

export const life = [
  {
    date: '2019',
    icon: icons.home,
    image: TokyoImage,
    mainLink: 'https://goo.gl/maps/7FFdpXCeUU3koAAv9',
    subtitle1: 'Tokyo',
    subtitle2: '',
    text:
      "From Kobe to Tokyo, where I'm now working and teaching in the software industry 🙌",
    title: 'Moved 🇯🇵'
  },
  {
    date: '2019 - Now',
    icon: icons.work,
    image: MedmainImage,
    mainLink: 'https://medmain.com/',
    subtitle1: 'Software Engineer, Server',
    subtitle2: '',
    text: 'Developing products at the forefront of AI-assisted medicine.',
    title: 'Medmain Inc.'
  },
  {
    date: '2019',
    icon: icons.home,
    image: KobeImage,
    mainLink: 'https://goo.gl/maps/hURywEujBbYCqqbA6',
    subtitle1: 'Kobe, Hyogo',
    subtitle2: '',
    text: 'Studying Japanese and brushing up on new technologies.',
    title: 'Moved 🇯🇵'
  },
  {
    date: '2015 - 2019',
    icon: icons.work,
    image: ImprobableImage,
    mainLink: 'https://www.crunchbase.com/organization/improbable',
    subtitle1: 'Software Engineer & Product Manager',
    subtitle2: '',
    text:
      'Improbable contacted me when they were an early-stage startup of around 40 people. The mission ' +
      'merged the gaming industry with challenging software and product problems, so I immediately interviewed and ' +
      'the rest, as they say, is history. Improbable now stands at around 400 people. I was sad to leave after I ' +
      'had experienced so much there, but new horizons beckoned!',
    title: 'Improbable'
  },
  {
    date: '2013 - 2015',
    icon: icons.work,
    image: ShazamImage,
    mainLink: 'https://www.crunchbase.com/organization/shazam',
    subtitle1: 'Junior Software Engineer',
    subtitle2: '(Aqc. by Apple, 2018)',
    text:
      'After interning here during the final year of my degree, I joined the Android team full-time.',
    title: 'Shazam'
  },
  {
    date: '2013',
    icon: icons.work,
    image: ThirdNerveImage,
    mainLink: 'https://steamcommunity.com/sharedfiles/filedetails/?id=92967778',
    subtitle1: 'Founder',
    subtitle2: '',
    text:
      'I founded Third Nerve at UCL during a resurgence of independent games. We developed' +
      ' a multiplayer platformer that we took to game festivals around the UK and successfully got greenlit on Steam.',
    title: 'Third Nerve'
  },
  {
    date: '2010 - 2014',
    icon: icons.school,
    image: UclImage,
    mainLink: 'https://www.ucl.ac.uk/',
    subtitle1: 'BSc Computer Science',
    subtitle2: 'First-class Honours',
    text:
      'Rather than attend music College, I decided to get a degree in Computer Science. Graduated with 1st-class honours.',
    title: 'University College London'
  },
  {
    date: '2010',
    icon: icons.home,
    image: LondonImage,
    mainLink: 'https://goo.gl/maps/QoKpM98YJtjERNmY8',
    subtitle1: 'London, UK',
    subtitle2: '',
    text: '',
    title: 'Moved 🇬🇧'
  },
  {
    date: '2006 - 2010',
    icon: icons.school,
    image: WcsImage,
    mainLink: 'https://wells.cathedral.school/',
    subtitle1: 'Specialist Musician',
    subtitle2: '3 A-Levels (A*-A), 6 GCSEs (A*-A)',
    text: 'I joined as a trombonist with a full musical scholarship.',
    title: 'Wells Cathedral School'
  },
  {
    date: '1992',
    icon: icons.born,
    image: FalmouthImage,
    mainLink: 'https://goo.gl/maps/w7SRynhttGuu4Nst7',
    subtitle1: 'Falmouth, Cornwall',
    subtitle2: '',
    text: '',
    title: 'Born 🇬🇧'
  }
]
