import pool from '../lib/utils/pool.js';
import setup from '../data/setup.js';
import request from 'supertest';
import app from '../lib/app.js';

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
});
