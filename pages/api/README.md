
# Improvibe API Guide

#### Using This Guide
This guide explains how to use the routes within this API directory get get, post and update data. The different data services for this API are:
  1. user
  2. song
  3. songs
  4. add
  5. login
  6. signup
Parameters should be inserted in POST requests via the body parameter. Query strings are appended to the end of a route


##### User API
#### GET  /api/user/[id]<br>
Retrieves user information and songs

| Query String      | Description |
| ----------- | ----------- |
| [id]| The id of the current user appended to the route without brackets |

response: 200

  {
    id: 9,
    artist: 'David Bowe',
    searched: 10,
    photoUrl: 'https://ychef.files.bbci.co.uk/976x549/p01j3jyb.jpg',
    songs: [
      {
        id: 1
        name: 'Space Odity',
        songPath: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-16.mp3',
        liked: true,
        totalLikes: 14,
        genre: 'Rock'
      },
      {
      id: 2
      name: 'Golden Years'
      songPath: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-17.mp3',
      liked: false,
      totalLikes: 21,
      genre: 'Smooth Rock'
      }
    ]
  }

#### PUT  /api/user/update/[id]/<br>
Retrieves user information and songs

| Query String      | Description |
| ----------- | ----------- |
| [id]| The id of the current user |

| Parameter      | Type |  Description      |
| ----------- | ----------- | ----------- |
| public | boolean | Changes the valence availability to other users on improvibe |
| profile_picture | string | Updates url of profile picture |
| photo_url | string | Updates url of profile picture |
| about_me | string | Updates about me section of profile |
| email | string | Updates email for a user  |
| password | string | Updates password for a user  |

