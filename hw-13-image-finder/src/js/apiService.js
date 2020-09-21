import refs from './refs';

const apiKey = '18194330-67860245f678ffa703ae3a938';

export default {
  page: 1,
  searchRequest: '',

  getImage(request) {
    const baseUrl = `https://pixabay.com/api/`;
    const params = `?image_type=photo&orientation=horizontal&q=${request}&page=${this.page}&per_page=12&key=${apiKey}`;
    return fetch(baseUrl + params)
      .then(responce => responce.json())
      .then(data => data.hits)
      .catch(error => error);
  },
  pageUpdate() {
    return (this.page += 1);
  },
  pageClear() {
    return (refs.gallery.innerHTML = '');
  },
  get request() {
    return this.searchRequest;
  },
  set request(value) {
    this.searchRequest = value;
  },
};
