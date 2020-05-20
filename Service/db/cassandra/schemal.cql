Cassandra
HOST TABLE
  id INT PRIMARY KEY
  name TEXT
PHOTO TABLE
  id INT PRIMARY KEY
  src TEXT
PROPERTY TABLE
id INT PRIMARY KEY
host FROZEN<HOST>
location TEXT
rating DECIMAL
property_type TEXT
bed_num INT
description TEXT
price_per_night INT
photos list<PHOTOS>
SIMILAR PROPERTIES TABLE
id INT PRIMARY KEY
property <PROPERTY>
similarProperties list<PROPERTY>