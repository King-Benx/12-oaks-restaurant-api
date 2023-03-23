import yelp from 'yelp-fusion';
import { YELP_API_KEY } from '../config/env';
import Logger from '../config/winston';
import { exists, getFromCache, storeCache } from '../helpers/cacheData';

const Restaurants = {
  getRestaurants: (req, res) => {
    const { location, term } = req.query;

    const ifExists = exists(JSON.stringify(req.query));

    if (ifExists) {
      return res.send(getFromCache(JSON.stringify(req.query)));
    }

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
      .then((response) => {
        const data = JSON.stringify(response.jsonBody.businesses);
        storeCache(JSON.stringify(req.query), data);
        return res.send(data);
      })
      .catch((e) => {
        if (e.statusCode === 400) {
          res.status(400).send('Failure retrieving information due to bad request');
        }
        if (e.statusCode === 500) {
          res.status(500).send('Internal Server error please try again');
        }
        Logger.error(e.message);
      });
    return true;
  },

  getSingleRestaurant: (req, res) => {
    const ifExists = exists(JSON.stringify(req.params));

    if (ifExists) {
      return res.send(getFromCache(JSON.stringify(req.params)));
    }
    const client = yelp.client(YELP_API_KEY);
    client
      .business(req.params)
      .then((response) => {
        const data = JSON.stringify(response.jsonBody);
        storeCache(JSON.stringify(req.params), data);
        return res.send(data);
      })
      .catch((e) => {
        if (e.statusCode === 400) {
          res.status(400).send('Failure retrieving information due to bad request');
        }
        if (e.statusCode === 500) {
          res.status(500).send('Internal Server error please try again');
        }

        Logger.error(e.message);
      });
    return true;
  },
};

export default Restaurants;
