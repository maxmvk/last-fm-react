import { Button, TextField } from "@material-ui/core";
import { useState } from "react";
import styles from "./Search.module.scss";

const Search = (props) => {
  const [search, setSearch] = useState("");
  console.log(props)

  const handleInputChange = event => {
    setSearch(event.target.value)
  }

  return (
    <div className={styles.search}>
      <form onSubmit={(e) => props.handleSubmit(e, search)} className={styles.search__form} noValidate autoComplete="off">
        <TextField id="filled-basic" variant="filled" name="search" value={search} onChange={handleInputChange}/>
        <Button variant="contained" color="secondary" type="submit">Search</Button>
      </form>
      {props.result.map(tr => 
        <div key={tr.name} className={styles.search__track}>
          <p className={styles.search__title}>{tr.name}</p>
          <p className={styles.search__artist}>{tr.artist}</p>
        </div>
      )}
    </div>
  )
}

export default Search;