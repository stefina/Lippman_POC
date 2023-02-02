import styles from '../styles/Home.module.scss'
import { CustomLink } from '../components/link/Link'

function Home() {
  return (
    <div className={styles.Pagecontainer}>
      <div>
        <CustomLink href="/a-propos">A propos</CustomLink>
      </div>
      <div>
        <CustomLink href="/gabriel-lippmann">Gabriel Lippmann</CustomLink>
      </div>
    </div>
  )
}

export default Home
