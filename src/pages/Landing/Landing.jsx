import styles from './Landing.module.css'
import SearchForm from '../../components/SearchForm/SearchForm'

const Landing = ({userProfile, history}) => {
  return (
    <main className={styles.container}>
      <div>
        <SearchForm history={history} userProfile={userProfile} />
      </div>  
    </main>
  )
}

export default Landing