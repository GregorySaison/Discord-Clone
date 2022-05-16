BEGIN;

DROP TABLE IF EXISTS "group", "contact";

CREATE TABLE IF NOT EXISTS "group" (
    "id" integer GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    "name" varchar(255) NOT NULL DEFAULT '',
    "illustration" varchar(255) NOT NULL DEFAULT '',
    "created_at" timestamptz NOT NULL DEFAULT NOW(),
    "updated_at" timestamptz
);

CREATE TABLE IF NOT EXISTS "contact" (
    "id" integer GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    "name" varchar(255) NOT NULL DEFAULT '',
    "illustration" varchar(255) NOT NULL DEFAULT '',
    "group_id" integer NOT NULL REFERENCES "group" ("id"),
    "created_at" timestamptz NOT NULL DEFAULT NOW(),
    "updated_at" timestamptz
);

COMMIT;