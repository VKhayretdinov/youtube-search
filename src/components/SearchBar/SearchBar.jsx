import React, { useState} from 'react'
import PropTypes from 'prop-types';
import axios from 'axios';
import { withStyles } from '@material-ui/core/styles';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';

import SearchInput from './SearchInput'
import SimpleVideoList from '../SimpleVideoList/SimpleVideoList';

const SearchBar = ({classes}) => {
  const [inputText, setInputText] = useState("");
  const [titles, setTitles] = useState([]);

  // // While blocking exists LINKS!!
  // const testTitles = [
  //   {
  //     key: '123',
  //     title: 'First title &quotthis are quots&quot',
  //   },
  //   {
  //     key: '124',
  //     title: 'Second title &quotthis are quots&quot'
  //   },
  //   {
  //     key: '125',
  //     title: 'Third title &quotthis are quots&quot'
  //   },
  
  // ]

  function search(value) {
    const API_KEY = 'AIzaSyDCNNGM7wMeAoVyUQJ962Q-R2fa71v4ilg';
    const URL = 'https://www.googleapis.com/youtube/v3/search';
    axios.get(URL, {
      params: {
        'maxResults': '2',
        'part': 'snippet',
        'q': value,
        'type': '',
        'key': API_KEY
      }
    })
    .then(function (response) {
      const items = response['data']['items'];
      setTitles(items.map(item => ({ 
          id: item['id']['videoId'],
          title: item['snippet']['title'],
          description: item['snippet']['description'],
          img: item['snippet']['thumbnails']['medium'],
          // url: 'https://www.youtube.com/watch?v=' + item['id']['videoId'].toString()
        })
      ));
    })
    .catch(function (error) {
      console.log(error);
    });

  }

  const handleChange = (value) => {
    setInputText(value);
    // setTitles(testTitles); // While blocking exists LINKS!!
    search(value);
  }

  const handleClickAway = () => {
    setTitles([]);
  }

  return (
    <div className={classes.searchBar}>
      
      <SearchInput
        className={classes.input}
        placeholder="Напиши мне, напиши..."
        id='input' // {}
        autoFocus
        value={inputText}
        onChange={(event => handleChange(event.target.value))}
        link='/list'
      />

      <ClickAwayListener onClickAway={handleClickAway}>
        <SimpleVideoList titles={titles} />
      </ClickAwayListener>

    </div>
  ) 
}

SearchBar.propTypes = {
  classes: PropTypes.objectOf(PropTypes.shape).isRequired,
};

export default withStyles(() => ({
  searchBar: {
    padding: '10px',
  },
  input: {
    display: 'flex',
    height: '50px',
  },
}))(SearchBar)