# Improvibe
[![rpp33-boc-pacific](https://circleci.com/gh/rpp33-boc-pacific/improvibe.svg?style=svg)](https://app.circleci.com/pipelines/github/rpp33-boc-pacific/improvibe)

[![improvibe](https://im2.ezgif.com/tmp/ezgif-2-d244b298d9.gif "improvibe")](https://im2.ezgif.com/tmp/ezgif-2-d244b298d9.gif)



## Description
Improvibe is a collaborative space for artists to create, explore and share music. *Ellaborate more here?*
## Features
<!---
#### User Authentication
[![improvibe](https://i.ibb.co/XpGc6Fj/authentication.png "authentication")](https://i.ibb.co/XpGc6Fj/authentication.png)

#### Explorer Page
[![improvibe](https://i.ibb.co/ygvV5CG/Screen-Shot-2022-06-15-at-4-54-02-PM.png "home page")](http://ec2-3-89-242-183.compute-1.amazonaws.com/)

#### Project Editor
[![improvibe](https://i.ibb.co/BK5FLng/audio-editor.png "editor")](https://i.ibb.co/BK5FLng/audio-editor.png)
--->
User Authentication

Explorer Page

Audio Player

Artist Profile

Project Editor

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
\i [path to project]/improvibe/sqlpostgres-schema.sql
```

## Contributers
Alysha Gilliard - authentication and product owner <br>
Bhrigu Joshi - aome page<br>
Caitlin Winters - audio player and UI owner<br>
J.P. Doyle - profile <br>
Jakob Truong -  search and navigation<br>
Jeff Sparrow - audio editor<br>
Joe Casey - audio editor and architect owner<br>