import Image from 'next/image'
import styles from './page.module.css'
import Nav from './component/Nav'
import Header from './component/Header'
import Profile from '@/app/component/Profile'
import Skills from './component/Skills'
import Projects from './component/Projects'
import 'bootstrap/dist/css/bootstrap.css';


//import 'bootstrap-icons/font/bootstrap-icons.css'

export default function Home() {
  return (
    <>
    <Header/>
    <Nav/>
    <Profile/>
    <Skills/>
    <Projects/>
    </>
  )
}
