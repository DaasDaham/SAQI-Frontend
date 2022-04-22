import HomePageQuestionCard from "../components/HomePageQuestionCard";
import HomePageCTACard from "../components/HomePageCTACard";
import styles from "../styles/home.module.css"

export default function Home() {
  return (
    <div className={styles.mainContainer}>
   <div className={styles.homeContainer}>
    {
      [1,2,3].map(val => {
        return <HomePageQuestionCard key="val" />
      })
    }
    </div>
    <HomePageCTACard />
    </div>

  )
}
