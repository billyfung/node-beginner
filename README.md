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
One of the common choices for a Node.js web application framework is [expressjs.com](Express), which you can easily install by following the instructions. 

As a sanity check after following the installation instructions, within your project folder you should now have a `package.json` which contains information about your project. Under `"dependencies"` you should see `"express": "^4.13.4"`.  This allows npm to understand what packages to install when looking at the project. 
