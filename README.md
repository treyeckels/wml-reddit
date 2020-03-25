# Welcome to WML Reddit Subreddit App

## Walk Through

- This is a Progressive Web App, which can be installed on your device. It offers minimal offline support. It will alert the user if there is no network connection and will alert the user when the user comes back online. Future improvements would include storing the Reddit API calls into IndexDB and pulling from there via the ServiceWorker when the user is offline.

- The Landing page is a Subreddit community with information about the community in the right sidebar. Reddit API provides the description content as markdown (as well as regular text and HTML markup), so this uses a 3rd party Markdown component to translate the markdown to HTML. Featured on the Landing page are the latest posts. Some posts have tweet embeds, which are turned into Twitter tweets via a 3rd party TweetEmbed Component using the twitter id that is in the markup the Reddit API returns. Above the posts is a sorting bar that allows the user to sort the posts by Reddit's main sorting mechanisms. For desktop users there is a tooltip on each icon. Clicking the Read More takes the user to the Post page.

- The Post page displays the post as well as all the threaded comments that are provided by the API for that post. Some comments are rolled up into a More Button, which can be clicked to retrieve the rolled up comments in the thread. The Reddit API returns the more rolled up comments as a flattened list with a property denoting the parent comment. The Post page reconstructs the tree of comments so that the rolled up comments retain their hierarchy. The user name of the user who posted the comment or the post is linked to the user's profile page.

- The User page displays brief information about the user as well as the user's avatar. It also displays the latest comments the user has posted.

- The app can be reached at: https://wml-reddit.firebaseapp.com

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `yarn build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
