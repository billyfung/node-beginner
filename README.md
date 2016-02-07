# Node.js Express application with GitHub authentication
##Quickstart
To grab all the files locally:
```
$ git clone https://github.com/billyfung/node-beginner.git
$ cd node-beginner
$ npm install
```
Obtain the GitHub CLIENT_ID and CLIENT_SECRET from the GitHub developer settings and run:

```
$ CLIENT_ID=__GITHUB_CLIENT_ID__ CLIENT_SECRET=__GITHUB_CLIENT_SECRET npm start
```

Open browser to [http://localhost:3000](http://localhost:3000) to see the application.

![login](/public/images/login.png)

#Overview
Set up a basic login page homepage with GitHub authentication via `passport-github`, no database integration, just GitHub authentication, and display the information from GitHub profile.

##Detailed Introduction

If you've been wanting to try out Node.js for awhile, but haven't found a concise enough tutorial to walk you through a simple Node.js application, here's another one you can try. The tutorial will hopefully walk you through setting up a Node.js app where users can sign up or log in through GitHub. 

### Setup for OS X
Go to [https://nodejs.org/en/](https://nodejs.org/en/) and use the package installer, it makes everything much simplier compared to older options of having to download binary and unpack. The package installer also installs npm for you, which is the *n*ode *p*ackage *m*anager. 

If you run into errors, the best bet would be to search on Google for the error and see what options people have available to solve. For now this tutorial will only be for OS X.

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
Now that the setup stuff is out of the way, it's time for the action you've been looking for. The real reason you're looking to use Node.js is so you can have Javascript executed within a web server. In Node.js, the application you want to build is actually the same as the server you build, so with this in mind the next step is to choose a framework that helps you with creating a server for a web application. 

## Express
One of the common choices for a Node.js web application framework is [Express](http://expressjs.com). `express-generator` is a tool that creates a web application skeleton for you, meaning all the requires files and folders for a web application is created. [Install](http://expressjs.com/en/starter/generator.html) the tool with :
```
npm install express-generator -g
```

The `-g` installs the package on the local npm installation directory for system-wide usage. 

To create an Express project run:
```
express
```

And now the project folder will be populated with a bunch of new files that will build the Express web app. The `package.json` file contains the list of project dependancies, which tells npm which packages to install for the project. So run the command:

```
npm install
```
This will read the JSON file and let npm know to install all those packages into the `node_modules` folder, with the version specified. This is useful when you want to try a different node project on your computer, but the module versions are all different. 

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

Another important part of Express is [middleware](http://expressjs.com/en/guide/writing-middleware.html), depending on what framework you're used to already, it might look a bit familiar. If not, middleware is essentially a means to manipulate request and response objects. This is a very powerful tool, and used very often.  

##Express app.js
Looking into the `app.js` file, you can see that there is code already generated in there that tells Express where to look for routing files. For example, the `app.set` declaration tells the Express app where to look for views, and which engine to render the views with. In order to have the server point to the correct views, the routing for the application must also be set, this is done by: 
```
app.use('/', routes);
app.use('/users', users);
```
####*`/routes/index.js`*
Looking at the `/routes/index.js` file, you can see that inside is some Javascript that sets up a variable with Express functionality, and then assigning `router = Express.router()` method. What  does that Express router do? It is always good to check out [documentation](http://expressjs.com/en/4x/api.html#router) when you're working through understanding the functionality of the framework. 

So for the purposes of this framework, the router method creates an object that can be used for HTTP methods (get, put, post...). So the `router` variable is then used to GET / and pass the title, and render the response which is in `index.jade`. A valid substitution would be to use `app.get('/', routes)`, for the purposes when you know that it will be a GET. The `app.use` command is more general and will allow all HTTP verbs through. 

####*`/views/index.jade`*
After Express routes the GET request, the response is rendered based on what is in `index.jade`. Looking into the file, you can see that the page layout is set up in there, with the stylesheet being chosen. So it is within here that you can use a different UI framework, like [Bootstrap](http://getbootstrap.com) or [Semantic UI](http://semantic-ui.com). 

##Changing the front end
Now you know most of the basic information of what files do what within Express, and the general workflow, the next step is to design the front end. You could also do the backend first as well, no strict rules to follow here.

###Using Semantic UI
####*`layout.jade`*
To use [Semantic UI](http://semantic-ui.com), you have to specify the stylesheet source within `layout.jade`. Since this isn't going to be a very complex app, it is reasonable to use the online source. Go into `layout.jade` and put:
```
link(rel='stylesheet', href='//cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.1.8/semantic.min.css')
script(src="//ajax.googleapis.com/ajax/libs/jquery/2.2.0/jquery.min.js")
script(src="//cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.1.8/semantic.min.js")
```

This will now allow you to use Semantic UI within your `index.jade`. So far there really hasn't been much said about the file template language, but it's clearly a bit different from normal HTML. 

[Jade](http://jade-lang.com) is a templating engine that relies heavily on whitespace for writing HTML, so instead of `<head>` you can write `head` and it will be converted accordingly. Tags are automatically closed for you, and in general everything looks a bit cleaner. The [documentation](http://jade-lang.com/reference) is a good place to learn most of the features of Jade.

####*`index.jade`*
Now that the layout is set up, you can use Semantic UI within `index.jade` to define the contents of the block. To create simple page following the [login page example](http://semantic-ui.com/examples/login.html) make your file look like:
```
extends layout

block content
  .ui.middle.aligned.center.aligned.grid
    .column
        h2.ui.teal.header
            .content Log-in to your account
        form.ui.large.form(method='POST')
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
Now when you run `npm start` and view [http://localhost:3000](http://localhost:3000) you should see some resemblance of a login page. It is noteworthy that the form has `method='POST'` in order to send the data to the Node.js server. 

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

In order to set restrictions on the text entered into the email and password boxes, you will need to set up a function to check. 
There you have it, a simple login page done. The next step will be to make the sign in page do something. To do this, you can write a javascript function, and place the file `main.js` within `/public/javascripts`:
```
$(document)
    .ready(function() {
      $('.ui.form')
        .form({
          fields: {
            email: {
              identifier  : 'email',
              rules: [
                {
                  type   : 'empty',
                  prompt : 'Please enter your e-mail'
                },
                {
                  type   : 'email',
                  prompt : 'Please enter a valid e-mail'
                }
              ]
            },
            password: {
              identifier  : 'password',
              rules: [
                {
                  type   : 'empty',
                  prompt : 'Please enter your password'
                },
                {
                  type   : 'length[6]',
                  prompt : 'Your password must be at least 6 characters'
                }
              ]
            }
          }
        })
      ;
    })
  ;
```
Don't forget to reference the script within `layout.jade` otherwise it won't be used for the login page. 

```
script(src='/javascripts/main.js')
```

##GitHub authentication
Now that the login page is all set up, the next step is to add the GitHub authentication to the application. The go-to authentication middleware for Node.js is [Passport](http://passportjs.org), which has a npm package called `passport-github` that uses the OAuth 2.0 API for GitHub authentication. To use the package for your Node.js application run:
```
npm install --save passport-github passport express-session 
```

`express-session` helps to protect the app from cookie exploits, and it also stores the session data on the server by saving the session ID.

Now with that installed, to make sure of the strategy, the application must be configured properly for it. The general outline of how the Passport authentication will work is that the developer will generate keys that will allow access to specific parts of user information for login. The authentication request is passed from the GitHub API to Passport for authentication using the strategy. In order to obtain the keys, you will need to create a GitHub developer application and get the `CLIENT_ID` and `CLIENT_SECRET`. 

![github dev settings](/public/images/github-auth.png)

When a user wants to use GitHub to authenticate, they will be asked to authorize the application, and then once that is done, they will be redirected back to the web app. The information from authentication is then stored within the session, which will ensure that the `req` info will be redirected to the pages accordingly. 

The workflow will be to have the user login with GitHub, authorize the application, and then display the information showing that the user data has been obtained. 

###Passport configuration
####*`app.js`*
After installing the two packages, you will need to add them into the module dependencies, along with `express-session` to manage the session:
```
var session = require('express-session')
var passport = require('passport')
var GitHubStrategy = require('passport-github').Strategy;
```

The GitHub authentication strategy is then used along with the application client ID and secret in the Node.js app. Configure the strategy after the Express app is initialized: 
```
passport.use(new GitHubStrategy({
    clientID: GITHUB_CLIENT_ID,
    clientSecret: GITHUB_CLIENT_SECRET,
    callbackURL: "/auth/github/callback"
  },
  function(accessToken, refreshToken, profile, cb) {
      return cb(null, user);
  }
));
```
You will notice here that the `callbackURL` is set to an address, one that you will need to account for when setting the routes for the application. The GitHub strategy will access the API, along with the user profile, the information is contained within a user object. The middleware function is used to verify the credentials, and then pass the information within `req.user` after authentication. 

Next will be the session and user management code, used to maintain the login session and provide the ability to store user records. Generally when authenticating you will want to store the user to a database, and then Passport will deserialize the user from the session. For demonstration purposes, this Node.js will not use a database and just display the user information. 

Session management is done with:
```
app.use(session({secret:'tswift', resave: true, saveUninitialized: true}))

app.use(passport.initialize());
app.use(passport.session());

passport.serializeUser(function(user, done) {
  done(null, user);
});

passport.deserializeUser(function(id, done) {
    done(null, user.id);
});
```
It is important to note that the way the session is managed in this application is without storing it, so the information goes straight from the authentication token to being displayed on the page, which is definitely not what you want for an actual app. This is only to demonstrate how the GitHub authentication works with Node.js.

After this is all done, the last steps will be to organize the routes for authentication, so that after login the profile information will be displayed. 

##Middleware for authentication
The `authenticate()` function is used authenticate the request, and then redirect it to the proper page.
####Routing in *`app.js`*
```
app.get('/auth/github', passport.authenticate('github'));
app.get('/auth/github/callback', 
  passport.authenticate('github', { failureRedirect: '/' }), 
  function(req, res) {
  //res.render('users', {user:req.user});
  res.redirect('/users');
});
```

With all the middleware set up for authentication, the routing is fairly straightforward. The `/auth/github` route is used to begin the authentication, and the `/auth/github/callback` is the route that handles the callback from the GitHub strategy. It is important to remember that the callback URL is specified within the GitHub developer settings for the application, as well as within the Passport strategy setup. 

On a successful callback, the route handler will redirect to `/users` where the information for the GitHub profile can be displayed. A useful thing to do is to test that the session is authenticated, by writing a `testAuthentication` function, and passing it into the route handler. It's also good to have a logout feature, so the session isn't hanging around. 
```
app.get('/users', ensureAuthenticated, users)

app.get('/logout', function(req, res){
  req.logout();
  res.redirect('/');
})

function ensureAuthenticated(req,res,next){
  if(req.isAuthenticated())
    return next();
  res.redirect('/');
}
```

With the routing all set in place, the last thing to do is to make the frontend pages are display the information. 
###GitHub Login information
####*`/routes/index.jade`*

With all the `/auth/github` routing set up, you will need to create a button for GitHub login in. You can put the code under the submit button, which isn't set to do anything. 
```
a(href='/auth/github').ui.fluid.large.blue.button
                    i.github.icon
                    | Sign in with GitHub
```

####*`/routes/users.js`*
Within this file, the router middleware will be used to render the user profile page. 

```
router.get('/users', function(req, res, next) {
  res.render('users', { title: "Profile Page", user: req.user });
});
```

####*`/views/users.jade`*
And lastly here is where the profile information from GitHub will be displayed. The information is passed through `req.user` in JSON format with the name `user` so it is straightforward to take the information out. 
```
extends layout

block content
    .ui.middle.aligned.center.aligned.grid
        .column
            h1.ui.teal.header Profile Information
            .form.ui.large
                .ui.stacked.segment
                    .field
                      label Username
                        .ui.right.input.fluid
                            input(type="text", name="username", value='#{user.username}')
                    .field
                        label Name
                        .ui.right.input.fluid
                            input(type="text", name="name", value='#{user.displayName}')
                    .field
                        label URL
                        .ui.right.input.fluid
                            input(type="text", name="name", value='#{user.profileUrl}')
                    .field
                        label Email
                        .ui.right.input.fluid
                            input(type="text", name="name", value='#{user._json.email}')
                    .field
                        label Number of Public Repos
                        .ui.right.input.fluid
                            input(type="text", name="name", value='#{user._json.public_repos}')
                    a(href='/logout').ui.fluid.large.red.button Logout 
```
And with that you should be all done your Node.js application, with GitHub authentication!

![profile page](/public/images/profile.png)

## Deploying to Heroku
Now with the app complete, deployment to Heroku is quick and easy. Follow the instructions at [Heroku](https://devcenter.heroku.com/articles/getting-started-with-nodejs#introduction). The easiest way to to have your project saved onto GitHub first, and then use the GitHub Command Line Interface. 
```
heroku login
heroku create
```
For Heroku deployment, you will need to update the callback URL and homepage URL specified within GitHub developer settings. The Heroku url is obtained after running `heroku create`.

To set the environmental variables within Heroku, use:
```
heroku config:set CLIENT_ID='your_client_id_here' CLIENT_SECRET='your_client_secret_here'
```
Then lastly, to deploy the code and view the app:
```
git push heroku master
git open
```
  
If you run into errors, check the logs using:
```
heroku logs --tail
```

After all this is done, your app should be deployed properly! It should look something like [this example](http://cryptic-escarpment-64929.herokuapp.com)

##What next?
Now that you have the basics of Node.js and authentication down, you can build your application further by having database integration, so you can save user login information and create accounts for the app. Depending on your application purposes, PostgreSQL is a good start. You can check out [this tutorial](http://mherman.org/blog/2015/02/12/postgresql-and-nodejs/#.VrUasYQWxeo) for some further examples. 





