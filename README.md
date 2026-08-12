# React Giphy Lab

#### About

Let's build a React Giphy app. Here is a [working version of the Giphy App](https://pl515.csb.app/) to give you a sense of what you're building toward.

#### Setup

Open your terminal application and navigate to your `~/code/ga/labs` directory:

```bash
cd ~/code/ga/labs
```

Clone the `react-api-lab` repo and `cd` into it:

```bash
git clone <repo-url> react-api-lab
cd react-api-lab
```

Create a new Vite project inside the cloned repo:

```bash
npm create vite@latest . -- --template react-ts
```

If prompted about the directory not being empty, choose to keep your existing files.

Install the necessary dependencies:

```bash
npm install
npm install axios
```

Start the dev server:

```bash
npm run dev
```

#### Your Task

Go to the [Giphy docs](https://developers.giphy.com/docs/) and read them.

Create an account and get your free API key.

Diagram your app before you start coding. What components will you have? Where would state live? Where would you set up `useEffect`? Where do you need to pass props? Where do you need to make the API call?

#### Completion Looks Like

- A minimum of three components.
- A single gif renders when the page initially loads (this is your `ComponentDidMount` equivalent).
- Clicking a button makes another API call and updates state with the new gif.
- Only a single gif renders at a time.

#### Bonus: Add a Form

Add a form that allows the user to type in a search query for specific gifs.

#### Bonus: Favorite a Gif

Allow the user to favorite a gif and toggle between the random gif view and their favorites list.