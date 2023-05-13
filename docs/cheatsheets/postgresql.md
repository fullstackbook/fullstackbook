# PostgreSQL Cheat Sheet

## SQL

```sql
-- Create a table
CREATE TABLE table_name (
  column1 datatype1,
  column2 datatype2,
  column3 datatype3
);

-- Insert data into a table
INSERT INTO table_name (column1, column2, column3)
VALUES (value1, value2, value3);

-- Select all data from a table
SELECT * FROM table_name;

-- Select specific columns from a table
SELECT column1, column2 FROM table_name;

-- Select data from a table with a condition
SELECT * FROM table_name WHERE column1 = 'value';

-- Update data in a table
UPDATE table_name SET column1 = 'new_value' WHERE column2 = 'value';

-- Delete data from a table
DELETE FROM table_name WHERE column1 = 'value';

-- Join two tables
SELECT * FROM table1 JOIN table2 ON table1.column1 = table2.column2;

-- Group data in a table
SELECT column1, COUNT(*) FROM table_name GROUP BY column1;

-- Order data in a table
SELECT * FROM table_name ORDER BY column1 ASC;

-- Limit the number of rows returned
SELECT * FROM table_name LIMIT 10;

-- Create an index on a table
CREATE INDEX index_name ON table_name (column1);
```

## User Administration

```sql
-- Create a new user
CREATE USER username WITH PASSWORD 'password';

-- Grant privileges to a user
GRANT privilege ON object TO user;

-- Revoke privileges from a user
REVOKE privilege ON object FROM user;

-- Change a user's password
ALTER USER username WITH PASSWORD 'new_password';

-- Delete a user
DROP USER username;

-- List all users and their attributes
SELECT * FROM pg_user;

-- Grant a role to a user
GRANT role_name TO username;

-- Remove a role from a user
REVOKE role_name FROM username;

-- List all roles and their attributes
SELECT * FROM pg_roles;

-- Create a new role
CREATE ROLE role_name;

-- Grant privileges to a role
GRANT privilege ON object TO role_name;

-- Revoke privileges from a role
REVOKE privilege ON object FROM role_name;

-- Delete a role
DROP ROLE role_name;

-- Create a group role
CREATE ROLE group_role_name WITH ROLE role_name;

-- Add a user to a group role
GRANT group_role_name TO username;

-- Remove a user from a group role
REVOKE group_role_name FROM username;

-- List all objects owned by a user
SELECT * FROM pg_catalog.pg_class WHERE relowner = 'username';

-- Transfer ownership of an object to a user
ALTER TABLE table_name OWNER TO new_owner;

-- List all privileges for an object
SELECT grantee, privilege_type FROM information_schema.table_privileges WHERE table_name = 'table_name';

-- List all privileges for a user
SELECT * FROM information_schema.role_table_grants WHERE grantee = 'username';
```

## psql

```sql
-- Connect to a PostgreSQL server
psql -h hostname -p port -U username -d database_name

-- Connect to a PostgreSQL server using a Unix domain socket
psql -h /path/to/socket -U username -d database_name

-- Connect to a PostgreSQL server and run a single SQL command
psql -h hostname -p port -U username -d database_name -c "SQL command"

-- Execute a SQL script file
psql -h hostname -p port -U username -d database_name -f script_file.sql

-- Display help for psql commands
\?

-- List available databases
\l

-- Connect to a specific database
\c database_name

-- List available tables in the current database
\dt

-- Describe a table
\d table_name

-- List available functions in the current database
\df

-- Describe a function
\df+ function_name

-- Execute a SQL command and display results
SELECT * FROM table_name;

-- Display query output in an aligned format
\x auto

-- Display query output in a vertical format
\x on

-- Display query output in a unaligned format
\x off

-- Display query execution time
\timing on

-- Display psql output in a pager
\setenv PAGER less
\pset pager always

-- Change the psql prompt
\set PROMPT1 '%[%033[1;32m%]%n@%/%R%[%033[0m%]%# '

-- Display previous command(s)
\s

-- Edit the current query buffer
\edit

-- Save the current query buffer to a file
\o file_name

-- Execute a command from a file
\i file_name

-- Clear the screen
\! clear

-- Quit psql
\q


```

## Backup and Restore Data

```sh
-- Create a backup of a database to a file
pg_dump -Fc database_name > backup_file.dump

-- Create a backup of a specific table to a file
pg_dump -Fc -t table_name database_name > backup_file.dump

-- Restore a backup from a file
pg_restore -d database_name backup_file.dump

-- Restore a specific table from a backup file
pg_restore -t table_name -d database_name backup_file.dump

-- Restore a backup with custom options
pg_restore --dbname=database_name --clean --create backup_file.dump

-- Create a plain-text SQL script of a database
pg_dump -s database_name > backup_file.sql

-- Restore a plain-text SQL script to a database
psql -d database_name -f backup_file.sql

-- Dump a database to a compressed file
pg_dump -Z9 database_name > backup_file.sql.gz

-- Restore a compressed backup file
gunzip -c backup_file.sql.gz | psql -d database_name

-- Dump a database and exclude certain tables
pg_dump -Fc -T excluded_table_1 -T excluded_table_2 database_name > backup_file.dump

-- Dump a database with custom options
pg_dump --dbname=database_name --exclude-table-data=table_name --format=custom --file=backup_file.dump

-- Backup a database to a remote server
pg_dump -Fc database_name | ssh user@remote_host "cat > backup_file.dump"

-- Restore a database from a remote server
ssh user@remote_host "cat backup_file.dump" | pg_restore -d database_name

```