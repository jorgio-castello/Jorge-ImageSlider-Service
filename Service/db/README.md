# Similar Properties Database Schema
<hr>

## MariaDB

#### HOST TABLE
```
  id INT PRIMARY KEY NOT NULL AUTO_INCREMENT
  name NOT NULL VARCHAR(50)
```

#### PROPERTY TABLE
```
  id INT NOT NULL PRIMARY KEY AUTO_INCREMENT
  location NOT NULL VARCHAR(50)
  rating NOT NULL DECIMAL(3, 2) UNSIGNED
  property_type NOT NULL VARCHAR(25)
  bed_num NOT NULL TINYINT UNSIGNED
  description NOT NULL VARCHAR(255)
  price_per_night NOT NULL SMALLINT UNSIGNED
  host_id INT REFERENCES HOST(id) NOT NULL
```
#### SIMILAR PROPERTIES TABLE
```
  id INT PRIMARY KEY AUTO_INCREMENT
  similar_home_1 INT REFERENCES PROPERTY(id) NOT NULL
  similar_home_2 INT REFERENCES PROPERTY(id) NOT NULL
  similar_home_3 INT REFERENCES PROPERTY(id) NOT NULL
  similar_home_4 INT REFERENCES PROPERTY(id) NOT NULL
  similar_home_5 INT REFERENCES PROPERTY(id)
  similar_home_6 INT REFERENCES PROPERTY(id)
  similar_home_7 INT REFERENCES PROPERTY(id)
  similar_home_8 INT REFERENCES PROPERTY(id)
  similar_home_9 INT REFERENCES PROPERTY(id)
  similar_home_10 INT REFERENCES PROPERTY(id)
  similar_home_11 INT REFERENCES PROPERTY(id)
  similar_home_12 INT REFERENCES PROPERTY(id)
  property_id INT REFERENCES PROPERTY(id) NOT NULL
```
#### PHOTOS TABLE
```
  id INT PRIMARY KEY NOT NULL
  src VARCHAR(255) NOT NULL
  property_id INT REFERENCES PROPERTY(id) NOT NULL
```
<hr />

### Cassandra
#### HOST TABLE
```
  id INT PRIMARY KEY
  name TEXT
```

#### PHOTO TABLE
```
  id INT PRIMARY KEY
  src TEXT
```

#### PROPERTY TABLE
```
id INT PRIMARY KEY
host FROZEN<HOST>
location TEXT
rating DECIMAL
property_type TEXT
bed_num INT
description TEXT
price_per_night INT
photos list<PHOTOS>
```

#### SIMILAR PROPERTIES TABLE
```
id INT PRIMARY KEY
property <PROPERTY>
similarProperties list<PROPERTY>
```






























