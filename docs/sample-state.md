{
  currentUser: {
    id: 1,
    pseudonym: "sample_name",
    biography: "I come from afar",
    country: "",
    age: "",
    race: "",
    image_url:"",
    follows: boolean
  },
  userProfile: {
    id:
    pseudonym: "",
    biography: "",
    image_url: "",
    country: "",
    age: "",
    race: ""
  }
  errors: [],
  entries: {
    1: {
      id: 1,
      title: "Why sleep isn't fun anymore",
      general: "There aren't enough people.",
      goals_id: 1,
      gratitude: "I'm thankful for the luxury I have to just learn.",
      improvements: "I would focused more on caching.",
      image_url: "",
      writer: {
        pseudonym: "",
        biography: "",
        image_url: "",
      }
    },
    2: {
      id: 2,
      title: "A Wrinkle in Time",
      general: "I travel at the speed of light",
      goals_id: 1",
      gratitude: "I'm pretty ungrateful tho",
      improvements: "Wish I chose the squeaker for Breakfast instead.",
      image_url: "",
      writer: {
        pseudonym: "",
        biography: "",
        image_url: "",
      }
    }
  },
  goals: {
    1: {
      id: 1,
        first: "first goal!",
        second: "second goal!",
        third: "third goal!",
        order: 1,
        done: true
    }
    2: {
      id: 2,
        first: "first goal!",
        second: "second goal!",
        third: "third goal!",
        order: 2,
        done: true
    }
    3: {
      id: 3,
        first: "first goal!",
        second: "second goal!",
        third: "third goal!",
        order: 3,
        done: true
    }
  }
goal: {
  id: 1,
  first: "",
  second: "",
  third: "",
  order: 1,
  done: true
}
entry: {
    id: 1,
    title: "",
    general: "",
    goals_id: "",
    gratitude: "",
    improvements: "",
    image_url: ""
    writer {
      pseudonym: "",
      biography: "",
      image_url: "",
      country: "",
      age: "",
      race: "",
      followers: 0
    }
    comments: {
      1: {
        id: 1,
        body: "The best kind of comment",
        writer: {
          name: "",
          image_url: "",
        }
      },
      2: {
        id: 2,
        body: "I wouldn't wish this day on anyone.",
        writer: {
          name: "",
          image_url: "",
        }
      }
    }
  }
}
