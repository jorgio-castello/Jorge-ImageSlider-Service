DROP DATABASE IF EXISTS airbnb_mhyml;

CREATE DATABASE airbnb_mhyml;

\c airbnb_mhyml;

CREATE TABLE hostTable (
  host_id SERIAL PRIMARY KEY,
  name VARCHAR(100)
);

CREATE TABLE roomTable (
  room_id SERIAL PRIMARY KEY,
  host_id INTEGER REFERENCES hostTable(host_id),
  location VARCHAR(100),
  rating REAL,
  room_type VARCHAR(200),
  bed_num INTEGER,
  description VARCHAR(255),
  price_per_night INTEGER,
  img_src VARCHAR(255)[]
);

INSERT INTO hostTable (name) VALUES ('host1');
INSERT INTO hostTable (name) VALUES ('host2');
INSERT INTO hostTable (name) VALUES ('host3');

INSERT INTO roomTable (host_id, location, rating, room_type, bed_num, description, price_per_night, img_src) VALUES (1, 'Nasvhille, TN', 4.45, 'Building', 6, 'A residential bloc in downtown Nashville', 60, '{https://loremflickr.com/333/222/building?random=1, https://loremflickr.com/333/222/building?random=2, https://loremflickr.com/333/222/building?random=3, https://loremflickr.com/333/222/building?random=4}');
INSERT INTO roomTable (host_id, location, rating, room_type, bed_num, description, price_per_night, img_src) VALUES (2, 'Nashville, TN', 4.72, 'House', 3, 'An exquisit stay', 122, '{https://loremflickr.com/333/222/building?random=5, https://loremflickr.com/333/222/building?random=6, https://loremflickr.com/333/222/building?random=7}');
INSERT INTO roomTable (host_id, location, rating, room_type, bed_num, description, price_per_night, img_src) VALUES (3, 'Nashville, TN', 4.13, 'Bloc', 7, 'Enough room for you and all your friends!', 135, '{https://loremflickr.com/333/222/building?random=8, https://loremflickr.com/333/222/building?random=9, https://loremflickr.com/333/222/building?random=10, https://loremflickr.com/333/222/building?random=11}');


--the following are repeats of above!

INSERT INTO roomTable
  (host_id, location, rating, room_type, bed_num, description, price_per_night, img_src)
VALUES
  (1, 'Nasvhille, TN', 4.87, 'Apartment', 3, 'A lovely little spot in Nash', 120, '{https://loremflickr.com/333/222/building?random=12,
https://loremflickr.com/333/222/building?random=13,
https://loremflickr.com/333/222/building?random=14,
https://loremflickr.com/333/222/building?random=15}');

INSERT INTO roomTable
  (host_id, location, rating, room_type, bed_num, description, price_per_night, img_src)
VALUES
  (2, 'Nasvhille, TN', 4.79, 'Townhouse', 4, 'A Townhouse for all your Nashvegas needs', 87, '{https:
//loremflickr.com/333/222/building?random=16,
https:
//loremflickr.com/333/222/building?random=17,
https:
//loremflickr.com/333/222/building?random=18,
https:
//loremflickr.com/333/222/building?random=19}');

INSERT INTO roomTable
  (host_id, location, rating, room_type, bed_num, description, price_per_night, img_src)
VALUES
  (3, 'Nasvhille, TN', 4.32, 'Room', 2, 'A room for two to four', 95, '{https:
//loremflickr.com/333/222/building?random=20,
https:
//loremflickr.com/333/222/building?random=21,
https:
//loremflickr.com/333/222/building?random=22,
https:
//loremflickr.com/333/222/building?random=23}');

INSERT INTO roomTable
  (host_id, location, rating, room_type, bed_num, description, price_per_night, img_src)
VALUES
  (1, 'Nasvhille, TN', 4.68, 'Guesthouse', 5, 'A little slice of heaven', 100, '{https:
//loremflickr.com/333/222/building?random=24,
https:
//loremflickr.com/333/222/building?random=25,
https:
//loremflickr.com/333/222/building?random=26,
https:
//loremflickr.com/333/222/building?random=27}');

INSERT INTO roomTable
  (host_id, location, rating, room_type, bed_num, description, price_per_night, img_src)
VALUES
  (2, 'Nasvhille, TN', 4.81, 'Guest Suite', 3, 'A suite to fit your wants', 77, '{https:
//loremflickr.com/333/222/building?random=28,
https:
//loremflickr.com/333/222/building?random=29,
https:
//loremflickr.com/333/222/building?random=30,
https:
//loremflickr.com/333/222/building?random=31}');

INSERT INTO roomTable
  (host_id, location, rating, room_type, bed_num, description, price_per_night, img_src)
VALUES
  (3, 'Nasvhille, TN', 4.55, 'House', 4, 'A house to hold your party!', 88, '{https:
//loremflickr.com/333/222/building?random=32,
https:
//loremflickr.com/333/222/building?random=33,
https:
//loremflickr.com/333/222/building?random=34,
https:
//loremflickr.com/333/222/building?random=35}');

INSERT INTO roomTable
  (host_id, location, rating, room_type, bed_num, description, price_per_night, img_src)
VALUES
  (1, 'Nasvhille, TN', 4.87, 'Apartment', 3, 'An apt apartment', 120, '{https:
//loremflickr.com/333/222/building?random=36,
https:
//loremflickr.com/333/222/building?random=37,
https:
//loremflickr.com/333/222/building?random=38,
https:
//loremflickr.com/333/222/building?random=39}');

INSERT INTO roomTable
  (host_id, location, rating, room_type, bed_num, description, price_per_night, img_src)
VALUES
  (1, 'Nasvhille, TN', 4.24, 'Building', 5, 'Recently renovated and covid free!', 88, '{https://loremflickr.com/333/222/building?random=40, https://loremflickr.com/333/222/building?random=41, https://loremflickr.com/333/222/building?random=42, https://loremflickr.com/333/222/building?random=43}');

INSERT INTO roomTable
  (host_id, location, rating, room_type, bed_num, description, price_per_night, img_src)
VALUES
  (2, 'Nashville, TN', 4.22, 'House', 9, 'An excellent stay', 104, '{https://loremflickr.com/333/222/building?random=44, https://loremflickr.com/333/222/building?random=45, https://loremflickr.com/333/222/building?random=46}');