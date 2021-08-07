import pool from '../lib/utils/pool.js';
import setup from '../data/setup.js';
import request from 'supertest';
import app from '../lib/app.js';
import { Adventurer } from '../lib/models/Adventurer';

describe('adventurer routes', () => {
  beforeEach(() => {
    return setup(pool);
  });

  it('creates a new adventurer', async () => {

    const newAdventurer = {
      alias: 'Xeno',
      currentClass: 'Warrior',
      level: 75,
      title: 'Heroe',
      warLvl: 37,
      mnkLvl: 16,
      thfLvl: 37,
      wizLvl: 0,
      clrLvl: 0,
      brdLvl: 0,
      missionRank: 5,
      zone: 'Great Desert'
    };

    const res = await request(app)
      .post('/api/v1/adv')
      .send(newAdventurer);

    expect(res.body).toEqual({
      id:'1',
      alias: 'Xeno',
      currentClass: 'Warrior',
      level: 75,
      title: 'Heroe',
      warLvl: 37,
      mnkLvl: 16,
      thfLvl: 37,
      wizLvl: 0,
      clrLvl: 0,
      brdLvl: 0,
      missionRank: 5,
      zone: 'Great Desert'
    });

  });

  it('gets all adventurers', async () => {
    
    const newAdventurer = await Adventurer.create({
      alias: 'Xeno',
      currentClass: 'Warrior',
      level: 75,
      title: 'Heroe',
      warLvl: 37,
      mnkLvl: 16,
      thfLvl: 37,
      wizLvl: 0,
      clrLvl: 0,
      brdLvl: 0,
      missionRank: 5,
      zone: 'Great Desert'
    });

    const newAdventurerTwo = await Adventurer.create({
      alias: 'Miang',
      currentClass: 'Thief',
      level: 77,
      title: 'Unifier of Everyone',
      warLvl: 0,
      mnkLvl: 0,
      thfLvl: 0,
      wizLvl: 100,
      clrLvl: 0,
      brdLvl: 0,
      missionRank: 10,
      zone: 'Sky'
    });

    const res = await request(app)
      .get('/api/v1/adv');

    expect(res.body).toEqual([newAdventurer, newAdventurerTwo]);

  });

  it('gets an adventurer', async() => {

    const newAdventurer = await Adventurer.create({
      alias: 'Xeno',
      currentClass: 'Warrior',
      level: 75,
      title: 'Heroe',
      warLvl: 37,
      mnkLvl: 16,
      thfLvl: 37,
      wizLvl: 0,
      clrLvl: 0,
      brdLvl: 0,
      missionRank: 5,
      zone: 'Great Desert'
    });

    const res = await request(app)
      .get(`/api/v1/${newAdventurer.id}`);

    expect(res.body).toEqual(newAdventurer);
  });

  it('deletes an adventurer', async() => {
    
    const newAdventurer = await Adventurer.create({
      alias: 'Xeno',
      currentClass: 'Warrior',
      level: 75,
      title: 'Heroe',
      warLvl: 37,
      mnkLvl: 16,
      thfLvl: 37,
      wizLvl: 0,
      clrLvl: 0,
      brdLvl: 0,
      missionRank: 5,
      zone: 'Great Desert'
    });

    const res = await request(app)
      .delete(`/api/v1/${newAdventurer.id}`);
    
    expect(res.body).toEqual(newAdventurer);
  });

  it('updates an adventurers title', async() => {
    
    const newAdventurer = await Adventurer.create({
      alias: 'Xeno',
      currentClass: 'Warrior',
      level: 75,
      title: 'Heroe',
      warLvl: 37,
      mnkLvl: 16,
      thfLvl: 37,
      wizLvl: 0,
      clrLvl: 0,
      brdLvl: 0,
      missionRank: 5,
      zone: 'Great Desert'
    });

    const title = { title: 'loser' };

    const changedAdventurer = {
      id: '1',
      alias: 'Xeno',
      currentClass: 'Warrior',
      level: 75,
      title: 'loser',
      warLvl: 37,
      mnkLvl: 16,
      thfLvl: 37,
      wizLvl: 0,
      clrLvl: 0,
      brdLvl: 0,
      missionRank: 5,
      zone: 'Great Desert'
    };

    const res = await request(app)
      .put(`/api/v1/${newAdventurer.id}`)
      .send(title);

    expect(res.body).toEqual(changedAdventurer);
  });

});
