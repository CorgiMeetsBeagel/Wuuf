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