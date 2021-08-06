DROP TABLE IF EXISTS adventurer;

CREATE TABLE adventurer(
  id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  alias TEXT NOT NULL,
  current_class TEXT NOT NULL,
  level SMALLINT NOT NULL,
  title TEXT NOT NULL,
  war_lvl SMALLINT NOT NULL,
  mnk_lvl SMALLINT NOT NULL,
  thf_lvl SMALLINT NOT NULL,
  wiz_lvl SMALLINT NOT NULL,
  clr_lvl SMALLINT NOT NULL,
  brd_lvl SMALLINT NOT NULL,
  mission_rank  SMALLINT NOT NULL,
  zone TEXT NOT NULL
  -- fishing SMALLINT NOT NULL,
  -- woodworking SMALLINT NOT NULL,
  -- smithing SMALLINT NOT NULL,
  -- goldsmithing SMALLINT NOT NULL,
  -- weaving SMALLINT NOT NULL,
  -- leathercraft SMALLINT NOT NULL,
  -- bonecraft SMALLINT NOT NULL,
  -- alchemy SMALLINT NOT NULL,
  -- cooking SMALLINT NOT NULL,
);
