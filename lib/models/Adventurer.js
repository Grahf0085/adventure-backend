import pool from '../utils/pool';

export class Adventurer {

  id;
  alias;
  currentClass;
  job;
  title;
  warLvl;
  mnkLvl;
  thfLvl;
  wizLvl;
  clrLvl;
  brdLvl;
  missionRank;
  // fishing;
  // woodworking;
  // smithing;
  // goldsmithing;
  // weaving;
  // leathercraft;
  // bonecraft;
  // alchemy;
  // cooking;
  zone;

  constructor (row) {

    this.id = row.id;
    this.alias = row.alias;
    this.currentClass = row.current_class;
    this.title = row.title;
    this.level = row.level;
    this.warLvl = row.war_lvl;
    this.mnkLvl = row.mnk_lvl;
    this.thfLvl = row.thf_lvl;
    this.wizLvl = row.wiz_lvl;
    this.clrLvl = row.clr_lvl;
    this.brdLvl = row.brd_lvl;
    this.missionRank = row.mission_rank;
    this.zone = row.zone;
    // this.fishing = row.fishing;
    // this.woodworking = row.woodworking;
    // this.smithing = row.smithing;
    // this.goldsmithing = row.goldsmithing;
    // this.weaving = row.weaving;
    // this.leathercraft = row.leathercraft;
    // this.bonecraft = row.bonecraft;
    // this.alchemy = row.alchemy;
    // this.cooking = row.cooking;

  }

  static async create({alias, currentClass, level, title, warLvl, mnkLvl, thfLvl, wizLvl, clrLvl, brdLvl, missionRank, zone }) {
    const { rows } = await pool.query(`
      INSERT INTO  adventurer
      (alias, current_class, level, title, war_lvl, mnk_lvl, thf_lvl, wiz_lvl, clr_lvl, brd_lvl, mission_rank, zone)
      VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12)
      RETURNING *
    `, [alias, currentClass, level, title, warLvl, mnkLvl, thfLvl, wizLvl, clrLvl, brdLvl, missionRank, zone]);

    return new Adventurer(rows[0]);
  }
}
