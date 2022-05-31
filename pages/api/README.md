
# Improvibe API Guide

#### Using This Guide
This guide explains how to use the routes within this API directory get get, post and update data. The different data services for this API are:
  1. login
  2. signup
  3. user
  4. songs
  5. projects
  6. add

Parameters should be inserted in POST requests via the body parameter. Query strings are appended to the end of a route

## Login API
#### POST  /api/logIn<br>
Retrieves user information and songs

| Parameter      | Type |  Description      |
| ----------- | ----------- | ----------- |
| email | string | Input email address |
| password | string | Input password |

response status: 201

## Signup API
#### POST  /api/signUp<br>
Retrieves user information and songs

| Parameter      | Type |  Description      |
| ----------- | ----------- | ----------- |
| email | string | Input email address |
| password | string | Input password |

response status: 201


## User API
#### GET  /api/user/[id]<br>
Retrieves user information and songs

| Query String      | Description |
| ----------- | ----------- |
| [id]| The id of the current user appended to the route without brackets |

response status: 200
example response object:
 `{
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
}`

#### PUT  /api/user/update/[id]/<br>
Retrieves user information and songs

| Query String      | Description |
| ----------- | ----------- |
| [id]| The id of the current user |

| Parameter      | Type |  Description      |
| ----------- | ----------- | ----------- |
| id | string | The current user's id|
| public | boolean | Changes the valence availability to other users on improvibe |
| photo_url | string | Updates url of profile picture |
| about_me | string | Updates about me section of profile |
| email | string | Updates email for a user  |
| password | string | Updates password for a user  |

