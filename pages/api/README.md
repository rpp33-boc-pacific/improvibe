
# Improvibe API Guide

#### Using This Guide
This guide explains how to use the routes within this API directory get get, post and update data. The different data services for this API are:
  1. user
  2. song
  3. songs
  4. add
  5. login
  6. signup

##### User API
#### GET <br>
### /api/user/[id]<br>
Retrieves user information and songs

| Query String      | Description |
| ----------- | ----------- |
| [id]| The id of the current user |

#### PUT <br>
### /api/user/update/[id]/<br>
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
| email | string | Updates email for a user|
| password | string | Updates password for a user|

