import React from 'react'
import { Button } from 'antd'

export const publicationData = [{
  date: '03-29-2018',
  title: 'Using CD with machine learning models to tackle fraud',
  icon: 'dot-chart',
  backgroundColor: '#87d068',
  links: [
    <Button icon='youtube' href='https://www.oreilly.com/library/view/oreilly-software-architecture/9781492025917/video323641.html'>Watch video</Button>,
    <Button icon='file' href='https://www.thoughtworks.com/insights/blog/using-cd-machine-learning-models-tackle-fraud'>Read article</Button>
  ],
  tags: [
    'machine learning',
    'cd4ml',
    'continuous delivery'
  ],
  content: [
    <p>
        We developed a Decisioning & Analytics platform to tackle credit card fraud to improve ML models accuracy and increase production deployment frequency.
    </p>
  ]
},
{
  date: '',
  title: 'TDD for React/Redux in an Isomorphic Application',
  iconSrc: './static/images/react.png',
  links: [
    <Button icon='youtube' href='https://www.oreilly.com/library/view/test-driven-development-for/9780134698410/'>Watch video</Button>
  ],
  tags: [
    'TDD',
    'React / Redux',
    'Isomorphic Apps'
  ],
  content: [
    <p>
      The LiveLessons quickly get you up-to-speed on when to build isomorphic applications, how to effectively test your React and Redux code, and how to confidently refactor code while ensuring that business functionality is maintained.
    </p>
  ]
},
{
  date: '',
  title: 'A humbling experience through Web Content Accessibility',
  iconSrc: './static/images/accessibility.png',
  links: [
    <Button icon='youtube' href='https://youtu.be/Br7S-o3jQ_4'>Watch video</Button>
  ],
  tags: [
    'accessibility',
    'content first'
  ],
  content: [
    <p>
        As a software engineer, watching an accessibility test can humble you pretty quickly. In this session, we will discuss our humbling experience with accessibility at OCLC while working on WorldCat.org and WorldCat for local institutions.
    </p>
  ]
},
{
  date: '',
  title: 'From Content to Code, Responsive Web Design',
  icon: 'mobile',
  backgroundColor: '#975fe4',
  tags: [
    'responsive web design',
    'accessibility'
  ],
  links: [
    <Button icon='youtube' href='https://youtu.be/W_2-3BHLk7M'>Watch video</Button>,
    <Button icon='file' href='http://hanyelemary.com/?p=1023'>Read article</Button>
  ],
  content: [
    <p>
        The presentation will mostly focus on implementing mission-critical Web interfaces for desktop, tablet, and mobile devices using HTML5 and CSS3 to meet the core principles of our business: performance and accessibility
    </p>
  ]
}
]
