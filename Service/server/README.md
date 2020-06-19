## Similar Properties API
<hr />

### GET - similar properties info for a specific property
  > GET `/properties/:id/similarHomes/[:rankBy]/[:limit]`
  
  **Path Parameters:**
  * `id` property id
  * `[rankBy]` numberOfBeds, propertyType, price, or rating
  * `[limit]` integer 1 or greater
  
  -  __Default:__ Responds with 12 similar properties in the same city as the currently viewed listing:
     - 3 similar properties by number of beds
     - 3 similar properties by property type
     - 3 similar properties by price
     - 3 similar properties by rating
  * __Optional:__ Responds with similar properties by a particular characteristic (default limit is 1):
      * rankBy options: numberOfBeds, propertyType, price, rating
      * limit options: integers 1 or greater

**Success Status Code:** `200`

**Returns:** JSON

```json
    "[
      {
        "location": "String",
        "uuid": "String",
        "rating": "Number",
        "property_type": "String",
        "bed_num": "Number",
        "description": "String",
        "price_per_night": "Number",
        "awsblockurl": "String"
      },
      ...
    ]"
```
<hr />

### Add a new property (POST)
  > POST `/properties/createProperty`

**Request Body**: Expects JSON with the following keys.

```json
    {
      "location": "String",
      "rating": "Number",
      "property_type": "String",
      "bed_num": "Number",
      "description": "String",
      "price_per_night": "Number",
      "awsblockurl": "String"
    }
```
**Success Status Code:** `201`
<hr />

### Update property info
  * PATCH `/properties/:id`

**Path Parameters:**
  * `id` property id

**Success Status Code:** `204`

**Request Body**: Expects JSON with any of the following properties (only include properties to be updated)

```json
    {
      "newRating": "Number",
      "newDescription": "String",
      "newPrice_per_night": "Number",
      "newAwsblockurl": "String"
    }
```
<hr />

### Delete property
  * DELETE `/properties/:id`

**Path Parameters:**
  * `id` property id

**Success Status Code:** `204`
<hr />

