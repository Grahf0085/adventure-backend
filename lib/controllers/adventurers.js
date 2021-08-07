import { Router } from 'express';
import { Adventurer } from '../models/Adventurer.js';

export default Router()

  .post('/api/v1/adv', async(req, res, next) => {
    Adventurer.create(req.body)
      .then((profile) => res.send(profile))
      .catch(next);
  })

  .get('/api/v1/adv', async(req, res, next) => {
    Adventurer.findAll()
      .then((profiles) => res.send(profiles))
      .catch(next);
  })

  .get('/api/v1/:id', async(req, res, next) => {
    Adventurer.findOne(req.params.id)
      .then((profile) => res.send(profile))
      .catch(next);
  })

  .delete('/api/v1/:id', async(req, res, next) => {
    Adventurer.delete(req.params.id)
      .then((profile) => res.send(profile))
      .catch(next);
  })

  .put('/api/v1/:id', async(req, res, next) => {
    Adventurer.update(req.params.id, req.body)
      .then((profile) => res.send(profile))
      .catch(next);
  });
