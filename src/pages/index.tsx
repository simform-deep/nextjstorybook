import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.scss' 
// import LayoutStatistics from '@/component/LayoutStatistics/LayoutStatistics'
// import HeaderBox from '@/component/HeaderBox/HeaderBox'


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <main className={styles.main}> 
        <h2>Home Page</h2>
      </main>
    </>
  )
}
