import { Router } from 'express';
import { Adventurer } from '../models/Adventurer';

export default Router()

  .post('/api/v1/adv', async(req, res, next) => {
    Adventurer.create(req.body)
      .then((profile) => res.send(profile))
      .catch(next);
  });
