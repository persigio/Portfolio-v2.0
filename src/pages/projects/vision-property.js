import Image from 'next/image'
import ArticleHeader from "../../common/components/articleHeader/ArticleHeader"
import ArticleBody from '../../common/components/articleBody/ArticleBody'

import styles from '../../styles/ArticlePage.module.css'

import trihex from '/public/assets/trihex.svg'


const position  = ["Lead Designer"]; 
const organization = ["Vision Property Management"]; 
const work = ["Web Design"]; 
const stack = ["Photoshop", "Illustrator","Pen & Paper"]; 
const source = null;
const site = {text:"View Archive", link: "https://web.archive.org/web/20151207061939/http://vpm3.com/"}; 

const ArticlePage = () => {
  return(
    <div className={styles.container}> 
      <article>
        <h1 className={styles.title}>Vision's Website and Portal Redesign</h1>
        <div className={styles.article_container}>
          <ArticleHeader 
            position={position}
            organization={organization}
            work={work}
            stack={stack}
            source={source}
            site={site}
          />

          <ArticleBody>
            <section className={styles.row_full}>
              <div className="line" />
              <h2>The <span className='accent'>Challenge.</span></h2>
              <p>
                While as marketing director, my team was tasked with providing 
                a new website design. The new site needed to allow users to filter 
                and search through the database of properties available, assist the 
                users through the stages of leasing a property, and provide a portal 
                for making payments.
              </p>
            </section>

            <section className={styles.row_full}>
              <div className="line" />
              <h2>My <span className='accent'>Approach.</span></h2>
              <p>
                For the first stage of the design process, my team and I sat with a couple of the 
                sales teams to get a feel for what they would like and needed from the 
                site. Once we got that data, we worked on laying out the content and general 
                flow for the site.
              </p>
              <p>
                This included creating some media content to be included in the 
                site. Throughout the process, we gave presentations to the owners 
                and department heads, and also conferred with members from the development 
                team to make sure we stayed within their scope.
              </p>
            </section>

            <section className={styles.row_twothirds}>
              <div className="line" />
              <h2>What Happened <span className='accent'>Next.</span></h2>
              <p>
                Once the design was finalized, we provided the design 
                specs to the IT department who handled the task of developing 
                and maintaining the site.
              </p>
            </section>
            <div className={styles.row_third}>
              <Image src={trihex} layout="intrinsic" />
            </div>
            
          </ArticleBody>
        </div>
      </article>

      <div>
        <h2>Other Projects.</h2>
        <div>
          Project 1
        </div>
        <div>
          Project 2
        </div>
      </div>
    </div>
  )
}

export default ArticlePage;