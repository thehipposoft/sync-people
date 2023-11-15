import Link from 'next/link'
import Header from '../../components/Header'
import Banner from '../../components/Banner'
import How from '../../components/How'
import WhyUs from '../../components/WhyUs'
import Categories from '../../components/Categories'
import Companies from '../../components/Companies'
import RegisterMenu from '../../components/RegisterMenu'
import Discover from '../../components/Discover'
import Contact from '../../components/Contact'
import LoginMenu from '../../components/LoginMenu'


export default function Home() {
  return (
    <main className="">
      <Header />
      <Banner />
      <How />
      <WhyUs />
      <Categories />
      <Companies />
      <Discover />
      <Contact />
      <LoginMenu /> 
    </main>
  )
}
