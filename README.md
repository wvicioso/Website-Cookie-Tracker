# Instructions:

### To run the app use yarn or node:
`yarn && yarn start` <b>OR</b> `npm install && npm start`

<hr>
### Development Notes:

***Chrome, Safari, Firefox are tested. I was not able to test Internet Explorer since I only own a mac.

I wasn't if sure this requirement, "You should be able to provide a report on users and number of times they saw each color ball." meant there should be a backend. I decided to build out the app assuming this is meant to be a frontend application since cookies are almost exclusively used for frontends.

I was initially going to complete the project using html and vanilla JS. I quickly discovered Chrome prevents any cookie storage if HTTP isn't present. This meant that executing js from a `file://` path in chrome will cause all code that creates or manipulates cookies to be ignored. 

This was going to make it inconvenient to test in the chrome browser while developing so I decided to use React instead since it launches a local server with HTTP applied.

Redux was unnecessary so I did not use it. Instead, I created one smart component which exists at the parent level of the app and handles all state variables and  also handles any data manipulation. Nested in the app are modular dumb components used primarily for stylistic purposes. 
