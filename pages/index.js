import Head from 'next/head'
import FilterBox from '../components/filter-box'
import GreetingBlock from '../components/greeting-block'
import Layout, { siteTitle } from '../components/layout'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <GreetingBlock></GreetingBlock>
      <FilterBox></FilterBox>
    </Layout>
  )
}
