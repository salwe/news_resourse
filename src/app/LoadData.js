import newsArr from '../json/news.json';
import { find } from 'lodash';

class DataAPI {
  getAllNews() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(newsArr);
      }, 700)
    });
  }

  getNewsById(id) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(
          find(newsArr, (news) => {
            return news.id === parseInt(id, 10);
          })
        );
      }, 500)
    });
  }
}

const dataAPI = new DataAPI();

export default dataAPI;