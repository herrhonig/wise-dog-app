import axios from 'axios';

// returns 9 dog objects:
export default axios.create({
  baseURL:'https://api.thedogapi.com/v1/images/search?limit=9&page=10&order=Desc',
});

