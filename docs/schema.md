| USERS           |           |                           |
|-----------------|-----------|---------------------------|
| column name     | data type | details                   |
| id              | integer   | not null, primary key     |
| username        | string    | not null, indexed, unique |
| email           | string    | not null, indexed, unique |
| password_digest | string    | not null                  |
| session_token   | string    | not null, indexed, unique |
| biography       | text      | not null                  |
| image_url       | string    |                           |
| country     | string    |                           |
| age       | integer    |                           |
| race       | string    |                           |


| ENTRIES     |           |                       |
|-------------|-----------|-----------------------|
| column name | data type | details               |
| id          | integer   | not null, primary key |
| title       | string    | not null, unique      |
| general        | text      | not null              |
| gratitude        | text      |            |
| improvements        | text      |            |
| goal_id        | text      |            |
| writer_id   | integer   | not null, indexed     |
| image_url   | string    | not null              |


| COMMENTS     |           |                       |
|--------------|-----------|-----------------------|
| column name  | data type | details               |
| id           | integer   | not null, primary key |
| writer_id    | integer   | not null, indexed     |
| story_id     | integer   | not null, indexed     |
| body         | text      | not null              |


| GOALS     |           |                       |
|--------------|-----------|-----------------------|
| column name  | data type | details               |
| id           | integer   | not null, primary key |
| first        | string    |      |
| second        | string    |      |
| third        | string    |      |
| order        | integer    |      |
| done        | boolean    |      |


| LIKES       |           |                       |
|-------------|-----------|-----------------------|
| column name | data type | details               |
| id          | integer   | not null, primary key |
| user_id     | integer   | not null, indexed     |
| story_id    | integer   | not null, indexed     |



| FOLLOWS       |           |                       |
|---------------|-----------|-----------------------|
| column name   | data type | details               |
| id            | integer   | not null, primary key |
| follower_id   | integer   | not null, indexed     |
| followee_id   | integer   | not null, indexed     |
