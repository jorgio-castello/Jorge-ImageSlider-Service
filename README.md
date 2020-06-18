# Similar Properties API

> The Similar Properties API enables hotel / property rental providers to offer a custom list of similar properties based on their perception on what would be most attractive to the user currently visiting one of their listings. 

## Goals and Outcomes 
> The primary goal of this project was to create the backend for an API that met the following specifications: 
> - 2,500+ requests per second (RPS) 
> - less than 1.0s of latency per request 
> - less than 1.0% error rate during a stress test

> The following screenshots present the stress test results for the version final backend architecture:
> - 3,500+ requests per second (RPS) 
> - 0.8s average latency 
> - 0.0% error rate
<img src="https://airbnbslider.s3-us-west-1.amazonaws.com/SDC+Stress+Test.png" height=500>
<img src="https://airbnbslider.s3-us-west-1.amazonaws.com/SDC+Architecture+Visualization.png" height=500>

## Learn more about this Recommendation Engine
- <a href="https://github.com/jorgio-castello/Similar-Properties-API/tree/master/Service/server">API Server</a> - available API queries and how to build a custom list of properties to present to a target user
- <a href="https://github.com/jorgio-castello/Similar-Properties-API/tree/master/Service/db">Database</a> - details about the Cassandra implementation and why it was chosen in favor of a SQL database
- <a href="https://github.com/jorgio-castello/Similar-Properties-API/tree/master/Service">Optimization</a> - information related to decisions made to improve performance

## Getting Started
> Ensure Node (6.1 or higher) and Cassandra (3.1 or higher)are installed to work with this API in a local environment.

> To install dependencies:

```
npm install
```


> To create test data:
```
npm run createData
```


> To seed Cassandra:
```
npm run seedCassandra
```


> To start local development server:
```
npm start
```


## Related Projects
  - Booking API: https://github.com/CheaperByTheDozen/Nate-Booking
  - Gallery API: https://github.com/CheaperByTheDozen/jake_image_carousel

