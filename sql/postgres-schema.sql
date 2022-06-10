CREATE DATABASE improvibe;

\c improvibe;

DROP TABLE IF EXISTS project_hashtag;
DROP TABLE IF EXISTS sessions;
DROP TABLE IF EXISTS layers;
DROP TABLE IF EXISTS hashtags;
DROP TABLE IF EXISTS senres;
DROP TABLE IF EXISTS users;
DROP TABLE IF EXISTS projects;
DROP TABLE IF EXISTS tracks;
DROP TABLE IF EXISTS account;
DROP TABLE IF EXISTS likes;
DROP TABLE IF EXISTS past_searches;

CREATE TABLE project_hashtag (
  id serial,
  project_id integer,
  hashtag_id integer
);

CREATE TABLE sessions (
  id serial,
  expires timestamp,
  user_id integer,
  sessionToken varchar(255)
);

CREATE TABLE layers (
  id serial,
  name varchar,
  track_id integer,
  shares integer,
  project_id integer,
  searched integer,
  tempo integer,
  pitch integer,
  volume integer,
  start_time integer,
  trim_start integer,
  trim_end integer,
  loop boolean
);

CREATE TABLE hashtags (
  id serial,
  hashtag_name varchar,
  searched integer
);

CREATE TABLE users (
  id serial,
  name varchar(255),
  email varchar(255),
  hash varchar(255),
  about_me text,
  searched integer,
  emailVerified timestamp,
  photo_url varchar(255)
);

CREATE TABLE projects (
  id serial,
  name varchar(255),
  genre varchar(255),
  likes integer,
  shares integer,
  public boolean,
  user_id integer,
  searched integer,
  total_time integer,
  song_path varchar(255),
  date_created timestamp
);

CREATE TABLE tracks (
  id serial,
  name varchar(255),
  track_path varchar(255),
  date_created timestamp,
  searched integer
);

CREATE TABLE account (
  id serial,
  user_id integer,
  type varchar(255),
  provider varchar(255),
  providerAccountId varchar(255),
  refresh_token text,
  access_token text,
  expires_at integer,
  token_type varchar(255),
  scope varchar(255),
  id_token varchar(255),
  session_state varchar(255),
  oauth_token_secret varchar(255),
  oauth_token varchar(255)
);

CREATE TABLE likes (
  id serial,
  user_id integer,
  song_id integer
);

CREATE TABLE past_searches (
  id serial,
  user_id varchar(255),
  query varchar(255),
  date timestamp
);
