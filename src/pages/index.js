// import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Profile from './components/profile'
// import List from './components/list_keys'
import List from './qcomps/list_keys_id'
import RecipeList from './qcomps/recipes'
import Button from './components/button'
import AButton from './qcomps/menuBar'
import Gallery from './qcomps/state'
import PersonData from './components/stateObj'

export default function Home() {
  return (
    <div className={styles.main}>
      <PersonData/>
    </div>
  )
}