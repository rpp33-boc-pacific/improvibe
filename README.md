# Improvibe
[![rpp33-boc-pacific](https://circleci.com/gh/rpp33-boc-pacific/improvibe.svg?style=svg)](https://app.circleci.com/pipelines/github/rpp33-boc-pacific/improvibe)

[![improvibe](https://i.ibb.co/6vWMBj5/ezgif-com-gif-maker.gif "improvibe")](https://i.ibb.co/6vWMBj5/ezgif-com-gif-maker.gif)



## Description
Improvibe is a collaborative space for artists to create, explore and share music.
## Features
[User Authentication](https://i.ibb.co/XpGc6Fj/authentication.png) - sign-up, log-in and log-out

[Explorer Page](https://i.ibb.co/ygvV5CG/Screen-Shot-2022-06-15-at-4-54-02-PM.png) -  song tiles categorized and displayed in a carousel format

[Audio Player](https://i.ibb.co/d0Xgkgc/Screen-Shot-2022-06-15-at-7-56-51-PM.png) - pop-up modal that plays current song

[Search](https://i.ibb.co/WWpdc0C/search.png) - allows user to search artist, song name and genre

[Profile](https://i.ibb.co/mT0yY7n/profile.png) - displays info about the user, and offers signed-in user the ability to edit their profile

[Project Editor](https://i.ibb.co/BK5FLng/audio-editor.png)  - allows the user to upload new tracks and make adjustments to the audio

## Technologies
[PostgreSQL](https://www.postgresql.org/)<br>
[Next.js](https://nextjs.org/) <br>
[Material UI](https://mui.com/) <br>
[wavesurfer.js](https://wavesurfer-js.org/)<br>
[crunker](https://github.com/jaggad/crunker)


## Installation and Usage
#### Prerequisites - [Node.js](https://nodejs.org/en/), [npm](https://www.npmjs.com/) and [PostgreSQL](https://www.postgresql.org/)

1. Navigate to project root directory
2. Install dependencies
```
npm install
```
3. Start local server
```
npm run dev
```

4. Start local database
```
psql postgres
```
5. Run project schema to create database
```
\i [path to project]/improvibe/sqlpostgres-schema.sql
```
6. Index columns
```
\i [path to project]/improvibe/index.sql
```
7. Set up an AWS S3 bucket for 'improvibe-tracks'

8. Create a .env.local file in the root of the project
```
touch .env.local
```
9. Store the following variables
```
PGHOST = '<posgres host server>'
PGUSER = '<postgres user name>'
PGDATABASE = 'improvibe'
PGPASSWORD = '<postgres password>'
ACCESS_KEY = '<S3 bucket access key>'
SECRET_KEY = '<S3 bucket secret key>'
BUCKET_NAME = 'improvibe-tracks'
```

## Contributers
Alysha Gilliard - authentication and product owner <br>
Bhrigu Joshi - aome page<br>
Caitlin Winters - audio player and UI owner<br>
J.P. Doyle - profile <br>
Jakob Truong -  search and navigation<br>
Jeff Sparrow - audio editor<br>
Joe Casey - audio editor and architect owner<br>
