import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { projectTileData } from '../common/context/project-list'
import { findFeaturedData } from '../common/utils/tile-data-functions'

import Socials from '../common/components/socials/Socials'
import Button from '../common/components/button/Button'

import styles from '../styles/Home.module.css'

export default function Home() {
  const featured = findFeaturedData(projectTileData);

  return (
    <div>
      <Head>
        <title>JNeff: Home</title>
        <meta name="description" content="Hello! This is James Neff's personal online portfolio website of his graphic design and front-end development projects. " />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <section id='hero' className={`${styles.heroContainer} sectionContainer`}>
        <div className={`${styles.hero} sectionContent`}>
          <div className={styles.heroText}>
            <Socials />
            <h1 className={styles.heroTitle}>
              Hello! I'm <span className='accent'>James,</span>
              <br/>
              a graphic designer 
              <br/> &#38; front-end developer
            </h1>
            <p className={styles.heroDescription}> 
              I  create and build engaging digital experiences through interactive and clean design
            </p>
            <Button destination='/#work'>See my work &rarr;</Button>
          </div>
          <div className={styles.heroPhoto}>
            <Image 
              alt="Bee Hive Phone"
              src="/assets/heroPhone.svg"
              layout="fill"
              objectFit='contain'
              objectPosition="bottom"
              quality={100}
            />
          </div>
        </div>
      </section>

      <section id='work' className={`sectionContainer ${styles.workContainer}`}>
        <div className='sectionContent'>
          <div className={styles.line} /> 
          <h2> Some of my <span className='accent'>work.</span></h2>
          <p>
            I like to stay busy, and you will regularly find me working on a new feature or experience. 
            Here are a few projects I have worked on. 
          </p>
          
          <ul className={styles.projectList}>
            {featured.map( tile => {
              return(
                <li className={styles.projectCard} tabIndex="0" key={tile.slug}>
                  <Link href={{pathname:`/projects/${tile.slug}`}}>
                    <article>
                      <header>
                        {tile.tags && 
                        (<ul className={styles.projectTags}>
                          {tile.tags.map( tag=> {
                            return (
                              <li 
                                className={styles.projectTag} 
                                key={`${tile.title}-${tag}`}
                              >
                                {tag}
                              </li>
                            )
                          })}
                        </ul>)}

                        <div className={styles.projectImage}>
                          <Image
                            src={`/assets/project/${tile.featuredImage}`} 
                            alt={tile.imgAlt} 
                            width={441} 
                            height={292} 
                          />
                        </div>

                        <h1 className={styles.projectTitle}>{tile.title}</h1>
                      </header>
                      
                      <p>{tile.description}</p>
                  
                      <footer>
                        <a className={styles.projectLink}>View {tile.customCTA || "Project"} &rarr;</a>
                      </footer>
                    </article>
                  </Link>
                </li>
              )
            })}
          </ul>
        </div>  
      </section>
      
      <section id='about' className='sectionContainer'>
        <div className='sectionContent'>
          <div className={styles.line} />
          <h2> More about <span className='accent'>me.</span></h2>
          <p className={styles.aboutMe}>
              I have spent the last 10 years working across different areas of print and digital design, 
              contributing to multiple development projects. I love blending the art of design with the skill 
              of programming in order to deliver immersive and captivating user experiences.  
          </p>

          <div className={styles.aboutSkillsContainer}>
            <div className={styles.aboutSkill}>
              <div className={styles.aboutSubtitleContainer}>
                <h3 className={styles.aboutSubtitle}>The Designer</h3>
                <div className={styles.line} />
              </div>
              <p>
                I enjoy developing visual solutions through unique branding and effective layouts in 
                order to create thoughtful interactions.
              </p>
              <div className={styles.aboutListContainer}>
                <h4 className={styles.headA}>What I enjoy designing:</h4>
                <ul className={styles.listA}>
                  <li>UI/UX</li>
                  <li>Web</li>
                  <li>Mobile</li>
                  <li>Print</li>
                </ul>
                  
                <h4 className={styles.headB}>Tools I use:</h4>
                <ul className={styles.listB}>
                  <li>Figma</li>
                  <li>Illustrator</li>
                  <li>Photoshop</li>
                  <li>Pen &#38; Paper</li>
                </ul>
              </div>  
            </div>
            
            <div className={styles.aboutSkill}>
              <div className={styles.aboutSubtitleContainer}>
                <h3 className={styles.aboutSubtitle}>The Developer</h3>
                <div className={styles.line} />
              </div>
              <p>
                Front-end development is always improving, and so am I. As a natural problem-solver, 
                I enjoy learning new ways to bring ideas to life, while maintaining accessible and clean code.              
              </p>
              <div className={styles.aboutListContainer}>
                  <h4 className={styles.headA}>Languages I know:</h4>
                  <ul className={styles.listA}>
                    <li>HTML</li>
                    <li>CSS/SCSS</li>
                    <li>JavaScript ES6</li>
                    <li>React/Redux</li>
                    <li>Git</li>
                  </ul>
                  <h4 className={styles.headB}>Tools I use:</h4>
                  <ul className={styles.listB}>
                    <li>GitHub</li>
                    <li>Bootstrap</li>
                    <li>Codepen</li>
                    <li>VS Code</li>
                  </ul>
              </div>
            </div>
          </div>

        </div>
      </section>
    </div>
  )
}
