# REACT GAMES - CHECKPOINT 2

## Disclaimer

The checkpoint is quite consequent, it's no big deal if you don't do everything before the deadline. Do your best, and most importantly HAVE FUN :smiley:

# The checkpoint itself :fire:

## :zero: Setup

Before starting anything technical, your first mission is to clone this project, then create a branch with your lastname and firstname like so : `lastname_firstname`

## :two: Step[2] - React

### Getting started :point_down:

The project has been bootstrapped using [react-starter-wcs](https://www.npmjs.com/package/react-starter-wcs).  
This is a lightweight alternative to create-react-app _(made with :heart: :coffee: by [Karnak19](https://github.com/Karnak19))_, with some configuration.

In the project directory, you can run different scripts:

- `npm run dev` : Runs the app in the development mode on port 3000

- `npm run build` : Builds the app for production to the `dist` folder.

- `npm run serve` : Runs your app in production mode. You **need** to build it before.

- `npm run lint` : This app came with basic ESLint config (Prettier + React), you can run a check every time using this script. :collision: BEWARE :collision: If you don't have Prettier installed in your Editor with format on save, you should run it with the next script

- `npm run prettier` : It runs Prettier on all your staged files. (only useful if you don't have Prettier installed in your editor)

___

- Further in this checkpoint, you will need `react-router-dom` but also `axios` (or fetch if you prefer), it is already installed ! :construction_worker:
- I also installed and setup `Tailwindcss` for you, if you are familiar with it, you can use it. But it is **totally optional** :raised_hand_with_fingers_splayed:

:warning: _(during this checkpoint, you need to use `.jsx` extension and use the keyword `function` to declare your component. Creating a component using arrow function `() => {}` will display an ESLint error)_ :warning:

___

**In this step, you will create a web-app using React, that display games from one of our API !**

_Please please, don't forget to make atomic commits with explicit messages_ :pray:

You can find the API documentation there :

- https://apis.wilders.dev/wild-games

If this one doesn't work, or is too slow, we also prepared some mirrors :

- https://wild-games.basile.vernouillet.dev/
- https://checkpoint2.wild-projects.duckdns.org/

### Starting point

- You can wipe all the boilerplate jsx code in `App.jsx`
- Then, create a `<Header />` component that display a cool welcome message.
- Pass a `name` prop to this component, to display your website name (_react game_ if you don't have any idea)

_commit_ :hand_over_mouth:

### Some list ?

- Your next mission is to display the full list of games.
- Start by creating two new components `<GameList />` and `<Game />`.
- In the GameList component, as his name said it, you will need to get the list from the API, and map it in your jsx. For each game you get from the API, display a `<Game />` component.
- Your `<Game />` component will need some props to display the game informations. There are plenty of informations you can use (_name, rating, images, ..._). Display them in the format of your choice !

_commit_ :hand_over_mouth:

### Filtering

- Now that you are displaying all games, your next mission is to add a filter on this list.
- Add a `button` to the `<GameList />` component, when you click on it, it will display only the games whose rating is above `4.5`. When clicking again on this button, the list should display all the games again.

_again, don't forget to commit_ :wink:

### Details page

You are going to use `react-router` and `react-router-dom`

- Refactor your code to implement a router, with two routes :
  - `"/"` will display your `<GameList />`
  - `"/games/:id"` will display the next component you are going to create
- Create a `<GameDetails />` component, and use it in your `/games/:id` route.
- Then, you can add a navigation link (or button) to your `<Game />` component that will redirect to the details page of this game.
- The `<GameDetails />` component will need to fetch data from the API and display detailed information about the current game (what you choose to display is up to you !)

_you know what to do, right ?_ :wink:

## :two: Quizz

- To answer the quiz go to [this application](https://wild-quiz-client.herokuapp.com/).
- Answer the questions in the Quiz Checkpoint 2 - JS - React.
- Once the quizz is completed, **copy the link provided by the application**.
- Create a Quizz.md file at the root of the project
- Stick the link you have just retrieved on it
- commit your file :wink:

---

### Congrats ! You did it ! :confetti_ball:

You really deserved a beer ! :beers: (or your favourite drink)

---

## Bonuses

If you have remaining time, here are some bonuses. As they are bonuses, they are **totally optional**, and you shouldn't do them if you haven't finished the previous steps.

### Removing a game

`<Game />` contains a `<button>` which allows you to remove a game from the list _(doesn't need to remove it in the API)_.

### Refactor your API calls

There is a really cool library called [react-query](https://react-query.tanstack.com/overview#enough-talk-show-me-some-code-already). You can try to refactor your API calls using this :wink:

### Use a CSS framework

Integrate the CSS framework of your choice in your React App. 
If you don't know which one to choose, we can recommand Tailwind.

You can start by looking at the documentation about [how to install it](https://tailwindcss.com/docs/installation).

**Be careful !** :warning: If you choose to start using `create-react-app`, you will need to install CRACO, but every steps [are explained here](https://tailwindcss.com/docs/guides/create-react-app).
