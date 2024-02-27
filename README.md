# Hack.Diversity Tech Dive Template

## Note From Gio 2/27/24
When you clone this repo, add a new file named `.env` to the api/ folder.
The ATLAS_URL code you need is in the team Slack channel.
After you've done that, run the commands to start the server, and then to start the client.
Please message me if you have any trouble.

## Getting Started

This skeleton contains two different applications -- a front end, or "client," created with "Create React App," and a back end, or "API," created with Express. 

In order to make both of them work together, you'll need to run both, but you can run just one or the other to start. As you begin working on this project, you'll first focus on the client, so you can more or less ignore the API portion of the code for now.

## API
In order to run the server, you'll run the following commands:

```bash
cd api/
npm i
npm start
```

You should then be able to visit `localhost:9000` in your browser and see the server running.

## Client
In order to run the client, you'll run the following commands:

```bash
cd client/
npm i
npm start
```

You should then be able to visit `localhost:3000` in your browser and see the client running. If you make changes in the `App.js` file, you should see them reflected.