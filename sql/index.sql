CREATE INDEX index_projects_genreid
  ON projects(genre_id);

CREATE INDEX index_projects_userid
  ON projects(user_id);

CREATE INDEX index_layers_trackid
  ON layers(track_id);

CREATE INDEX index_layers_projectid
  ON layers(project_id);

CREATE INDEX index_project_hashtag_projectid
  ON project_hashtag(project_id);

CREATE INDEX index_project_hashtag_hashtag_id
  ON project_hashtag(hashtag_id);

CREATE INDEX index_sessions_userid
  ON sessions(user_id);

CREATE INDEX index_account_userid
  ON account(user_id);

CREATE INDEX index_past_searches_userid
  ON past_searches(user_id);

CREATE INDEX index_likes_userid
  ON likes(user_id);

CREATE INDEX index_likes_songid
  ON likes(song_id);