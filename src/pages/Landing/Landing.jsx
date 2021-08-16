import styles from './Landing.module.css'
import SearchForm from '../../components/SearchForm/SearchForm'


const Landing = ({userProfile, history}) => {
  return (
    <main className={styles.container}>
      {/* <h1>
        hello, {userProfile ? userProfile.firstName : "friend"}
      </h1>    */}
      <div>
        <SearchForm history={history} />
      </div>  
    </main>
  )
}

export default Landing