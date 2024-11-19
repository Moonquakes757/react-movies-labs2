# Assignment 1 - ReactJS app.

Name: Shaohua Xu

## Overview.

This Movie App project is a React-based web application that allows users to browse, search, and explore movie-related information using data from the TMDB API. It is designed to provide a user-friendly interface for discovering movies, upcoming releases, now-playing films, and popular movies as well as managing personal favorites and watch lists. Also, it includes movie details in each movie card: overview, genres, run time, average vote, released date, original language, production countries, etc. It also has a review function to help users see the reviews from different authors and a filter to help users locate a certain movie quickly by typing its name or selecting the genre.

### Features.
 
+ The original language can be listed in the movie detail component.
+ A now playing page which can be navigated from the site header. It shows the now-playing movies from TMDB.
+ A popular page which can be navigated from the site header. It shows the popular movies from TMDB.
+ A watch list page shows the movies added to it.
+ Changed icon in upcoming page to a button that can be clicked and the movie will be added to the watch list page.
+ Bookmarks added to the movie card in upcoming page, if users click on the button, a bookmark will show on top of the movie card to tell users that the movie is added to the watch list page.
+ Movies added to watch list page can be deleted by clicking on the delete button in the movie card in watch list page, and it will be removed.

## Setup requirements.

To set up and run this project locally, please ensure you meet the following requirements:

1. Prerequisites
Node.js (v16 or above)
npm (v8 or above): Comes with Node.js installation.
A text editor or IDE (e.g., VS Code).

2. TMDB API Key
This project uses the TMDB API to fetch movie data. You must create a free account on TMDB and generate an API key. Follow these steps:

Go to TMDB API.
Log in or create a new account.
Navigate to Settings > API > Create API Key.
Copy your API key and replace it in the tmdb-api.js file:

const API_KEY = "your_tmdb_api_key_here"

3. Clone the Repository
Clone the project repository from GitHub:

run git clone https://github.com/Moonquakes757/react-movies-labs2.git
cd react-movies-lab2

4. Install Dependencies
Install all required dependencies by running:

npm install

5. Environment Configuration (Optional)
If you'd like to store the TMDB API key in an environment file:

Create a .env file in the project root.
Add the following line to the .env file:
REACT_APP_TMDB_API_KEY=your_tmdb_api_key_here

Update tmdb-api.js to use the environment variable:
const API_KEY = process.env.REACT_APP_TMDB_API_KEY;

6. Start the Development Server
Run the following command to start the development server:

cd movies
npm start

The application will run at http://localhost:3000

This setup will allow you to run and develop the project locally!

## API endpoints.

[ List the __additional__ TMDB endpoints used, giving the description and pathname for each one.] 

+ Production countries - /configuration/countries
+ Upcoming movies - /movie/upcoming
+ Now playing movies - /movie/now_playing
+ Popular movies - /movie/popular


## Routing.

+ /movies/upcoming - lists movies that are scheduled for upcoming release.
+ /movies/now-playing - displays movies that are currently playing in theaters.
+ /movies/popular - shows a list of popular movies based on TMDB's popular criteria.
+ /movies/watchlist - displays a list of movies added to the user's watchlist.

## Independent learning (If relevant).

Itemize the technologies/techniques you researched independently and adopted in your project, 
i.e. aspects not covered in the lectures/labs. Include the source code filenames that illustrate these 
(we do not require code excerpts) and provide references to the online resources that helped you (articles/blogs).