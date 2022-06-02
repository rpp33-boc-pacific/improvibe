
# Improvibe API Guide

#### Using This Guide
This guide explains how to use the routes within this API directory using HTTP GET, POST, PUT and DELETE methods. The data services for this API include:
  1. Signup
  2. Login
  3. Logout
  3. User
  5. Project
  5. Projects
  6. Song
  7. Songs

Parameters should be inserted in POST and PUT requests via the body parameter. Query strings for GET requests are appended to the end of a route.

Terminology:
**Track** - a single audio file, or reference to the audio file uploaded to a project<br>
**Layer** - the audio adjustments for each track<br>
**Project** - a collection of all layers and their associated tracks<br>
**Song** - specifically the flattened audio file version of a project that is created when a project is saved<br>


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

response example:
```
{
  user: id
}
```

## Logout API
#### PUT or DELETE?  `/api/logout`<br>
Checks login credentials

| Parameter      | Type |  Description      |
| ----------- | ----------- | ----------- |
| user_id | integer | Id of current user |

response status: ??


## User API
#### GET  `/api/user/[id]`<br>
Retrieves user information and user's public projects with relavent social data and flattened song URL

| Query String      | Description |
| ----------- | ----------- |
| [id]| The id of the current user appended to the route without brackets |

response status: 200<br>

response example:
 ```
  {
    id: 9,
    artist_name: 'David Bowe',
    about_me: 'This is the about me section',
    photo_url: 'https://ychef.files.bbci.co.uk/976x549/p01j3jyb.jpg',
    songs: [
      {
        id: 1,
        name: 'Space Odity',
        song_path: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-16.mp3',
        liked: true,
        total_ikes: 14,
        genre: 'Rock'
      },
      {
      id: 2,
      name: 'Golden Years',
      song_path: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-17.mp3',
      liked: false,
      total_likes: 21,
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

NOTE: I think the logic here would all be the same, so the same query can be used
| Parameter      | Type |  Description      |
| ----------- | ----------- | ----------- |
| name | string | Updates the name of signed in user |
| photo_url | string | Updates url of profile picture of signed in user|
| about_me | string | Updates about me section of signed in user |
| email | string | Updates email of signed in user  |
| password | string | Updates password of signed in user  |

reponse status: 200



## Project API
#### POST  `/api/project`<br>
Saves project to project table

| Parameter      | Type |  Description      |
| ----------- | ----------- | ----------- |
| name | string | Name of project |
| user_id | integer | Id for current user |
| genre_id | integer | Id for selected genre |
| public | boolean | Whether project is public or private |
| total_time | integer | Length of current project |
| song_path | string | URL for flattened song file |

response status: 201<br>
example response:

```
{
  project_id: 1
}
```

#### POST  `/api/project/track`<br>
Saves track to track table

| Parameter      | Type |  Description      |
| ----------- | ----------- | ----------- |
| name | string | Name of track | necessary?
| track_path | string | URL for track file |

response status: 201<br>

#### POST  `/api/project/layer`<br>
Saves track to layer table

| Parameter      | Type |  Description      |
| ----------- | ----------- | ----------- |
| name | string | Name of layer | necessary?
| track_id | integer | Track associated with this layer |
| tempo | integer | Speed adjustment to track |
| pitch | integer | Frequency adjustment to track |
| volume | integer | Volume adjustment to track |
| start_time | integer | Where to start track |
| trim_start | integer | ?? |
| trim_end | integer | ?? |

response status: 201<br>
example response:

```
{
  layer_id: 1
}
```

#### PUT  `/api/project`<br>
Updates project information

| Parameter      | Type |  Description      |  Required      |
| ----------- | ----------- | ----------- | ----------- |
| project_id | integer | Id for current project |    yes    |
| name | string | Name of project |   no    |
| genre_id | integer | Id for selected genre |    no    |
| public | boolean | Whether project is public or private |    no    |
| total_time | integer | Length of current project |    no    |
| song_path | string | URL for flattened song file |    no    |

#### PUT  `/api/project/layer`<br>
Updates layer information

| Parameter      | Type |  Description      |  Required      |
| ----------- | ----------- | ----------- | ----------- |
| layer_id | integer | Id for current layer |   yes    |
| name | string | Name of layer |    no    | necessary?
| tempo | integer | Speed adjustment to track |    no    |
| pitch | integer | Frequency adjustment to track |   no    |
| volume | integer | Volume adjustment to track |   no    |
| start_time | integer | Where to start track |   no    |
| trim_start | integer | ?? |   no    |
| trim_end | integer | ?? |   no    |

#### DELETE  `/api/project`<br>
Deletes Project

Deletes project from project table

| Parameter      | Type |  Description      |
| ----------- | ----------- | ----------- |
| project_id | string | Id for current song |

response status: 200<br>



## Projects API
#### GET  `/api/projects/user/[id]`<br>
Retrieves projects list for the current user

| Query String      | Description |
| ----------- | ----------- |
| [id]| The id of the current user appended to the route without brackets |

response status: 200<br>

response example:
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

songs API


## Song API
#### PUT  `/api/song/liked`<br>
Updates song as liked or unliked by current user

| Parameter      | Type |  Description      |  Required      |
| ----------- | ----------- | ----------- | ----------- |
| user_id | integer | Id for current user |    yes    |
| song_id | integer | Id for current song |    yes    |
| liked | boolean | Whether to update as true or false |    yes    |

response status: 200<br>

#### PUT  `/api/song/shared`<br>
Updates total number of times project has been shared

| Parameter      | Type |  Description      |  Required      |
| ----------- | ----------- | ----------- | ----------- |
| project_id | integer | Id for current song |    yes    |

response status: 200<br>

#### POST  `/api/song/add-to-projects`<br>
Adds current song to signed in user's projects list

| Parameter      | Type |  Description      |
| ----------- | ----------- | ----------- |
| user_id | integer | Id for current user |
| song_id | integer | Adds as a project to user's list |

response status: 200<br>


## Songs API
#### GET  `/api/songs/[id]`
Retrieves all songs for owned by current user

| Query String      | Description |
| ----------- | ----------- |
| [id]| The id of the current user appended to the route without brackets |

response status: 200<br>

response example:

```
[
      {
        id: 1,
        name: 'Space Odity',
        song_path: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-16.mp3',
        liked: true,
        total_ikes: 14,
        genre: 'Rock'
      },
      {
      id: 2,
      name: 'Golden Years',
      song_path: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-17.mp3',
      liked: false,
      total_likes: 21,
      genre: 'Smooth Rock'
      }
    ]
```

#### GET  `/api/songs/?[parameter]=[value]`<br>
Retrieves songs based on search

| Parameter      | Type |  Description      |
| ----------- | ----------- | ----------- |
| any | string | Returns all matches containing this string from artist name, song name and genre |
| artist_name | string | Returns all matches containing this string in artist name |
| song_name | string | Returns all matches containing this string in song name |
| genre | string | Returns all matches containing this string in genre |

response status: 200

response example:
 ```
[
  {
    song_id: 1,
    song_name: 'Song Name1',
    artist_name: 'Artist Name1',
    artist_id: 4,
    in_projects: false,
    genre: 'rock',
    cumulative_likes: 40,
    photo_url: 'https://ychef.files.bbci.co.uk/976x549/p01j3jyb.jpg',
    liked: true
  }, {
    song_id: 2,
    song_name: 'Song Name2',
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

#### GET  `/api/songs/most/?[parameter]=[value]`<br>
Retrieves songs based on search
| liked | integer | Returns a maximum number of the most liked songs provided by parameter value |
| shared | integer | Returns a maximum number of the most shared songs provided by parameter value |
| recent | integer | Returns a maximum number of the most recent songs provided by parameter value |

response status: 200

response example:
 ```
[
  {
    song_id: 1,
    song_name: 'Song Name1',
    artist_name: 'Artist Name1',
    artist_id: 4,
    in_projects: false,
    genre: 'rock',
    cumulative_likes: 40,
    photo_url: 'https://ychef.files.bbci.co.uk/976x549/p01j3jyb.jpg',
    liked: true
  }, {
    song_id: 2,
    song_name: 'Song Name2',
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