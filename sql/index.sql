\c improvibe;

CREATE INDEX index_projects_genreid
  ON projects(genre);

CREATE INDEX index_projects_userid
  ON projects(user_id);

CREATE INDEX index_layers_projectid
  ON layers(project_id);

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