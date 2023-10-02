# WeLoveMovies - Backend

**Backend Development Capstone project for Thinkful Software Engineering Flex**

**Deployed at:** [https://we-3lpx.onrender.com/movies](https://we-3lpx.onrender.com/movies)
## Project Overview

Created a database and RESTful API with CRUD operations that allows users to access data about movies, theaters, and reviews.

### Tasks:

- Ran tests from the command line
- Accessed relevant information through route and query parameters
- Created an error handler for the case where a route doesn't exist
- Built an API following RESTful design principles
- Created and customized a knexfile.js file
- Created a connection to PostgreSQL database with Knex
- Used Knex to write database queries, completing CRUD routes in an Express server
- Returned joined and nested data with Knex
- Wrote database migrations using Knex's migration tool
- Deployed the backend server to Heroku

### Utilized:

- PostgreSQL
- Node.js
- Express.js
- Knex.js

## Routes

The following routes and methods are available:

- /movies
- /movies?is_showing=true
- /movies/:movieId
- /movies/:movieId/theaters
- /movies/:movieId/reviews
- /theaters
- /reviews [PUT/DELETE]
