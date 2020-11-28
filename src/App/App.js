import { Route } from 'react-router-dom';
import { Header } from '../components';
import { Artist, MainContainer, Search } from '../pages';
import styles from './App.module.scss';

const App = (props) => {
  return (
    <div className={styles.wrapper}>
      <Header />
      <div className={styles.wrapper__content}>
        <Route exact path="/" render={() => <MainContainer />} />
        <Route path="/artist/:id?" render={ () => <Artist /> }/>
        <Route exact path="/search" render={() => <Search />} />
      </div>
    </div>
  )
}

export default App;
