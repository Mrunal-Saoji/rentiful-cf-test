-- Migration number: 0001 	 2024-05-23T14:06:36.939Z
DROP TABLE if EXISTS rentiful;
CREATE TABLE rentiful (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    log TEXT
);