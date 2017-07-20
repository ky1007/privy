| USERS           |           |                           |
|-----------------|-----------|---------------------------|
| column name     | data type | details                   |
| id              | integer   | not null, primary key     |
| username        | string    | not null, indexed, unique |
| email           | string    | indexed, unique |
| password_digest | string    | not null                  |
| session_token   | string    | not null, indexed, unique |
| biography       | text      |              |
| image_url       | string    |                           |
| country     | string    |                           |
| age       | integer    |                           |
| race       | string    |                           |


| ENTRIES     |           |                       |
|-------------|-----------|-----------------------|
| column name | data type | details               |
| id          | integer   | not null, primary key |
| title       | string    |      |
| general        | text      | not null              |
| gratitude        | text      |            |
| improvements        | text      |            |
| goal_id        | integer      |    indexed        |
| writer_id   | integer   | not null, indexed     |
| image_url   | string    |              |
| public   | boolean    |    not null        |


| COMMENTS     |           |                       |
|--------------|-----------|-----------------------|
| column name  | data type | details               |
| id           | integer   | not null, primary key |
| writer_id    | integer   | not null, indexed     |
| entry_id     | integer   | not null, indexed     |
| body         | text      | not null              |


| GOALS     |           |                       |
|--------------|-----------|-----------------------|
| column name  | data type | details               |
| id           | integer   | not null, primary key |
| first        | string    |      |
| second        | string    |      |
| third        | string    |      |
| done        | boolean    |      |
| order        | integer    |      |


| LIKES       |           |                       |
|-------------|-----------|-----------------------|
| column name | data type | details               |
| id          | integer   | not null, primary key |
| user_id     | integer   | not null, indexed     |
| entry_id    | integer   | not null, indexed     |



| FOLLOWS       |           |                       |
|---------------|-----------|-----------------------|
| column name   | data type | details               |
| id            | integer   | not null, primary key |
| follower_id   | integer   | not null, indexed     |
| followee_id   | integer   | not null, indexed     |
