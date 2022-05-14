BEGIN;

DROP TABLE IF EXISTS "group";

CREATE TABLE IF NOT EXISTS "group" (
    "id" integer GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    "illustration" varchar(255) NOT NULL DEFAULT '',
    "created_at" timestamptz NOT NULL DEFAULT NOW(),
    "updated_at" timestamptz
);

COMMIT;