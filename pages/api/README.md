
# Improvibe API Guide

#### Using This Guide
This guide explains how to use the routes within this API directory get get, post and update data. The different data services for this API are:
  1. Login
  2. Signup
  3. User
  4. Songs
  5. Song
  5. Projects

Parameters should be inserted in POST requests via the body parameter. Query strings are appended to the end of a route.

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

#### PUT  `/api/user/update/[id]`/<br>
Updates user information based on parameter. Possible parameters below.

| Query String      | Description |
| ----------- | ----------- |
| [id]| The id of the current user appended to the route without brackets |


| Parameter      | Type |  Description      |
| ----------- | ----------- | ----------- |
| public | boolean | Changes the valence availability to other users on improvibe |
| photo_url | string | Updates url of profile picture |
| about_me | string | Updates about me section of profile |
| email | string | Updates email for a user  |
| password | string | Updates password for a user  |

reponse status: 200


## Songs API
#### GET  `/api/songs/?[parameter]=[value]`<br>
Retrieves songs based on search

| Parameter      | Type |  Description      |
| ----------- | ----------- | ----------- |
| search | string | Returns all matches containing this string from artist name and song name|
| filter | string | ?? |
| likes | integer | Returns a maximum of x number of the most liked songs |
| shares | integer | Returns a maximum of x number of the most shared songs |
| created_since | string | Returns all songs created since this date |

response status: 200<br>
 ```
[
  {
    song_id: 1,
    name: 'Song Name1',
    artist_name: 'Artist Name1',
    artist_id: 4,
    in_projects: false,
    genre: 'rock',
    cumulative_likes: 40,
    photo_url: 'https://ychef.files.bbci.co.uk/976x549/p01j3jyb.jpg',
    liked: true
  }, {
    song_id: 2,
    name: 'Song Name2',
    artist_name: 'Artist Name2',
    artist_id: 6,
    in_projects: true,
    genre: 'hip hop',
    cumulative_likes: 58,
    photo_url: 'https://footdistrict.com/media/magefan_blog/footdistrict-run-dmc-adidas-union-historica-3-1.jpg',
    liked: true
  }
]
```
## Song API
#### PUT  `/api/song/liked`<br>
Updates like boolean for current song

| Parameter      | Type |  Description      |
| ----------- | ----------- | ----------- |
| liked | boolean | Updates liked valence in database for current user|

response status: 200<br>

#### PUT  `/api/song/add`<br>
Updates like boolean for current song

| Parameter      | Type |  Description      |
| ----------- | ----------- | ----------- |
| liked | boolean | Updates liked valence in database for current user|

response status: 200<br>

## Projects API
#### GET  `/api/projects/[id]`<br>
Retrieves projects list for the current user

| Query String      | Description |
| ----------- | ----------- |
| [id]| Retrieves all projects for current user |

response status: 200<br>
 ```
{
  artist: 'Fakey McFake',
  songs: [{
    song: {
      tracks: {
        1: {
          track_path: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-9.mp3',
          layers: {
            1: {
            tempo: 86,
            pitch: 16,
            volume: 80,
            start_time: 0,
            end_time: 100,
            loop: false
            },
            2: {
            tempo: 90,
            pitch: 10,
            volume: 70,
            start_time: 0,
            end_time: 60,
            loop: false
            }
          }
        },
        2: {
          track_path: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-10.mp3',
          layers: {
            1: {
            tempo: 78,
            pitch: 14,
            volume: 50,
            start_time: 0,
            end_time: 90,
            loop: true
            }
          }
        }
      }
    }
  }, {
    song: {
      tracks: {
        1: {
          track_path: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-11.mp3',
          layers: {
            1: {
            tempo: 86,
            pitch: 16,
            volume: 80,
            start_time: 0,
            end_time: 100,
            loop: false
            }
          }
        },
        2: {
          track_path: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-12.mp3',
          layers: {
            1: {
            tempo: 86,
            pitch: 16,
            volume: 80,
            start_time: 0,
            end_time: 100,
            loop: false
            }
          }
        }
      }
    }
  }]
}

```
