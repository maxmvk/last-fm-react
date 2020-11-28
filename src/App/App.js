import { Route } from 'react-router-dom';
import { Header } from '../components';
import { ArtistContainer, MainContainer, SearchContainer } from '../pages';
import styles from './App.module.scss';

const App = (props) => {
  return (
    <div className={styles.wrapper}>
      <Header />
      <div className={styles.wrapper__content}>
        <Route exact path="/" render={() => <MainContainer />} />
        <Route path="/artist/:id?" render={ () => <ArtistContainer /> }/>
        <Route exact path="/search" render={() => <SearchContainer />} />
      </div>
    </div>
  )
}

export default App;
