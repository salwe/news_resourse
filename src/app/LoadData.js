import newsArr from '../json/news.json';
import _ from 'lodash';

// export const dataAPI = () => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve(newsArr);
//     }, 1000)
//   });
// }

export const dataAPI = {
  getAllNews: () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(newsArr);
      }, 700)
    });
  },
  
  getNewsById: (id) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(
          _.find(newsArr, (el) => {
            return el.id === parseInt(id, 10);
          })
        );
      }, 500)
    });
  }
}