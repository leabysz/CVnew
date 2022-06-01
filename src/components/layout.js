/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import Block from "./block"
import Job from "./job"
import References from "./references"
import Contact from "./contact"

import "./layout.css"
import { MDXRenderer } from "gatsby-plugin-mdx"
import InlineList from "./inlineList"

const referenceList = [
  {
    name: 'Ernesto Speranza',
    position: 'Blockchain Developer',
    company: 'Agrotoken',
    companyLink: 'https://agrotoken.io/',
    email: 'ernestosperanza@gmail.com',
    phone: '+59891916970'
  },
  {
    name: 'Andres Bazzurro',
    position: 'Data & Growth Lead',
    company: 'LemonChili Games',
    companyLink: 'https://www.lemonchiligames.com/',
    email: 'andresbazzurro@gmail.com ',
    phone: '+59899290664',
  },
  {
    name: 'Andres Techera',
    position: 'Staff Engineer',
    company: 'OJO Labs',
    companyLink: 'https://ojolabs.com/',
    email: 'c_atechera@ojolabs.com',
    phone: '+59898935899'
  },
];

const technologyList = [
  'HTML', 'CSS', 'JS', 'Git', 'React', 'NodeJS', 'Bash', 'JQuery',
];

const softwareList = [
  'Visual Studio Code', 'Visual Studio',
];

const methodologiesList = [

];

const contactInfo = {
  linkedin: 'https://www.linkedin.com/in/bruno-paulette/',
  phone: '+59892891613',
  email: 'brunopaulettecurbelo@gmail.com',
}

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title,
          description
        }
      }
      allMdx(sort: {order: DESC, fields: frontmatter___date}) {
        nodes {
          frontmatter {
            title
            date
          }
          id
          body
          
        }
      }
    }
  `)

  return (
    <>
      <Header siteTitle={data.site.siteMetadata?.title || `Title`} siteDescription={data.site.siteMetadata?.description} />
      <Block isNegative title="About me">
        <p>
          I'm Bruno Paulette, a 30 years old programmer.
          My personal and professional goals are aimed towards making a great impact on the people I work with. I love trying new things, learning and facing new challenges.
          I'm invested mostly in Front-End development and Analytics but I also have experience working in other areas such as Blockchain and Campaign Manager.
        </p>
      </Block>
      <Block isNegative title="Contact Information">
        <Contact contactInfo={contactInfo} />
      </Block>
      <Block title="Skills">
        <p>

          My core strengths are in the Front-End area of development, mostly in <strong>React</strong>,             <strong>JavaScript</strong>, <strong><acronym title='Hypertext Markup Language'>HTML</acronym></strong> and <strong><acronym title='Cascading Style Sheets'>CSS</acronym></strong>
        </p>
        <InlineList title="Technologies" items={technologyList} isNegative />

        <InlineList title="Software" items={softwareList} />

        {/* <InlineList title="Methodologies" items={methodologiesList} isNegative /> */}

      </Block>

      <Block title="Experience">
        {data.allMdx.nodes.map((job) => <Job title={job.frontmatter.title} key={job.id}><MDXRenderer>{job.body}</MDXRenderer></Job>)}
      </Block>
      <Block title="Education">
        <h2>Information Technology Analyst</h2>
        <p>Universidad ORT | 2021 - In course<br />

        </p>
        <h2>React Developer</h2>
        <p>CoderHouse | 2020 - 2021</p>
        <h2>Front End Developer</h2>
        <p>Hack Academy| 2020</p>
      </Block>

      <Block title="References">
        <References referenceList={referenceList}></References>
      </Block>

      <main>{children}</main>

      <footer
        style={{
          margin: `2rem auto`,
          textAlign: `center`
        }}
      >
        © {new Date().getFullYear()}, Built with Gatsby
      </footer>
    </>
  )
}

export default Layout
