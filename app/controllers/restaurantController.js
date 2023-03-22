import yelp from 'yelp-fusion';
import { YELP_API_KEY } from '../config/env';
import Logger from '../config/winston';

const Restaurants = {
  getRestaurants: (req, res) => {
    const { location, term } = req.query;

    let searchRequest = {};
    if (!location && !term) {
      searchRequest = {
        location: 'london',
        term: 'restaurant',
      };
    }
    if (location && term) {
      searchRequest = {
        term,
        location,
      };
    }

    const client = yelp.client(YELP_API_KEY);

    client
      .search(searchRequest)
      .then((response) => res.send(JSON.stringify(response.jsonBody.businesses)))
      .catch((e) => {
        if (e.statusCode === 400) {
          res.status(400).send('Failure retrieving information due to bad request');
        }
        if (e.statusCode === 500) {
          res.status(500).send('Internal Server error please try again');
        }

        Logger.error(e.message);
      });
  },
  getSingleRestaurant: (req, res) => {
    const client = yelp.client(YELP_API_KEY);
    client
      .business(req.params)
      .then((response) => res.send(JSON.stringify(response.jsonBody)))
      .catch((e) => {
        if (e.statusCode === 400) {
          res.status(400).send('Failure retrieving information due to bad request');
        }
        if (e.statusCode === 500) {
          res.status(500).send('Internal Server error please try again');
        }

        Logger.error(e.message);
      });
  },
};

export default Restaurants;
