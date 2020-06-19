# Database Implementation

## Description of Similar Property API dataset
The Similar Property API recommendation engine can be utilized in a variety of use cases. The primary aspects of the data must include:
1. Organized by City / Region
2. Properties or locations with queryable characteristics

This repository was built with 10,000 cities, 10M properties, and the following characterists for properties:
- Location
- Rating (Decimal number between 1.00 - 5.00)
- Property Type (Home, Apartment, Room, Townhouse, Guesthouse, GuestSuite, Penthouse, Resort, Urban Cabin, Hotel Room)
- Number of Beds
- Description
- Amazon Web Services S3 url address (location of photo-block in JSON format)
- Price Per Night

## Cassandra vs MariaDB Benchmarking Takeaways
Cassandra and MariaDB were benchmarked by performing GET, POST, PATCH, and DELETE methods in the respective database's CLI.
These operations were tested in the following ranges of database property ids: 
- 0 - 2,000,000
- 2,000,001 - 4,000,000
- 6,000,001 - 8,000,000
- 8,000,001 - 10,000,000

Overall, Cassandra had a 4.4ms median query while MariaDB had a 20ms median query. 




