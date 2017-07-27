```js
{
  session: {
    // The user that is signed in
    currentUser: {
      id: 1,
      username: "thisisausername",
      email: "this@isanemail.com",
      bio: "thisisabio",
      image_url: "https://heyhey.com/hey.jpg",
      age: 73,
      country: "United Kingdom",
      state: "thisisastate",
      race: "thisisarace",
    },
    // Any errors that need to be displayed
    errors: []
  },

  Users: {
    // All Users that match the search criteria
    allUsers: {
      1: {
        id: 1,
        username: "thisisausername",
        email: "this@isanemail.com",
        bio: "thisisabio",
        image_url: "https://heyhey.com/hey.jpg",
        age: 73,
        country: "United Kingdom",
        state: "thisisastate",
        race: "thisisarace",
        following: true,
      }
    },
    // Current user profile being viewed (only other users)
    current: {
      id: 1,
      username: "thisisausername",
      email: "this@isanemail.com",
      bio: "thisisabio",
      image_url: "https://heyhey.com/hey.jpg",
      age: 32,
      country: "United Kingdom",
      state: "thisisastate",
      race: "thisisarace",
      following: true,
    },
  },

  goals: {
    // All goals for current(Entry)
    all_goals: {
      1: {
        id: 1,
        body: "this is my goal",
        done: true,
        entry_id: 1
      }
    },
    // Current goal being viewed
    current: {
      id: 1,
      body: "this is my goal",
      done: tru,
      entry_id: 1
    }
  }

  reflections: {
    // All comments connected to current(Entry)
    allReflections: {
      1: {
        id: 1,
        body: "",
        entry_id: 1,
        writer_id: 1
      }
    },
    // Current comment being viewed
    reflections: {
      id: 1,
      body: "",
      entry_id: 1,
      writer_id: 1
    }
  }
}
```