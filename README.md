# Angular Meowfacts App
### Simple web application builed with Angular. It was created as a recruitment exercise.

## Features
- Mocked user authentication: Users can log in with any chosen username, which is then stored in a global service using an Angular Signal. Upon logout, the username in the signal is reset to null.
- Route protection: Application routes are safeguarded by two distinct guards, controlling access based on the user's login status.
- Main page and data fetching: The main page allows users to fetch random cat facts with a click. Each fetched fact is then displayed on a card.
- Duplicate filtering: A simple mechanism is in place to check for and filter out any duplicate facts, ensuring uniqueness within the displayed list.

## Technologies
- [Angular version 18](https://angular.dev/)
- [RxJS](https://rxjs.dev/)
- [Angular Materials](https://material.angular.dev/)

## Deployment
- [Meowfacts](https://meowfacts-one.vercel.app/)
