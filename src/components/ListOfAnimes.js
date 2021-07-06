import React from "react";
import AnimeCard from "./AnimeCard"
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    listOfAnimeCards: {
      listStyle: 'none',
    },
    animeCard: {
        display: 'inline-block',
        marginRight: '50px',
    }
  });

export default function ListOfAnimes() {
    const classes = useStyles();

    return (
        <ul className={classes.listOfAnimeCards}>
            <li className={classes.animeCard}><AnimeCard></AnimeCard></li>
            <li className={classes.animeCard}><AnimeCard></AnimeCard></li>
        </ul>
    );
}