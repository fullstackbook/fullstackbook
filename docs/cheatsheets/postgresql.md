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

## Administration

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

-- Create a new schema
CREATE SCHEMA schema_name;

-- Grant privileges to a schema
GRANT privilege ON schema schema_name TO user;

-- Revoke privileges from a schema
REVOKE privilege ON schema schema_name FROM user;

-- Show all users and their attributes
\du

-- Show all schemas in the current database
\dn

-- Show all tables in a schema
\dt schema_name.*

-- Show all indexes on a table
\di table_name

-- Show all triggers on a table
\dtr table_name

-- Show all foreign keys on a table
\dT+ table_name

-- Show database size and other information
SELECT pg_size_pretty(pg_database_size('database_name'));

-- Show current PostgreSQL configuration settings
SHOW ALL;

-- Reload the configuration files without restarting PostgreSQL
SELECT pg_reload_conf();

-- Start/stop/restart PostgreSQL service
sudo systemctl start/stop/restart postgresql

-- Backup a database
pg_dump database_name > backup_file.sql

-- Restore a database
psql -f backup_file.sql database_name

-- Vacuum a table
VACUUM table_name;

-- Analyze a table
ANALYZE table_name;

-- Show autovacuum settings for a table
SELECT relname, autovacuum_enabled, autovacuum_vacuum_scale_factor, autovacuum_analyze_scale_factor
FROM pg_stat_all_tables WHERE relname = 'table_name';

-- Show a list of all running queries
SELECT * FROM pg_stat_activity;

```