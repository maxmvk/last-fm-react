import { Link } from "react-router-dom";
import styles from "./Main.module.scss";

const Main = ({ tracks }) => {
  return (
    <>
      {tracks.map(tr => 
        <div key={tr.name} className={styles.track}>
          <img src={tr.image[2]["#text"]} alt="track image"/>
          <div className={styles.track__info}>
            <p className={styles.track__title}>{tr.name}</p>
            <Link to={"/artist/" + tr.artist.name} className={styles.track__artist}>{tr.artist.name}</Link>
            <a className={styles.track__link} href={tr.artist.url}>Link to artist's page on Last.fm</a>
          </div>
        </div>
      )}
    </>
  )
}

export default Main;