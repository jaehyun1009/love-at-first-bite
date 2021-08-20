import styles from './Landing.module.css'
import SearchForm from '../../components/SearchForm/SearchForm'
import Header from '../../components/Header/Header'


const Landing = ({userProfile, history}) => {
  return (
    <>
    <Header />
    <main className={styles.container}>
      <div>
        <SearchForm history={history} userProfile={userProfile} />
      </div>  
    </main>
    </>
  )
}

export default Landing