![giphy-fun](https://i.imgur.com/wAgoirm.png)

Let's build a react giphy app!

Here is a [working version of the Giphy App](https://pl515.csb.app/)


## Setup

```npm create vite@latest react-api-lab -- --template react-ts```

change into the directory with `cd react-api-lab` and then run `npm install` and then `npm install axios`

then you can run our regular `docker-compose up --build` to start and stop the server. 


#### Your task is:

- Go to the Giphy docs [HERE](https://developers.giphy.com/docs/), _read_ them
- Create an account and get your Free API key.

- Diagram your App:
  - What components will you have?
  - Where would state "live"?
  - Where would you setup `useEffect`?
  - Where do you need to pass props?
  - Where do you need to make the API call?

#### 🚀 Completion looks like:

- Minimum of 3 components.
- A single gif should rendered when the page initially loads (ComponentDidMount)
- On Button click make another API call update state with the new Gif
- Render only a single gif at a time

#### Bonus - Add A Form

- Add a Form that allows the user to type in a search query for specific Giphy's

#### Bonus - Favorite A Giphy

- Allow the user to favorite a Giphy and toggle between the Random Giphy and their Favorite List
