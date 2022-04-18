# Project Random Users with REACT

This project was made with REACT.

## Available Scripts

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

## 📚 About the Project: 
  This project is about listing a number of users in the page.
  The you can also add users to the list.
  
## 📷 Screenshots
![image](https://user-images.githubusercontent.com/88672593/163672297-a7c39b33-875e-44b6-8212-9af40eab195c.png)


### `App.js`

The App.js render UserList component. 

### `UserList.js`

  - Contain four main parts. The Navbar, the list of Users, the Loading spinner and a Button.
  - The list of Users render another component User for each user.
  - When the aplication runs for the first time, it will run loadUser() function that add to list the first 10 users.
  - The Loading spinner is fire when the use try to add more users to the list.
  - The Button fires a function getUsers() that will add more users to the list
