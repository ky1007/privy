# Privy 

[Privy][live-link] is a single page application that lets users publish an anonymous diary under a pseudonym.  The app has a full-stack implementation: frontend views are handled with React and Redux. The backend utilizes a Rails framework to render and send data from a Postgres database to the frontend.


## Features
  * secure account authentication
  * Users can follow and read other people’s diaries
  * Users can read through their old entries and post a reflection entry they’ve written. Other users can read an entry’s reflections, but they cannot write a reflection on entries they haven’t written. 

  ### Writing a post
  ![Privy entry form](docs/images/privy_entry_form.png)
  ![Privy entry index](docs/images/privy_entry_index.png)

Instead of creating a newreact To maintain DRY code, the index page renders different feeds. 

— link to design docs: dev README, schema, wireframes

— future features: 
* User profiles to show general demographic information about themselves
* Ability to search and read diaries from a general demographic, e.g. Korean men in their 40’s living in South Africa
* The ability to highlight and save specific snippets of text from other’s diaries and refer to them