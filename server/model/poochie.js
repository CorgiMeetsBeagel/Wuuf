const Database = require('better-sqlite3');
const db = new Database('./server/model/dev.db', { verbose: console.log });
db.pragma('journal_mode = WAL');

// const creationSql =
//   'CREATE TABLE IF NOT EXISTS "Pooch" ( "id" TEXT NOT NULL PRIMARY KEY, "userName" TEXT NOT NULL, "name" TEXT NOT NULL, "breed" TEXT, "size" TEXT, "age" INTEGER, "gender" TEXT NOT NULL, "CreatedOn" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP, "DeletedOn" DATETIME); CREATE TABLE IF NOT EXISTS "swipe" ( "id" TEXT NOT NULL PRIMARY KEY, "swipedRight" BOOLEAN NOT NULL, "CreatedOn" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP, "poochId" TEXT NOT NULL, "swipedId" TEXT NOT NULL, CONSTRAINT "swipe_poochId_fkey" FOREIGN KEY ("poochId") REFERENCES "Pooch" ("id") ON DELETE RESTRICT ON UPDATE CASCADE, CONSTRAINT "swipe_swipedId_fkey" FOREIGN KEY ("swipedId") REFERENCES "Pooch" ("id") ON DELETE RESTRICT ON UPDATE CASCADE); CREATE UNIQUE INDEX "swipe_poochId_key" ON "swipe"("poochId"); CREATE UNIQUE INDEX "swipe_swipedId_key" ON "swipe"("swipedId");';
const poochCretionSql =
  'CREATE TABLE IF NOT EXISTS "Pooch" ( "id" TEXT NOT NULL PRIMARY KEY, "userName" TEXT NOT NULL, "name" TEXT NOT NULL, "breed" TEXT, "size" TEXT, "age" INTEGER, "gender" TEXT NOT NULL, "CreatedOn" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP, "DeletedOn" DATETIME);';

const swipeCretionSql =
  'CREATE TABLE IF NOT EXISTS "swipe" ( "id" TEXT NOT NULL PRIMARY KEY, "swipedRight" BOOLEAN NOT NULL, "CreatedOn" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP, "poochId" TEXT NOT NULL, "swipedId" TEXT NOT NULL, CONSTRAINT "swipe_poochId_fkey" FOREIGN KEY ("poochId") REFERENCES "Pooch" ("id") ON DELETE RESTRICT ON UPDATE CASCADE, CONSTRAINT "swipe_swipedId_fkey" FOREIGN KEY ("swipedId") REFERENCES "Pooch" ("id") ON DELETE RESTRICT ON UPDATE CASCADE); CREATE UNIQUE INDEX "swipe_poochId_key" ON "swipe"("poochId"); CREATE UNIQUE INDEX "swipe_swipedId_key" ON "swipe"("swipedId");';
    

const result = db.transaction((tx) => {
     
    db.prepare(poochCretionSql).run();
    db.prepare(swipeCretionSql).run();
    tx.commit();
   }) 

module.exports = db;
