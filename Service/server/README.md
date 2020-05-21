## Similar Properties API
<hr />

### Get similar properties info
  * GET `/properties/:id/similarHomes`
  *  __Default:__ Responds with 12 similar properties in the same city as the currently viewed listing
  * __Optional:__ Request's body can optionally include:
      *  rankBy: rating, bed_num, __OR__ price_per_night
      * limit: number



**Path Parameters:**
  * `id` property id

**Optional Request Body**: Can accept JSON with the following keys to rank results by rating, number of beds, or price.

```json
    {
      "rankBy": "[rating || bed_num || price_per_night]",
      "limit": "Number"
    }
```

**Success Status Code:** `200`

**Returns:** JSON

```json
    "[
      {
        "id": "Number",
        "location": "String",
        "rating": "Number",
        "property_type": "String",
        "bed_num": "Number",
        "description": "String",
        "price_per_night": "Number",
        "img_src": "[ "String" ]"
      },
      ...
    ]"
```
<hr />

### Add property
  * POST `/properties/createProperty`

**Success Status Code:** `201`

**Request Body**: Expects JSON with the following keys.

```json
    {
      "location": "String",
      "rating": "Number",
      "property_type": "String",
      "bed_num": "Number",
      "description": "String",
      "price_per_night": "Number",
      "img_src": [ "String" ]
    }
```
**Success Status Code:** `201`
<hr />

### Update property info
  * PATCH `/properties/:id`

**Path Parameters:**
  * `id` property id

**Success Status Code:** `204`

**Request Body**: Expects JSON with any of the following keys (includes only keys to be updated)

```json
    {
      "rating": "Number",
      "description": "String",
      "price_per_night": "Number",
      "img_src": [ "String" ]
    }
```
<hr />

### Delete property
  * DELETE `/properties/:id`

**Path Parameters:**
  * `id` property id

**Success Status Code:** `204`
<hr />

