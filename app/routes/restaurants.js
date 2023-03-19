import express from 'express';
import controllers from '../controllers';

const router = express.Router();

router.get('/', (req, res) => controllers.restaurants.getRestaurants(req, res));

router.get('/:id', (req, res) => controllers.restaurants.getSingleRestaurant(req, res));

export default router;
