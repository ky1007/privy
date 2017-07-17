## Privy
Privy: an app to for users to anonymously write and publish a private journal under a pseudonym. This app is inspired by Medium but encourages anonymity so writers can freely express themselves. [Link to Heroku][as]


## Minimum Viable Product
By the end of two weeks this app will, at a minimum, satisfy the following criteria with smooth, bug-free navigation, adequate seed data and sufficient CSS styling.

### App Functionality
- [ ] New account creation, login, and guest/demo login
- [ ] Stories
- [ ] Commenting on stories
- [ ] Follows and feed
- [ ] Likes

### Product Implementation
- [ ] A production README
- [ ] Hosting on Heroku


## Design Docs
* [View Wireframes][wireframes]
* [React Components][components]
* [API endpoints][api-endpoints]
* [DB schema][schema]
* [Sample State][sample-state]

[wireframes]: docs/wireframes
[components]: docs/component-hierarchy.md
[sample-state]: docs/sample-state.md
[api-endpoints]: docs/api-endpoints.md
[schema]: docs/schema.md


## Implementation Timeline

### Phase 1: Backend setup and Front End User Authentication (2 days)

**Objective:** Functioning rails project with front-end Authentication

### Phase 2: Journal Entry Model, API, and components (2 days)

**Objective:** Journal entries (posts) can be created, read, edited and destroyed through
the API.

### Phase 3: Comments (2 days)

**Objective:** Comments belong to Journals entries that can be created, read, edited and destroyed through the API.

### Phase 4: Follows (1 day)

**Objective:** Users can follow other users' journals and see a feed of their stories.

### Phase 5: Likes (1 day, W2 Th 6pm)

**Objective:** Allow users to like others' journal entries.

### Phase 6: - Extra day for bugs or new features (1 day, W2 F 6pm)

**Objective:** Day to catch up if behind or work on bonus features

### Bonus Features (TBD)
- [ ] Search notes by content
- [ ] Set reminders on notes
- [ ] Changelogs for Notes
- [ ] Multiple sessions
