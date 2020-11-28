import styles from "./Artist.module.scss";

const Artist = ({ info }) => {
  console.log(info);

  const createMarkup = () => {
    return {__html: info.bio.content};
  }

  return (
    <div className={styles.artist}>
      <div className={styles.artist__container}>
        <img src={info.image? info.image[3]["#text"] : null} alt="artist"/>
        <div className={styles.artist__info}>
          <p className={styles.artist__title}>{info.name}</p>
          {info.tags.tag.map(tag => 
            <a key={tag.name} className={styles.artist__link} href={tag.url}>{tag.name}</a>
          )}
        </div>
      </div>
      <h1>About</h1>
      <div className={styles.artist__description} dangerouslySetInnerHTML={createMarkup()}></div>
    </div>
  )
}

export default Artist;