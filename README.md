# Privy 
[Privy][live-link] is a single page, full-stack application that lets users publish an anonymous diary under a pseudonym. The application is implemented via an MVC architecture where Ruby on Rails acts as the Model and Controller and React is responsible for rendering the Views. The React frontend is also paired with a Redux flux architecture to manage state and ensure unidirectional data flow.

Privy is passion project born out of my own curiosity about how other people think and experience life, and out of a desire publish my own experiences for others to read.


## Features
  * Secure account login authentication and creation: passwords are hashed and salted via BCrypt on the backend, additional reinforced protection is provided on the frontend via protected routes in React.
  * Users can follow and read other people’s published diaries.
  * Users can save and bookmark diary entries to reference to later.
  * Users can post a reflection on an old entry they've written. (Other users can read an entry’s reflections, but they cannot write a reflection on entries they haven’t written.)

## Previews of Privy in action
### Browsing Entries
![Browsing Entries](docs/images/privy-browse.gif)

### Following Users
![Following Users](docs/images/privy-follow.gif)

### Writing a personal reflection
![Writing a personal reflection](docs/images/privy-reflection.gif)

### Deleting and Editing Diary Entries
![Editing and deleting diary entries](docs/images/privy-entry-options.gif)

 ### Login and Greeting page
  ![Privy login and greeting page](docs/images/privy-previews.png)

## Code Highlights
 ### Viewing posts
To maintain DRY code, the same React component was used to render three different index views: the personal feed (showing entries based on a user's followers), the others users' entries (all entries writen by one user), the uer's own entries.

This was made possible by checking the URL pathname and params passed from the router and dynamically fetching content based on those specific props. 
```js
  showEmptyActions() {
    const { pathname } = this.props;
    switch (pathname) {
      case '/feed':
        return (
          <span>
            <strong>Looks like you aren't following anyone yet.</strong><br />
            Find and explore people to follow on the <Link to="/everyone">Everyone page</Link>.
          </span>
        );
      case '/bookmarks':
        return (
          <span>
            <strong>Looks like you haven't bookmarked any entries yet.</strong><br />
                Find and explore diary entries to bookmark on the <Link to="/everyone">Everyone page</Link>.
          </span>
        );
      default:
        return (
        <span>
          <strong>Looks like you haven't written anything yet.</strong><br />
          <Link to="/new_entry">Write an diary entry</Link> and it will appear here.
        </span>
      );
    }
  }
``` 

 ### Viewing a post
 Utilizing SASS and its ability to create mixins also helped maintain DRY code for visual consistency and styling. This especially helped with writing one single style and ensuring that the style persisted for specific browser selectors for cross-browser compatibility.
```css
  @mixin form-placeholder {
    @include size(h3);
    color: $darker-gray;
  }
  .entry-form ::-webkit-input-placeholder {
    @include form-placeholder;
  }
  .entry-form :-moz-placeholder {
    @include form-placeholder;
  }
  .entry-form ::-moz-placeholder {
    @include form-placeholder;
  } 
  .entry-form :-ms-input-placeholder { 
    @include form-placeholder;
  }
```

## Project Design
Privy was designed and built in a two week period. View the original [proposal][dev-readme], which includes MVP features, an implementation timeline, and more extensive documentation.

## Future Implementations
  * Ability to search and read diaries from a general demographic, e.g. Italian women in their 40’s living in South Africa
  * The ability to highlight and save snippets of text users resonate with and like.
  * Adding unit, integration, and end-to-end tests

  [live-link]: http://wwww.privy.site/
  [dev-readme]: docs/README.md