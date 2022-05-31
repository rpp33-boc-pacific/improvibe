
# Improvibe API Guide

#### Using This Guide
This guide explains how to use the routes within this API directory get get, post and update data. The different data services for this API are:
  1. login
  2. signup
  3. user
  4. songs
  5. projects
  6. add

Parameters should be inserted in POST requests via the fetch body parameter. Query strings are appended to the end of a route.

## Login API
#### POST  `/api/login`<br>
Checks login credentials

| Parameter      | Type |  Description      |
| ----------- | ----------- | ----------- |
| email | string | Input email address |
| password | string | Input password |

response status: 201

## Signup API
#### POST  `/api/signup`<br>
Adds user to database

| Parameter      | Type |  Description      |
| ----------- | ----------- | ----------- |
| email | string | Input email address |
| password | string | Input password |

response status: 201


## User API
#### GET  `/api/user/[id]`<br>
Retrieves user information and songs

| Query String      | Description |
| ----------- | ----------- |
| [id]| The id of the current user appended to the route without brackets |

response status: 200<br>
example response object:
 ```
 {
  id: 9,
  artist: 'David Bowe',
  searched: 10,
  photoUrl: 'https://ychef.files.bbci.co.uk/976x549/p01j3jyb.jpg',
  songs: [
    {
      id: 1,
      name: 'Space Odity',
      songPath: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-16.mp3',
      liked: true,
      totalLikes: 14,
      genre: 'Rock'
    },
    {
    id: 2,
    name: 'Golden Years',
    songPath: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-17.mp3',
    liked: false,
    totalLikes: 21,
    genre: 'Smooth Rock'
    }
  ]
}
```

#### PUT  `/api/user/update`/<br>
Updates user information based on parameter. Possible parameters below.

| Parameter      | Type |  Description      |
| ----------- | ----------- | ----------- |
| id | integer | The current user's id|
| public | boolean | Changes the valence availability to other users on improvibe |
| photo_url | string | Updates url of profile picture |
| about_me | string | Updates about me section of profile |
| email | string | Updates email for a user  |
| password | string | Updates password for a user  |

reponse status: 200


## Songs API
#### GET  `/api/user/songs/?[parameter]=[value]`<br>
Retrieves songs based on search

| Parameter      | Type |  Description      |
| ----------- | ----------- | ----------- |
| search | string | Returns all matches containing this string from artist name and song name|
| filter | string | ?? |
| likes | integer | Returns a maximum of x number of the most liked songs |
| shares | string | Returns a maximum of x number of the most shared songs |
| created_since | string | Returns all songs created since this date |

response status: 200<br>
example response object:
 ```
[
  {
    song_id: 1,
    name: 'Song Name1',
    artist_name: 'Artist Name1',
    user_id: 4,
    in_projects: false,
    genre: 'rock',
    cumulative_likes: 40,
    photo_url: 'https://ychef.files.bbci.co.uk/976x549/p01j3jyb.jpg',
    liked: true
  }, {
    song_id: 2,
    name: 'Song Name2',
    artist_name: 'Artist Name2',
    user_id: 6,
    in_projects: true,
    genre: 'hip hop',
    cumulative_likes: 58,
    photo_url: 'https://footdistrict.com/media/magefan_blog/footdistrict-run-dmc-adidas-union-historica-3-1.jpg',
    liked: true
  }
]
```
