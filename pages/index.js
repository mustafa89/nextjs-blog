import styles from '../styles/Home.module.css'
import Navbar from '../components/navbar/navbar'
import Header from '../components/head/head'
import CardList from '../components/cardList/cardList'
import getFiles from '../Lib/posts'


export async function getStaticProps() {
  const fileData = getFiles()
  return { 
    props: {
      fileData
    }
}
}

const Home = ({ fileData }) => {
  return (
    <>
    <Header></Header>
    <Navbar></Navbar>
    <CardList articlesData={fileData}></CardList>
    </>
  )
}

export default Home