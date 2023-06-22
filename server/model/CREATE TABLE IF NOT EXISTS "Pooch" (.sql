  CREATE TABLE IF NOT EXISTS "Pooch" ( 
    "id" TEXT NOT NULL PRIMARY KEY, 
    "userName" TEXT NOT NULL, 
    "picture" TEXT, "name" TEXT NOT NULL, 
    "breed" TEXT, "size" TEXT, 
    "age" INTEGER, 
    "gender" TEXT NOT NULL, 
    "CreatedOn" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP, "DeletedOn" DATETIME);';


  angelo
  511b60ba-9c3b-4ddb-97b7-46bf9412a5b7

  pippo
  96407b80-460f-47bc-9765-324b93270e63

  ciuccio
  537986d9-0b48-43ac-af97-a2373d718345


  Select * from Pooch as p
  where p.id not in (select poochid from swipe);



  Insert into swipe values
  ('angelo', '96407b80-460f-47bc-9765-324b93270e63'),
  ('pippo', '96407b80-460f-47bc-9765-324b93270e63'),
  ('ciuccio', '96407b80-460f-47bc-9765-324b93270e63');



INSERT INTO swipe (
  id,
  userName,name,breed,size,age,gender) VALUES (?, ?,?, ?, ?, ?, ?) RETURNING *;`)


  {
  login: 'angedell',
  id: 24559997,
  node_id: 'MDQ6VXNlcjI0NTU5OTk3',
  avatar_url: 'https://avatars.githubusercontent.com/u/24559997?v=4',
  gravatar_id: '',
  url: 'https://api.github.com/users/angedell',
  html_url: 'https://github.com/angedell',
  followers_url: 'https://api.github.com/users/angedell/followers',
  following_url: 'https://api.github.com/users/angedell/following{/other_user}',
  gists_url: 'https://api.github.com/users/angedell/gists{/gist_id}',
  starred_url: 'https://api.github.com/users/angedell/starred{/owner}{/repo}',
  subscriptions_url: 'https://api.github.com/users/angedell/subscriptions',
  organizations_url: 'https://api.github.com/users/angedell/orgs',
  repos_url: 'https://api.github.com/users/angedell/repos',
  events_url: 'https://api.github.com/users/angedell/events{/privacy}',
  received_events_url: 'https://api.github.com/users/angedell/received_events',
  type: 'User',
  site_admin: false,
  name: 'angedell',
  company: null,
  blog: '',
  location: 'NYC',
  email: null,
  hireable: null,
  bio: null,
  twitter_username: null,
  public_repos: 3,
  public_gists: 0,
  followers: 0,
  following: 3,
  created_at: '2016-12-14T04:58:22Z',
  updated_at: '2023-06-22T01:28:53Z'
}