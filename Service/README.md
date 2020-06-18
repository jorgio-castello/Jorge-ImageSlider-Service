# Performance Optimizations
> Described below are several highlighted optimizations that have been made for the Similar Properties API: 
> 1. Improve Cassandra's with prepared / bulk queries
> 2. Minimize network load on the client when fetching image assets

## Improving Cassandra Query Speed
> Prepared Queries improve performance on Cassandra nodes by minimizing the amount of data sent between the Cassandra NodeJS driver and the Cassandra node servers. Instead of relaying the entire query string, Cassandra nodes parse prepared statements to only require query variables to execute future queries.

#### Cassandra Basic Query (Example)
```
select * from propertiesByRating where location = 'Los Angeles' and price_per_night < 200;
```
#### Cassandra Query With Prepared Statements (Example)
```
select * from propertiesByRating where location = ? and price_per_night < ?;
```

When executing a prepared statement from the Cassandra NodeJS driver, an array of parameters is sent along to the Cassandra nodes for query execution.

## Minimizing the network impact of fetching image assets on the client
> Rather than storing static assets as image files on Amazon Web Services (S3), the images were compressed / converted to Base-64 strings. This process was formulated with a custom AWS S3 upload script located <a href="https://github.com/jorgio-castello/Similar-Properties-API/blob/master/Service/db/rawData/photoData/helpers/uploadS3.js" target="_blank">here</a>. 
> The reasoning behind using Base-64 image strings was as follows:
> 1. More often than not, a user will not be revisiting a similar property, removing the need to store image assets in the browser's cache
> 2. In the event a user clicks on a similar property, that property's profile will need to be fetched in its entirety. While the 4 images presented for each similar property could be stored in the browser's cache to minimize the network impact of the profile fetch, the third point indicates the reasoning against this
> 3. A similar property component will likely have between 10 - 20 similar properties presented. This necessitates between 40 - 80 images to power the component, per property listing. The need to store this many images in cache for the potential benefit of reducing the impact of a profile fetch, which at maximum will occur for 1 of the 10 - 20 similar properties presented to user, is considered to be a misuse of user's hardware resources
> 4. Lastly, the nature of the Similar Properties API is to power a component that accentuates the details of the currently viewed listing. Storing the images in blocks of 4 as JSON, reduces the amount of network requests needed by this component and enables more browser / network resources to be utilized by other components / processes

The Base-64 image strings are stored as properties in a JSON file, as shown in the example below:
```
[
  {
     imageId: "image_0",
     body: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/...
  },
  {
     imageId: "image_1",
     body: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/...
  },
  {
     imageId: "image_2",
     body: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/...
  },
  {
     imageId: "image_3",
     body: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/...
  },
]
```

The average size of the JSON Base-64 image blocks on AWS S3 is around 300kb
