import React from 'react'
import { Button } from 'antd'
import {
  FileOutlined,
  MediumCircleFilled,
  YoutubeOutlined,
  DotChartOutlined,
  MobileOutlined
} from '@ant-design/icons';

export const publicationData = [{
  date: '4-26-2020',
  title: 'Can Pair Programming and Code Reviews coexist?',
  icon: <MediumCircleFilled />,
  backgroundColor: '#000000',
  links: [
    <Button icon={<FileOutlined />} href='https://medium.com/@hany.elemary/can-pair-programming-code-reviews-coexist-58d60c28aaae'>Read article</Button>
  ],
  tags: [
    'pair programming',
    'code reviews'
  ],
  content: [
    <p>
        A common assumption with Pair Programming is that it lessens the need for Code Reviews since it serves as a review on-the-go. This assumption often conflates the goals of Pair Programming and Code Reviews. In this article, I examine the dynamics between Pairing and Code Reviews.
    </p>
  ]
},
{
  date: '03-26-2020',
  title: 'COVID-19 and Remote Work',
  icon: <MediumCircleFilled />,
  backgroundColor: '#000000',
  links: [
    <Button icon={<FileOutlined />} href='https://medium.com/@hany.elemary/covid-19-and-remote-work-436710b35e2d'>Read article</Button>
  ],
  tags: [
    'covid-19',
    'remote work'
  ],
  content: [
    <p>
        With closures and states’ “shelter-in-place” orders, working from home is the only option. This can be extremely limiting and frustrating. But there’s also some things to be gained in this unfortunate situation.
    </p>
  ]
},
{
  date: '03-29-2018',
  title: 'Using CD with machine learning models to tackle fraud',
  icon: <DotChartOutlined />,
  backgroundColor: '#87d068',
  links: [
    <Button icon={<YoutubeOutlined />} href='https://www.oreilly.com/library/view/oreilly-software-architecture/9781492025917/video323641.html'>Watch video</Button>,
    <Button icon={<FileOutlined />} href='https://www.thoughtworks.com/insights/blog/using-cd-machine-learning-models-tackle-fraud'>Read article</Button>
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
    <Button icon={<YoutubeOutlined />} href='https://www.oreilly.com/library/view/test-driven-development-for/9780134698410/'>Watch video</Button>
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
    <Button icon={<YoutubeOutlined />} href='https://youtu.be/Br7S-o3jQ_4'>Watch video</Button>
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
  icon: <MobileOutlined />,
  backgroundColor: '#975fe4',
  tags: [
    'responsive web design',
    'accessibility'
  ],
  links: [
    <Button icon={<YoutubeOutlined />} href='https://youtu.be/W_2-3BHLk7M'>Watch video</Button>,
    <Button icon={<FileOutlined />} href='http://hanyelemary.com/?p=1023'>Read article</Button>
  ],
  content: [
    <p>
        The presentation will mostly focus on implementing mission-critical Web interfaces for desktop, tablet, and mobile devices using HTML5 and CSS3 to meet the core principles of our business: performance and accessibility
    </p>
  ]
}
]
