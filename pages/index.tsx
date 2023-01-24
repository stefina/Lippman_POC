import styles from '../styles/Home.module.scss'
import CustomLink from '../components/link/Link'

function Home() {
  return (
    <div className={styles.Pagecontainer}>
      <CustomLink label="A propos" link="/a-propos" />
    </div>
  )
}

export default Home
