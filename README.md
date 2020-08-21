# UTCS Home Page

Personal website to display professional information. Visit: [cs.utexas.edu/~danielf](https://cs.utexas.edu/~danielf)

## Setup

1- Clone this repo <br />
2- Run `npm install` <br />
3- Add the environment variables to a .env file

#### Required Environment Variables:
```
REACT_APP_FIREBASE_URL=https://<app_name>.firebaseio.com
REACT_APP_PUBLIC_ID=<your_public_id>
REACT_APP_GITHUB_TOKEN=<your_github_personal_token>
```

You need to create a [Github Personal Token](https://github.com/settings/tokens). <br />
<br />
Contact to me to obtain a firebase url and and public key to use my Firebase backend. You can also create your own firebase backend.<br />
<br />

<strong>WARNING</strong><br />
This token can be used to access your account. Be sure to just give the permissions needed. <br />
This app only uses the following permissions:
```
read:user
read:orgs
```

read:orgs is optional. If permission is given, the app will display your organizations, as well as those orgs' public repos.

### Deployment

Run `npm run-script build` to create an optimized production build. <br />
You can serve the app using any static server. <br />

#### Deploying to UTCS public_html

Make sure you export required environment variables:
```
export REACT_APP_FIREBASE_URL=https://<app_name>.firebaseio.com
export REACT_APP_PUBLIC_ID=<your_public_id>
export REACT_APP_GITHUB_TOKEN=<your_github_personal_token>
```
Run `make deploy` <br />

<strong>The make deploy command will sync the build folder with your ~/public_html, DELETING EVERYTHING that does not belong to the React App</strong> <br />
Change the make deploy command to avoid this if needed. This command will also give 755 permissions recursively to public_html.
