BEGIN;

ALTER TABLE "contact"
  DROP CONSTRAINT contact_group_id_fkey;

INSERT INTO "group" ("name", "illustration") VALUES
('friends', 'fa fa-solid fa-user'),
('family', 'fa fa-solid fa-heart'),
('work', 'fa fa-solid fa-briefcase');

INSERT INTO "contact" ("name", "illustration", "group_id") VALUES
('Mommy', './img/mommy.png', 2),
('Daddy', './img/daddy.png', 2),
('Jenny', './img/jenny.png', 1),
('Antonio', './img/antonio.png', 1),
('Tony', './img/tony.png', 3),
('Alicia', './img/alicia.png', 3);

COMMIT;