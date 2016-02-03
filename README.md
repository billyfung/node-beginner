# Github authentication and Node
Example for implementing Github based authentication in Node.js

Shows the end-to-end process from creating the node application to adding authentication 

#First steps

If you've been wanting to try out Node.js for awhile, but haven't found a concise enough tutorial to walk you through a simple Node.js application, here's another one you can try. The tutorial will hopefully walk you through setting up a Node.js app where users can sign up or log in through Github. 

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

![express viewexpress](/public/images/express-screen.png)

##Understanding Express
So now you should have the web app skeleton set up for Node.js, so the next step is to use the framework to make the web application. Currently the view that is rendered at [http://localhost:3000](http://localhost:3000) consists of the Node.js server from `app.js` and 3 files in the project folder: `routes/index.js`, `views/index.jade`, and `views/layout.jade`. It is here that Node.js with Express differs a bit from tradiational MVC framework. Routes in Express are similar to controllers, but not really because routes also have a bit of the model in them. 

##Express app.js
Looking into the `app.js` file, you can see that there is code already generated in there that tells Express where to look for routing files. For example, the `app.set` function tells the Express app where to look for views, and which engine to render the views with. In order to have the server point to the correct views, the routing for the application must also be set, this is done by: 
```
app.use('/', routes);
app.use('/users', users);
```
####*`/routes/index.js`*
Looking at the `/routes/index.js` file, you can see that inside is some Javascript that sets up a variable with Express functionality, and then assigning `router = Express.router()` method. What  does that Express router do? It is always good to check out [documentation](http://expressjs.com/en/4x/api.html#router) when you're working through understanding the functionality of the framework. 

So for the purposes of this framework, the router method creates an object that can be used for HTTP methods (get, put, post...). So the `router` variable is then used to GET / and pass the title, and render the response which is in `index.jade` 

####*`/views/index.jade`*
After Express routes the GET request, the response is rendered based on what is in `index.jade`. Looking into the file, you can see that the page layout is set up in there, with the stylesheet being chosen. So it is within here that you can use a different ui framework, like [Bootstrap](http://getbootstrap.com) or [Semantic UI](http://semantic-ui.com). 

##Changing the front end
Now you know most of the basic information of what files do what within Express, and the general workflow, the next step is to design the front end. You could also do the backend first as well, no strict rules to follow here. 

####*`layout.jade`*
To use [Semantic UI](http://semantic-ui.com), you have to specify the stylesheet source within `layout.jade`. Since this isn't going to be a very complex app, it is reasonable to use the online source. Go into `layout.jade` and put:
```
link(rel='stylesheet', href='//cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.1.8/semantic.min.css')
script(src="//ajax.googleapis.com/ajax/libs/jquery/2.2.0/jquery.min.js")
script(src="//cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.1.8/semantic.min.js")
```

This will now allow you to use Semantic UI within your `index.jade`. So far there really hasn't been much said about the file template language, but it's clearly a bit different from normal HTML. 

[Jade](http://jade-lang.com) is a templating engine that relies heavily on whitespace for writing HTML, so instead of `<head>` you can just write `head` and it will be converted accordingly. It is very important that you use spaces instead of tabs, since that is a fundamental feature of Jade. Tags are automatically closed for you, and in general everything looks a bit cleaner. I won't go into a ton of detail here, the [documentation](http://jade-lang.com/reference) is a good place to learn most of the features of Jade.

####*`index.jade`*
Now that the layout is set up, you can use Semantic UI within `index.jade` to define the contents of the block. To create simple page following the [login page example](http://semantic-ui.com/examples/login.html) make your file look like:
```
extends layout

block content
  .ui.middle.aligned.center.aligned.grid
    .column
        h2.ui.teal.header
            .content Log-in to your account
        form.ui.large.form
            .ui.stacked.segment
                .field
                    .ui.left.input
                        input(type="text", name="email", placeholder="E-mail address")
                .field
                    .ui.left.input
                        input(type="password",  name="password", placeholder="Password")
                .ui.fluid.large.teal.submit.button Login  
            .ui.error.message
        .ui.message New to us? 
            a(href='#') Sign up 
```
Now when you run `npm start` and view `http://localhost:3000` you should see some resemblance of a login page. 

![without css image](/public/images/semantic-nocss.png)

Not quite there yet, some CSS touchups is needed to finalize the look. The `layout.jade` file has a reference to `/stylesheets/style.css` so it is inside there that changes to CSS can be applied. Add this code into the file to clean up the look:
```
body {
      background-color: #DADADA;
    }
body > .grid {
      height: 100%;
    }
.image {
      margin-top: -100px;
    }
.column {
      max-width: 450px;
    }
```
There you have it, a simple login page done. The next step will be to make the sign in page do something. 

