export default [
  {
    tag: ["all", "front", "noFrmwrk"],
    title: "wasm-circles",
    desc: "I created this project to learn webassembly with emscripten.",
    demo: "https://circle-webassembly.herokuapp.com/",
    repo: "https://github.com/emrejz/wasm-circles",
  },
  {
    tag: ["all", "front", "noFrmwrk"],
    title: "search-helper",
    desc:
      "I created this project for simplify search operation on list of objects by user's condition. I published on npm.",
    demo: "https://npmjs.com/package/search-helper",
    repo: "https://github.com/emrejz/search-helper",
  },
  {
    tag: ["all", "front", "react", "redux", "axios"],
    title: "movieAppReact",
    desc:
      "I used react in the front-end and used axios for http requests. I used redux for state management. I preferred materialUI as UI framework. Token saved in user's client local storage so user doesnt need to log in again if the session has not expired.",
    demo: "https://movie_react.surge.sh/",
    repo: "https://github.com/emrejz/movieAppReact",
  },
  {
    tag: [
      "all",
      "front",
      "angular",
      "bootstrap",
      "bootswatch",
      "alertfy",
      "angular2-jwt'",
    ],
    title: "movieAppAngular",
    desc:
      "I used angular in the front-end. I used bootstrap and bootswatch for my themes and components. I used alertifyjs for notifications and i used angular2-jwt to read the tokens in the front-end. Token saved in user's client local storage so user doesnt need to log in again if the session has not expired.",
    demo: "https://movie-ng-app.netlify.com/",
    repo: "https://github.com/emrejz/movieAppAngular",
  },
  {
    tag: ["all", "backEnd", "node", "jwt", "chai", "mocha", "mongo", "bcrypt"],
    title: "movieApiNode",
    desc:
      "I used node in the back-end. The user's password is encrypted with bcryptjs and saved in the mongodb database. I used jwt for session operations. I created tests with chai and mocha.",
    demo: "https://movie-api-with-nodejs.herokuapp.com/",
    repo: "https://github.com/emrejz/movie-api",
  },
  {
    tag: ["all", "front", "angular", "bootstrap"],
    title: "cinemaAppAngular",
    desc:
      "I used angular in the front-end. I used bootstrap as UI framework.I put apiKey parameter in http requests using HttpInterceptor. As you scroll, new movies are taken from the api and listed.",
    demo: "http://dpxn-movie-ng.surge.sh/",
    repo: "https://github.com/emrejz/depixenMovieNg",
  },
  {
    tag: ["all", "front", "vue", "bootstrap", "vue-router", "vuex", "axios"],
    title: "cinemaAppVue",
    desc:
      "I used vue in the front-end. I used bootstrap as UI framework. I did the routing with Vue - router. I used vuex for state management. I used axios for http requests.",
    demo: "http://movie-vue.surge.sh/",
    repo: "https://github.com/emrejz/cinemaAppVue",
  },
  {
    tag: [
      "all",
      "backEnd",
      "node",
      "socket",
      "passportjs",
      "express-session",
      "redis",
      "mongo",
    ],
    title: "chatApiNode",
    desc:
      "I used node in the back-end. User's nick and password are stored in mongo, Session and chat data are stored in redis. When the user logs in, they are authenticated by passportjs and express-session. I used socket for real time communication. Application cannot run if my free trials are finished.",
    demo: "http://server-for-chatapp.herokuapp.com",
    repo: "https://github.com/emrejz/chat-react/tree/master/server",
  },
  {
    tag: ["all", "front", "react", "socket", "redux", "metarial-ui"],
    title: "chatAppReact",
    desc:
      "I used react in the front-end. I used material ui as the UI framework. I used redux for state management. I used socket for real time communication When the user receives a message from other users in the same room, user is notified by the message sound. Application cannot run if my free trials are finished.",
    demo: "http://chatapp-react.surge.sh",
    repo: "https://github.com/emrejz/chat-react/tree/master/client",
  },
  {
    tag: ["all", "front", "angular", "socket", "bootstrap"],
    title: "chatAppAngular",
    desc:
      "I used angular in the front-end. I used bootstrap as the UI framework. I used socket for real time communication. Application cannot run if my free trials are finished.",
    demo: "http://chatapp-angular.surge.sh/",
    repo: "https://github.com/emrejz/chat-ng",
  },
  {
    tag: ["all", "front", "react", "apollo", "graphQL"],
    title: "graphQLRect",
    desc:
      "I used react in the front-end. I used apollo graphQL. I didnt use any UI framework. Token saved in user's client local storage so user doesnt need to log in again if the session has not expired.",
    demo: "http://easysnaps.surge.sh/",
    repo: "https://github.com/emrejz/easysnap/tree/master/client",
  },
  {
    tag: ["all", "backEnd", "node", "apollo", "graphQL"],
    title: "graphQLApi",
    desc:
      "I used node in the back-end. I used apollo graphQL. I used jwt for session operations. User's nick, password and snaps are stored in mongo. The user's password is encrypted with bcryptjs.",
    demo: "https://easysnaps.herokuapp.com/graphql",
    repo: "https://github.com/emrejz/easysnap/tree/master/server",
  },
  {
    tag: ["all", "front", "next", "styled-components"],
    title: "cinemaAppNext",
    desc:
      "I used next in the front-end. I developed using styled-components. I managed state with React hooks and context. The user can use the app even if he is offline.",
    demo: "https://cinemaappnextjs.emrejz.now.sh/",
    repo: "https://github.com/emrejz/cinemaAppNextjs",
  },
  {
    tag: ["all", "front", "noFrmwrk"],
    title: "depixenPrjct",
    desc:
      "I didnt use any framework in the front-end. I developed using css,html and js.",
    demo: "http://useless-look.surge.sh/",
    repo: "https://github.com/emrejz/depixenPrjct2",
  },
];
