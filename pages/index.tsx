import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

function Home({ data }) {
  console.log(data)

  return <div className={styles.container}>HELLO</div>
}

// This gets called on every request
export async function getServerSideProps() {
  // Fetch data from external API
  const res = await fetch(`https://opendata.swiss/api/3/action/package_list`)
  const data = await res.json()

  // Pass data to the page via props
  return { props: { data } }
}

export default Home
