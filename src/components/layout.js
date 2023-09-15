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
    position: 'Core Developer',
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
    name: 'Mauricio Acha',
    position: 'Project Manager',
    company: 'TakeOff Media',
    companyLink: 'https://takeoffmedia.com/',
    email: 'mauricioa@takeoffmedia.com',
    phone: '+59891241102'
  },
  {
    name: 'Ignacio Bazzano',
    position: 'CEO',
    company: 'TakeOff Media',
    companyLink: 'https://takeoffmedia.com/',
    email: 'ignaciob@takeoffmedia.com',
    phone: ''
  },
  {
    name: 'Andres Techera',
    position: 'Staff Engineer',
    company: 'OJO',
    companyLink: 'https://ojo.com/',
    email: 'c_atechera@ojolabs.com',
    phone: '+59898935899'
  },
];

const technologyList = [
  'HTML', 'CSS', 'JS', 'Git', 'React', 'NodeJS', 'C#', 'SQL', 'Bash', 'JQuery',
];

const softwareList = [
  'Visual Studio Code', 'Visual Studio', 'SQL Server Management Studio'
];

/* const methodologiesList = [

]; */

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
          I am Bruno Paulette, a 32-year-old software developer specializing in Front-End Development and Analytics. With a steadfast commitment to both my personal and professional growth, I aim to make a significant impact on the teams and projects I contribute to. Passionate about innovation and learning, I relish the opportunity to tackle new challenges. While my expertise primarily lies in Front-End development and Analytics, I also bring experience in diverse fields such as Blockchain technology and Campaign Management.
        </p>
      </Block>
      <Block isNegative title="Contact Information">
        <Contact contactInfo={contactInfo} />
      </Block>
      <Block title="Skills">
        <p>

          My core strengths are in the Front-End area of development, mostly in <strong>React</strong>,             <strong>JavaScript</strong>, <strong><acronym title='Hypertext Markup Language'>HTML</acronym></strong> and <strong><acronym title='Cascading Style Sheets'>CSS</acronym></strong>. In the realm of Analytics, my strengths extend to Data Expertise, Strategic Planning, Leadership Skills, Quality Assurance, Team Development, and Analytical Thinking. These skills collectively position me as a versatile asset capable of delivering both technical excellence and strategic insights.
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
