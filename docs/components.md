## Component Hierarchy

### AuthFormContainer

* AuthForm
* Errors

### EntryFeedContainer

* NavBar

* EntriesFeed
 * EntriesFeedItem

### FilterEntriesContainer

* FilterEntriesIndex
 * FilterEntriesIndexItem

### EntryContainer

* EntryNavBar

* EntryDetail
* AuthorDetail

* RandomEntries
 * RandomEntry

 * CommentInputForm
 * Errors
 * CommentFeed
   * CommentFeedItem

### EntryInputContainer

* InputForm
* Errors

* PublishDropdown

### UserProfileContainer

* UserDetail

* FollowsData

* EditForm
* Errors

### SearchContainer

* SearchFilters
* AutoSearchResults


| Routes       |                      |
|--------------|----------------------|
| path         | component            |
| /sign-in     | AuthFormContainer    |
| /sign-up     | AuthFormContainer    |
| /home        | HomeContainer        |
| /entries/:id | EntryContainer       |
| /new-entry   | EntryInputContainer  |
| /users/:id   | UserProfileContainer |
| /search      | SearchContainer      |
| /entries     | EntryFeedContainer   |
