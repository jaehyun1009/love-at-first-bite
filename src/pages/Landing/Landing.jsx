import styles from './Landing.module.css'

const Landing = ({userProfile}) => {
  return (
    <main className={styles.container}>
      <h1>
        hello, {userProfile ? userProfile.firstName : "friend"}
      </h1>
    </main>
  )
}
 
export default Landing