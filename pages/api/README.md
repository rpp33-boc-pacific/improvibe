
# Improvibe API Guide

#### Using This Guide
This guide explains how to use the routes within this API directory using HTTP GET, POST and PUT methods. The data services for this API include:
  1. Signup
  2. Login
  3. Logout
  3. User
  4. Songs
  5. Song
  5. Projects

Parameters should be inserted in POST and PUT requests via the body parameter. Query strings for GET requests are appended to the end of a route.

## Signup API
#### POST  `/api/signup`<br>
Adds user to database

| Parameter      | Type |  Description      |
| ----------- | ----------- | ----------- |
| email | string | Input email address |
| password | string | Input password |

response status: 201


## Login API
#### POST  `/api/login`<br>
Checks login credentials

| Parameter      | Type |  Description      |
| ----------- | ----------- | ----------- |
| email | string | Input email address |
| password | string | Input password |

response status: 201

## Logout API
#### PUT or DELETE?  `/api/logout`<br>
Checks login credentials

| Parameter      | Type |  Description      |
| ----------- | ----------- | ----------- |
| user id | string | Numeric id of user |

response status: ??


## User API
#### GET  `/api/user/[id]`<br>
Retrieves user information and user's song list

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
Updates user information based on parameter. Possible parameters given below.

| Query String      | Description |
| ----------- | ----------- |
| [id]| The id of the current user appended to the route without brackets |


| Parameter      | Type |  Description      |
| ----------- | ----------- | ----------- |
| public | boolean | Changes the availability to other users on improvibe |
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
| search | string | Returns all matches containing this string from artist name, song name and genre|
| artist_name | string | Returns all matches containing this string in artist name |
| song_name | string | Returns all matches containing this string in song name |
| genre | string | Returns all matches containing this string in genre |
| likes | integer | Returns a maximum number of the most liked songs provided by parameter value |
| shares | integer | Returns a maximum number of the most shared songs provided by parameter value |
| most_recent | integer | Returns a maximum number of the most recent songs provided by parameter value |

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
#### PUT  `/api/song/like`<br>
Updates like boolean for current song

| Parameter      | Type |  Description      |
| ----------- | ----------- | ----------- |
| userId | integer | Id for current user |
| liked | boolean | Updates liked valence in database for current user |

response status: 200<br>

#### PUT  `/api/song/add-to-projects`<br>
Updates like boolean for current song

| Parameter      | Type |  Description      |
| ----------- | ----------- | ----------- |
| userId | integer | Id for current user |
| liked | boolean | Adds this song to current users projects list and updates |

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

#### POST  `/api/project/track`<br>
Saves to track database table

| Parameter      | Type |  Description      |
| ----------- | ----------- | ----------- |
| userId | integer | Id for current user |
| liked | boolean | Adds this song to current users projects list and updates |

response status: 201<br>


#### POST  `/api/project/layer`<br>
Saves to layer database table

| Parameter      | Type |  Description      |
| ----------- | ----------- | ----------- |
| userId | integer | Id for current user |
| liked | boolean | Adds this song to current users projects list and updates |

response status: 201<br>

#### POST  `/api/project`<br>
#### POST  `/api/project/song`<br>
Which of these ^ makes the most sense?
Saves project to song database table

| Parameter      | Type |  Description      |
| ----------- | ----------- | ----------- |
| userId | integer | Id for current user |
| liked | boolean | Adds this song to current users projects list and updates |

response status: 201<br>

//add route to delete layer
//add route to post hashtag
//PUT to update layer
// Talk to joe about this one -> PUT: update path to flattened project url on project table - Wouldn't this just happen when the project is saved?
//Talk to Joe about this one too -> PUT: update genre id on project table wouldn't that just be included when the song is saved?

