# Faces detection website.
## Description:
This is a website that recognize multiple faces via a png url ([example](https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.is.fi%2Fviihde%2Fart-2000008395912.html&psig=AOvVaw342EiO-mqnzyxDra62jcW-&ust=1641739520678000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCIj8pr6yovUCFQAAAAAdAAAAABAD)). It has Log in feature (run on PostgreSQL database) to store user entries. The face detection model is from [Clarifai][clarifai].</br>
## How to use:
1. Clone this repo
2. Run `npm install`
3. Run `npm update`
4. Set up the database as in <em>react-api/server.js</em>
5. Register to [Clarifai][clarifai] to have API key
6. Enter API key into <em>react-api/controllers/image.js</em>
7. Run `npm start` in <em>react-api/</em>
8. Run `npm start` in <em>react-app/</em>

## Notes:
- The model id in <em>react-api/controllers/image.js</em> may change due to Clarifai so you need to read Clarifai documentation to change it.

## Upcoming features:
### Goal: more secure, scalable, overall features, easier to download, understand, fix the code.
- Convert into Typescript.
- Sessions management by using JWT storing in Redis.
- Set up Docker to run server and database easier.
- Have CI/CD process by using CircleCI.
- Make badges for user using AWS lambda.
- Implement remote server by Docker

[clarifai]: (https://www.clarifai.com/models/ai-face-detection)
