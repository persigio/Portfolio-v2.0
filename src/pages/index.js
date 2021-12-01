import Head from 'next/head'
import Image from 'next/image'
import Layout from '../common/components/layout/Layout'
import Socials from '../common/components/socials/Socials'
import Button from '../common/components/button/Button'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <section id='hero' className={`${styles.heroContainer} sectionContainer`}>
        <div className={`${styles.hero} sectionContent`}>
          <div className={styles.heroText}>
            <Socials />
            <h1>
              Hello! I'm <span className='accent'>James,</span>
              <br/>
              a graphic designer 
              <br/> &#38; front-end developer
            </h1>
            <p className={styles.heroDescription}> 
              I design and code delightfully simple things, and 
              I love bringing products to life.
            </p>
            <Button destination='/#work'>See my work &rarr;</Button>
          </div>
          {}
        </div>
      </section>

      <section id='work' className={`sectionContainer ${styles.workContainer}`}>
        <div className='sectionContent'>
          <div className={styles.line} /> 
          <h2> Some of my <span className='accent'>work.</span></h2>
          <p>
            I like to stay busy and always have a project in the works. 
            Here are a few projects I have worked on. 
          </p>
          
          <div className={styles.projectList}>
            <a className={styles.projectCard}>
              <article>
                <ul className={styles.projectTags}>
                  <li className={styles.projectTag}>React</li>
                  <li className={styles.projectTag}>Reddit API</li>
                </ul>
                <div className={styles.projectImage}></div>
                <header>
                  <h1 className={styles.projectTitle}>Mini Reddit</h1>
                </header>         
                <p>A web application that pulls simplified content from reddit's api</p>
                <footer>
                  <a className={styles.projectLink}>View Project &rarr;</a>
                </footer>
              </article>
            </a>

            <a className={styles.projectCard}>
              <article>
                <ul className={styles.projectTags}>
                  <li className={styles.projectTag}>UI/UX</li>
                </ul>
                <div className={styles.projectImage}></div>
                <header>
                  <h1 className={styles.projectTitle}>Vision Property Management</h1>
                </header>         
                <p>A complete design overhaul of real estate website and customer portal</p>
                <footer>
                  <a className={styles.projectLink}>View Process &rarr;</a>
                </footer>
              </article>
            </a>

            <a className={styles.projectCard}>
              <article>
                <ul className={styles.projectTags}>
                  <li className={styles.projectTag}>UI/UX</li>
                </ul>
                <div className={styles.projectImage}></div>
                <header>
                  <h1 className={styles.projectTitle}>Index-Journal</h1>
                </header>         
                <p>Award-winning web redesign for a newspaper company</p>
                <footer>
                  <a className={styles.projectLink}>View Process &rarr;</a>                                               
                </footer>
              </article>
            </a>

            <a className={styles.projectCard}>
              <article>
                <ul className={styles.projectTags}>
                  <li className={styles.projectTag}>Environmental Design</li>
                </ul>
                <div className={styles.projectImage}></div>
                <header>
                  <h1 className={styles.projectTitle}>Lander University</h1>
                </header>         
                <p>Collaborative three color vinyl wall design and installation</p>
                <footer>
                  <a className={styles.projectLink}>View Installation &rarr;</a>                            
                </footer>
              </article>
            </a>
            
            <a className={styles.projectCard}>
              <article>
                <ul className={styles.projectTags}>
                  <li className={styles.projectTag}>Environmental Design</li>
                </ul>
                <div className={styles.projectImage}></div>
                <header>
                  <h1 className={styles.projectTitle}>Duke Energy</h1>
                </header>         
                <p>Bannerstand design for client's expo</p>
                <footer>
                  <a className={styles.projectLink}>View Design &rarr;</a>                             
                </footer>
              </article>
            </a>
          </div>
        </div>  
      </section>
      
      <section id='about' className='sectionContainer'>
        <div className='sectionContent'>
          <div className={styles.line} />
          <h2> More about <span className='accent'>me.</span></h2>
          <p className={styles.aboutMe}>
            Pika-pi Relicanth we're blasting off again Golbat Pidgeot Mightyena 
            Linoone. Ash Fighting Vanilluxe Yanma Volcarona Groudon Articuno. Hive 
            Badge Gallade Wobbuffet Treecko Jynx Rotom Jesse. Gotta catch 'em all 
            Stunky Flygon Latias Slowking Roggenrola Earthquake. Pallet Town Croagunk 
            Minun Numel Glalie Bastiodon Venomoth.  
          </p>

          <div className={styles.aboutSkillsContainer}>
            <div className={styles.aboutSkill}>
              <div className={styles.aboutSubtitleContainer}>
                <h3 className={styles.aboutSubtitle}>the designer</h3>
                <div className={styles.line} />
              </div>
              <p>
                Pokem ipsum dolor sit amet Carvanha Gigalith Crawdaunt Blitzle Mint 
                Berry Ivysaur. Fighting make it double Slugma Slowking Grimer Swampert 
                Flying.
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
                <h3 className={styles.aboutSubtitle}>the developer</h3>
                <div className={styles.line} />
              </div>
              <p>
                Earth Badge Shaymin Ferrothorn Porygon2 Bubble Manaphy Weepinbell. 
                Electric Staraptor Poochyena Umbreon a wild Pokemon appeared Misdreavus 
                Hippowdon. 
              </p>
              <div className={styles.aboutListContainer}>
                  <h4 className={styles.headA}>What languages I know:</h4>
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
    </Layout>
  )
}
