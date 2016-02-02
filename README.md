# Github authentication and Node
Example for implementing Github based authentication in Node.js

Shows the end-to-end process from creating the node application to adding authentication 

#First steps

If you've been wanting to try out Node.js for awhile, but haven't found a concise enough tutorial to walk you through a simple Node.js application, here's another one you can try. 

### Setup for OS X
Go to [https://nodejs.org/en/](https://nodejs.org/en/) and use the package installer, it makes everything much simplier compared to older options of having to download binary and unpack. The package installer also installs npm for you, which is the node package manager. 

If you run into errors, the best bet would be to search on Google for the error and see what options people have available to solve. For now this tutorial will only be for OS X, since that is what I am most comfortable with. In the future, Linux steps will be added. 

To check that everything is working correctly so far, try running the commands: 
```
node -v
npm -v
```
and make sure that the numbers correspond to the version that you downloaded. Node is still relatively new, so releases are quick and abundant and new versions come out like hot cakes.

Once node and npm have been installed correctly (yes, this is probably one of the harder parts), you can write your first Node.js code. 

## Hello World
Using your editor of choice, create a file called `helloworld.js` in your directory and put the follow code into it:

```
console.log("Hello World");
```

Save the file and run it with Node.js using:
```
node helloworld.js
```

Then you should see `Hello World` printed in your terminal, and that's the basic *Hello World* for Node.js

#Web Application
Now that the setup stuff is out of the way, it's time for the action you've been looking for. The real reason you're looking to use Node.js is so you can have Javascript executed within a web server. In Node.js, the application you want to build is actually the same as the server you want to build, so with this in mind the next step is to choose a framework that helps you with creating a server for a web application. 

## Express
One of the common choices for a Node.js web application framework is [expressjs.com](Express). One of the reasons why it is so popular is the `express-generator` tool that Express also offers. This tools creates a web application skeleton for you, meaning all the requires files and folders for a web application is created. [Install](http://expressjs.com/en/starter/generator.html) the tool with :
```
npm install express-generator -g
```

The `-g` installs the package on the local npm installation directory for system-wide usage. The p

To create an Express project and view it in the browser, run 
```
express
```

And now the project folder will be populated with a bunch of new files that will build the Express web app. The `package.json` file contains the list of project dependancies, which tells npm which packages to install for the project. So run the command:

```
npm install
```
This will read the JSON file and let npm know to install all those packages into the `node_modules` folder. 

The packages that should be in the dependencies are:

* [body-parser](https://www.npmjs.com/package/body-parser)
* [cookie-parser](https://www.npmjs.com/package/cookie-parser)
* [debug](https://www.npmjs.com/package/debug)
* [express](https://www.npmjs.com/package/express)
* [jade](https://www.npmjs.com/package/jade)
* [morgan](https://www.npmjs.com/package/morgan)
* [serve-favicon](https://www.npmjs.com/package/serve-favicon)

If all is going according to plan, you should have a barebones web app ready to be used, test it out by running:
```
npm start
```
The Node.js web server is located at [http://localhost:3000](http://localhost:3000). 

##Understanding Express
So now you should have the web app skeleton set up for Node.js, so the next step is to use the framework to make the web application. Currently the view that is rendered at [http://localhost:3000](http://localhost:3000) consists of the Node.js server from `app.js` and 3 files in the project folder: `routes/index.js`, `views/index.jade`, and `views/layout.jade`. It is here that Node.js with Express differs a bit from tradiational MVC framework. Routes in Express are similar to controllers, but not really because routes also have a bit of the model in them. 

##Express app.js
Looking into the `app.js` file, you can see that there is code already generated in there that tells Express where to look for routing files. For example, the `app.set` function tells the Express app where to look for views, and which engine to render the views with. In order to have the server point to the correct views, the routing for the application must also be set, this is done by: 
```
app.use('/', routes);
app.use('/users', users);
```
###`/routes/index.js`
Looking at the `/routes/index.js` file, you can see that inside is some Javascript that sets up a variable with Express functionality, and then assigning `router = Express.router()` method. What  does that Express router do? It is always good to check out [documentation](http://expressjs.com/en/4x/api.html#router) when you're working through understanding the functionality of the framework. 

So for the purposes of this framework, the router method creates an object that can be used for HTTP methods (get, put, post...). So the `router` variable is then used to GET / and pass the title, and render the response which is in `index.jade` 

###`/views/index.jade`
After Express routes the GET request, the response is rendered based on what is in `index.jade`. Looking into the file, you can see that there isn't much in there. 
