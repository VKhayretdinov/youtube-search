import React, { useState} from 'react'
import ReactDom from 'react-dom'
import PropTypes from 'prop-types';
import axios from 'axios';
import Input from '@material-ui/core/InputBase';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import { Link } from 'react-router-dom'

import SimpleVideoList from '../simple-video-list/SimpleVideoList';

function SearchBar({classes}) {
  const [inputText, setInputText] = useState("");
  const [titles, setTitles] = useState([]);

  // // While blocking exists LINKS!!
  const testTitles = [
    {
      key: '123',
      title: 'First title &quotthis are quots&quot',
    },
    {
      key: '124',
      title: 'Second title &quotthis are quots&quot'
    },
    {
      key: '125',
      title: 'Third title &quotthis are quots&quot'
    },
  
  ]

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
          img: item['snippet']['thumbnails']['medium']
          // url: 'https://www.youtube.com/watch?v' + item['id']['videoId']
        })
      ));
    })
    .catch(function (error) {
      console.log(error);
    });

  }

  const handleChange = (value) => {
    setInputText(value);
    setTitles(testTitles); // While blocking exists LINKS!!
    // search(value);
    console.log('change')
  }

  // const handleBlurInput = () => {
  //   const list = ReactDom.findDOMNode(SimpleVideoList);
  //   setTitles([]);
  //   console.log(list)
  // }

  return (
    <Paper>

      <Grid container className={classes.searchBar}>
        <Grid item xs={11}>
          <Input
            className={classes.searchInput}
            placeholder="Напиши мне, напиши..."
            id={'input'}
            autoFocus
            value={inputText}
            onChange={(event => handleChange(event.target.value))}
            // onBlur={handleBlurInput}
          />
        </Grid>
        <Grid item xs={1}>
          <Link to="/list">
            <IconButton className={classes.iconButton} aria-label="Search">
              <SearchIcon />
            </IconButton>
          </Link>
        </Grid>

        <Grid item xs={12}>
          <SimpleVideoList titles={titles} />
        </Grid>
      </Grid>

    </Paper>
  ) 
}

SearchBar.propTypes = {
  classes: PropTypes.objectOf(PropTypes.shape).isRequired,
};

export default withStyles(() => ({
  searchBar: {
    width: '100%',
    justifyContent: 'center',
    // paddingRight: '20px',
    // marginTop: '5%',
    // height: '50px',
  },
  searchInput: {
    width: '100%',
    height: '50px',
    padding: '10px',

  },
  iconButton: {
    marginRight: '40px'
  }
}))(SearchBar)