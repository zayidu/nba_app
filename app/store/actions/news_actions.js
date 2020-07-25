import {GET_NEWS} from '../types';

import axios from 'axios';
import {FIREBASE_URL} from '../../utils/misc';

export function getNews() {
  const request = axios({
    method: 'GET',
    url: `${FIREBASE_URL}/news.json`,
  })
    .then(response => {
      // console.log(response);
      const articles = [];

      for (let key in response.data) {
        articles.push({
          ...response.data[key],
          id: key,
        });
      }
      return articles;
    })
    .catch(e => {
      return false;
    });

  return {
    type: GET_NEWS,
    payload: request,
  };
}
