// import Head from 'next/head'
// import Image from 'next/image'
// import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Profile from './components/profile'
import StuckFrom from './qcomps/stuckForm'
import Counter from './components/snapshot'
import Cart from './qcomps/shoppingCart'
import Update from './qcomps/updObjectsForm'
import Obj from './components/updObjects'
import Artists from './components/artistsArr'
import ArtistList from './qcomps/artistsRemoveArr'
import ArrObj from './qcomps/arrObj'
export default function Home() {
  return (
    <div className={styles.main}>
        {/* <Profile />  */}
        {/* <StuckFrom /> */}
        {/* <Counter /> */}
        {/* <Cart /> */}
        {/* <Update /> */}
        {/* <Obj /> */}
        {/* <Artists /> */}
        {/* <ArtistList /> */}
        <ArrObj />
    </div>
  )
}
