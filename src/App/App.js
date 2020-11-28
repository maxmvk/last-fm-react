import { Route } from 'react-router-dom';
import { Header } from '../components';
import { Artist, Main, Search } from '../pages';
import styles from './App.module.scss';

const App = () => {
  return (
    <div className={styles.wrapper}>
      <Header />
      <div className={styles.wrapper__content}>
        <Route exact path="/" render={() => <Main />} />
        <Route path="/artist/:id?" render={ () => <Artist /> }/>
        <Route exact path="/search" render={() => <Search />} />
      </div>
    </div>
  )
}

export default App;
