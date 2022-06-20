# Rick & Morty Challenge

## Requirements

The project is divided in two parts, the client and the backend.

### Client

The client is developed in React and Redux. I wanted to have a smiliar style than the 'The Rick and Morty API' page. But adding extra styles like the possibility to add the character as favorite stored in Redux when the user clicks to the star when accessing a detailed character page. For the testing I used Jest and React Testing Library

### Architecture

```
/client
    ├── /assets        // images and svg files used in the application
    ├── /components    // generic components with its styles and test suites
    ├── /redux         // Store configuration and character reducer with react tool kit
    ├── /views         // component that do requets to the API
    ├── App.js         // routes and title defined
    ├── App.css
    ├── App.test.js
    └── index.js       // entry point for the app, Provider for redux store
```

All requests from the client are directly to the Express server and the routing is made by React router dom v6. 

## General
We need a fancy application, with backend and frontend, which consume the public API of
Rick & Morty: https://rickandmortyapi.com. This API should be consumed from your backend
application, not directly from the frontend.

We need these functionalities:

• Login
The users need to be authenticated to consume the application. The auth have to keep
the state between reloads.

• List all character’s view
An indicator to know if a character is in fav list.

• Detail character’s view
A button to add the character to a fav list, in case the character is in fav list it will be
removed from fav list.

• 404 page

## Rules

• The frontend will be made in React with Hooks and Redux. Feel free if you want to add
more JS libraries but if you do that, please, tell us in the Readme.md file why did you
choose them. Design is free.

• The backend will be made in Express. Feel free if you want to add more JS libraries but
if you do that, please, tell us in the Readme.md file why did you choose them.

• Please, don’t use styles libraries like Bootstrap or Material. We need to know your skills
and we assume the application won't be a stellar designed app.

• Make focus on quality. We won’t care a lot if you don't finish all points, but we will
care a lot the quality of what you created.

• The user information for login should be stored in a DB. Feel free to choose the DB you
consider.

• When a user saves characer in fav list it should be reflected on DB. Feel free to choose the
DB you consider.

• The application must be delivered in a repo. If you want to keep it in secret just create a
fake account in GitHub.

## Extra points (optional)
These extra points are not mandatory. If you have time and desire go ahead!
• Add test. Feel free to decide how and where.
• Add a register page for new users.
• Add backend pagination
• Preload images and add a loader
• Take a beer, you worked a lot!
