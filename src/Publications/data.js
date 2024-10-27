import React from 'react'
import { Button } from 'antd'
import {
  FileOutlined,
  MediumCircleFilled,
  YoutubeOutlined,
  DotChartOutlined,
  MobileOutlined
} from '@ant-design/icons'

export const publicationData = [{
  date: '8-20-2024',
  title: 'From Layered Teams to Domain-Aligned: A Journey to Predictable Success',
  iconSrc: './static/images/it-rev-logo.jpeg',
  backgroundColor: '#000000',
  links: [
    <Button icon={<YoutubeOutlined />} href='https://www.youtube.com/watch?v=9ns_FdPhurg'>Watch video</Button>
  ],
  tags: [
    'team topologies',
    'software delivery performance',
    'devops'
  ],
  content: [
    <p>
          Traditional layered teams often struggle with high coordination, low autonomy, “design by committee" and a lack of predictability in outcomes, leading to inefficiencies and challenges in meeting project timelines. This talk highlights the transformative journey at Wendy’s in going from layered to domain-aligned teams...
    </p>
  ]
},
{
  date: '3-15-2024',
  title: 'The Most Common Domain-Driven Design Mistake',
  icon: <MediumCircleFilled />,
  backgroundColor: '#000000',
  links: [
    <Button icon={<FileOutlined />} href='https://medium.com/navalia/the-most-common-domain-driven-design-mistake-6c3f90e0ec2b'>Read article</Button>
  ],
  tags: [
    'domain driven design',
    'api architecture',
    'common mistakes'
  ],
  content: [
    <p>
          I have made countless architectural mistakes while working in technology. But I’ve found that mistakes made with Domain-Driven Design (DDD) are specially unforgiving. Wrong abstractions in DDD have more disruptive implications than in other design approaches...
    </p>
  ]
},
{
  date: '10-5-2023',
  title: 'DevOps and CAB: Mortal Frenemies',
  iconSrc: './static/images/it-rev-logo.jpeg',
  backgroundColor: '#000000',
  links: [
    <Button icon={<YoutubeOutlined />} href='https://videos.itrevolution.com/watch/873159839/'>Watch video</Button>
  ],
  tags: [
    'dora metrics',
    'software delivery performance'
  ],
  content: [
    <p>
          Often dubbed as "eternal enemies", DevOps and the Change Advisory Board (CAB) pull organizations in different directions: rapid delivery vs strict governance. This presentation delves into the intrinsic differences between these approaches, exploring their origins, objectives, and cultural implications...
    </p>
  ]
}, {
  date: '10-5-2023',
  title: 'Wright State alumnus, entrepreneur makes strides in AI technology',
  iconSrc: './static/images/wsu-icon.png',
  backgroundColor: '#000000',
  links: [
    <Button icon={<FileOutlined />} href='https://webapp2.wright.edu/web1/newsroom/2023/09/14/alumnus-entrepreneur-makes-strides-in-ai-technology/'>Read article</Button>
  ],
  tags: [
    'ai',
    'conversational ai',
    'platforms'
  ],
  content: [
    <p>
          Elemary’s company, Navalia, is collaborating with Google to develop and implement a conversational AI initiative for the drive-through ordering system at Wendy’s restaurants. “The goal is to have an AI that will sound incredibly natural and be able to very accurately take your order,” said Elemary...
    </p>
  ]
},
{
  date: '3-9-2022',
  title: 'Effective Experience APIs: Principles, Patterns, Anti-patterns',
  icon: <MediumCircleFilled />,
  backgroundColor: '#000000',
  links: [
    <Button icon={<FileOutlined />} href='https://medium.com/navalia/designing-effective-experience-apis-patterns-anti-patterns-and-guidelines-96cc0b26aced'>Read article</Button>
  ],
  tags: [
    'domain driven design',
    'api architecture',
    'experience apis'
  ],
  content: [
    <p>
          To create delightful experiences for customers, there are best practices that we need to take into account. In this article, we cover Experience APIs’ principles, patterns, anti-patterns and design considerations....
    </p>
  ]
}, {
  date: '3-9-2022',
  title: 'Customer Experience APIs: The missing layer',
  icon: <MediumCircleFilled />,
  backgroundColor: '#000000',
  links: [
    <Button icon={<FileOutlined />} href='https://medium.com/navalia/customer-experience-apis-the-missing-layer-58ecb93faa4b'>Read article</Button>
  ],
  tags: [
    'domain driven design',
    'architecture',
    'customer experience'
  ],
  content: [
    <p>
          APIs are becoming more ubiquitous as time goes on. BFFs (Backend For Frontend) are common language, DDD is gaining more traction and API design principles are everywhere. Despite all this, we continue to see organizations following all of these practices struggle to adopt new channels....
    </p>
  ]
},
{
  date: '6-15-2021',
  title: 'Why you shouldn’t use booleans in REST APIs',
  icon: <MediumCircleFilled />,
  backgroundColor: '#000000',
  links: [
    <Button icon={<FileOutlined />} href='https://medium.com/geekculture/why-you-shouldnt-use-booleans-in-rest-apis-2747b187876c'>Read article</Button>
  ],
  tags: [
    'rest api design',
    'domain driven design',
    'api development'
  ],
  content: [
    <p>
          Using booleans in API contracts. If not carefully considered, booleans can 1) Obstruct API Extensibility, 2) Mask and obfuscate Domain Clarity and 3) Hamper Code Readability and Maintainability...
    </p>
  ]
},
{
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
        A common assumption with Pair Programming is that it lessens the need for Code Reviews since it serves as a review on-the-go. This assumption often conflates the goals of Pair Programming and Code Reviews. In this article, I examine the dynamics between Pairing and Code Reviews...
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
        With closures and states’ “shelter-in-place” orders, working from home is the only option. This can be extremely limiting and frustrating. But there’s also some things to be gained in this unfortunate situation...
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
        We developed a Decisioning & Analytics platform to tackle credit card fraud to improve ML models accuracy and increase production deployment frequency...
    </p>
  ]
},
{
  date: '',
  title: 'TDD for React/Redux in an Isomorphic Application',
  iconSrc: './static/images/react.webp',
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
      The LiveLessons quickly get you up-to-speed on when to build isomorphic applications, how to effectively test your React and Redux code, and how to confidently refactor code while ensuring that business functionality is maintained...
    </p>
  ]
},
{
  date: '',
  title: 'A humbling experience through Web Content Accessibility',
  iconSrc: './static/images/accessibility.webp',
  links: [
    <Button icon={<YoutubeOutlined />} href='https://youtu.be/Br7S-o3jQ_4'>Watch video</Button>
  ],
  tags: [
    'accessibility',
    'content first'
  ],
  content: [
    <p>
        As a software engineer, watching an accessibility test can humble you pretty quickly. In this session, we will discuss our humbling experience with accessibility at OCLC while working on WorldCat.org and WorldCat for local institutions...
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
        The presentation will mostly focus on implementing mission-critical Web interfaces for desktop, tablet, and mobile devices using HTML5 and CSS3 to meet the core principles of our business: performance and accessibility...
    </p>
  ]
}
]
