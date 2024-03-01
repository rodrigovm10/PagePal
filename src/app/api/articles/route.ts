import { NextResponse } from 'next/server'
const articles = [
  {
    id: '1',
    title: 'Introduction to React',
    banner: 'react_banner.jpg',
    isPremium: 'false',
    publishDate: '2021-01-05',
    content: 'In this article, we will introduce the basics of React.',
    categories: 'react'
  },
  {
    id: '2',
    title: 'TypeScript Fundamentals',
    banner: 'ts_banner.jpg',
    isPremium: 'false',
    publishDate: '2021-01-10',
    content: 'Learn the fundamentals of TypeScript in this article.',
    categories: 'ts'
  },
  {
    id: '3',
    title: 'JavaScript Best Practices',
    banner: 'js_banner.jpg',
    isPremium: 'false',
    publishDate: '2021-01-15',
    content: 'Discover the best practices for writing JavaScript code.',
    categories: 'js'
  },
  {
    id: '4',
    title: 'Getting Started with Next.js',
    banner: 'nextjs_banner.jpg',
    isPremium: 'false',
    publishDate: '2021-01-20',
    content: 'This article will guide you through the basics of Next.js.',
    categories: 'nextjs'
  },
  {
    id: '5',
    title: 'Node.js for Beginners',
    banner: 'nodejs_banner.jpg',
    isPremium: 'false',
    publishDate: '2021-01-25',
    content: 'Learn the fundamentals of Node.js in this article.',
    categories: 'nodejs'
  },
  {
    id: '6',
    title: 'Advanced React Techniques',
    banner: 'react_banner.jpg',
    isPremium: 'true',
    publishDate: '2021-02-05',
    content: 'Explore advanced techniques for working with React.',
    categories: 'react'
  },
  {
    id: '7',
    title: 'TypeScript in React Projects',
    banner: 'ts_banner.jpg',
    isPremium: 'true',
    publishDate: '2021-02-10',
    content: 'Learn how to use TypeScript in React projects.',
    categories: 'ts,react'
  },
  {
    id: '8',
    title: 'Optimizing JavaScript Performance',
    banner: 'js_banner.jpg',
    isPremium: 'true',
    publishDate: '2021-02-15',
    content: 'Discover techniques for optimizing JavaScript performance.',
    categories: 'js'
  },
  {
    id: '9',
    title: 'Server-Side Rendering with Next.js',
    banner: 'nextjs_banner.jpg',
    isPremium: 'true',
    publishDate: '2021-02-20',
    content: 'Learn how to implement server-side rendering with Next.js.',
    categories: 'nextjs'
  },
  {
    id: '10',
    title: 'Building RESTful APIs with Node.js',
    banner: 'nodejs_banner.jpg',
    isPremium: 'true',
    publishDate: '2021-02-25',
    content: 'Learn how to build RESTful APIs using Node.js.',
    categories: 'nodejs'
  },
  {
    id: '11',
    title: 'React Hooks in Depth',
    banner: 'react_banner.jpg',
    isPremium: 'false',
    publishDate: '2021-03-05',
    content: 'Dive deep into React hooks and their usage.',
    categories: 'react'
  },
  {
    id: '12',
    title: 'TypeScript Advanced Techniques',
    banner: 'ts_banner.jpg',
    isPremium: 'false',
    publishDate: '2021-03-10',
    content: 'Explore advanced techniques for working with TypeScript.',
    categories: 'ts'
  },
  {
    id: '13',
    title: 'JavaScript Design Patterns',
    banner: 'js_banner.jpg',
    isPremium: 'false',
    publishDate: '2021-03-15',
    content: 'Learn about various design patterns in JavaScript.',
    categories: 'js'
  },
  {
    id: '14',
    title: 'Serverless Applications with Next.js',
    banner: 'nextjs_banner.jpg',
    isPremium: 'false',
    publishDate: '2021-03-20',
    content: 'Build serverless applications using Next.js.',
    categories: 'nextjs'
  },
  {
    id: '15',
    title: 'Authentication in Node.js',
    banner: 'nodejs_banner.jpg',
    isPremium: 'false',
    publishDate: '2021-03-25',
    content: 'Learn how to implement authentication in Node.js applications.',
    categories: 'nodejs'
  },
  {
    id: '16',
    title: 'Testing React Components',
    banner: 'react_banner.jpg',
    isPremium: 'true',
    publishDate: '2021-04-05',
    content: 'Discover different approaches to testing React components.',
    categories: 'react'
  },
  {
    id: '17',
    title: 'TypeScript and Express.js',
    banner: 'ts_banner.jpg',
    isPremium: 'true',
    publishDate: '2021-04-10',
    content: 'Learn how to use TypeScript with Express.js.',
    categories: 'ts,nodejs'
  },
  {
    id: '18',
    title: 'JavaScript Promises and Async/Await',
    banner: 'js_banner.jpg',
    isPremium: 'true',
    publishDate: '2021-04-15',
    content: 'Explore JavaScript promises and async/await syntax.',
    categories: 'js'
  },
  {
    id: '19',
    title: 'Deploying Next.js Applications',
    banner: 'nextjs_banner.jpg',
    isPremium: 'true',
    publishDate: '2021-04-20',
    content: 'Learn different methods for deploying Next.js applications.',
    categories: 'nextjs'
  },
  {
    id: '20',
    title: 'Real-Time Communication with Node.js',
    banner: 'nodejs_banner.jpg',
    isPremium: 'true',
    publishDate: '2021-04-25',
    content: 'Learn how to implement real-time communication using Node.js.',
    categories: 'nodejs'
  }
]

export async function GET(request: Request) {
  try {
    const { search } = new URL(request.url)
    const asa = search.split('=')[1].toLowerCase()

    if (asa === 'undefined') {
      return NextResponse.json(articles)
    }

    const newArticles = articles.filter(
      article =>
        article.categories.toLowerCase().includes(asa) ||
        article.content.toLowerCase().includes(asa) ||
        article.title.toLowerCase().includes(asa)
    )

    return NextResponse.json(newArticles)
  } catch (error) {
    return NextResponse.json({ message: '[API_ARTICLE_GET]', error })
  }
}
