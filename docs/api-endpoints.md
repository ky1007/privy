# API Endpoints

## HTML API

### Root
  * GET /

## JSON API

### Users
  * POST /api/users

### Session
  * POST /api/session
  * DELETE /api/session

### Journal Entries
  * GET /api/entries/
  * GET /api/entries/:id
  * POST /api/entries
  * PATCH /api/entries/:id
  * DELETE /api/entries/:id

### Goals
  * GET /api/entries/goals/
  * GET /api/entries/goals/:id
  * POST /api/entries/goals/
  * PATCH /api/entries/goals/:id
  * DELETE /api/entries/goals/:id

### Comments
  * POST /api/stories/:story_id/comments
  * PATCH /api/comments/:id
  * DELETE /api/comments/:id

### Likes
  * POST /api/likes/
  * DELETE /api/likes/:user_id

### Follows
  * POST /api/follows/
  * DELETE /api/follows/:follower_id
