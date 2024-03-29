### ESG Tutorials

#### Prerequisites
> You will need to install a few things before getting started
- Nodejs
- MSSQL or MySQL (either works)
- RabbitMQ
- Python


##### Step 1: Creating a route
> You will be working inside of the app.js file
> At the top import the data.json file that is inside of the step 1 folder.
> Create a get route to `/users` in the app.js file there will be a comment stating where in the file to do so.
> Inside of the route you will use the `res` parameter to return the data in the json object
> Once you run the project in the terminal will be a line stating the url of the server. Grab that.
> In postman make a request to that route on the server using the url from above.
> You should get the response you send from the get route.

> Go through and play around with making a POST, PUT, and DELETE route as practice.
> For these try writing to the `data.json` file.

##### Step 2: Creating express middleware
> This step you will create a middleware function that logs the time someone makes a call to the server along with the request method and the route they are going to. This will be written to the terminal every time something calls to the server.
> In the folder, step 2 create a javascript file.
> In that file create create a function, name it whatever you want.
> This function will have 3 parameters. `req, res, and next`
> Req is the request, res is the response, and next is a callback function.
> Use `console.log()` to output the information to the terminal.
> Use `Date.now()` to get the time.
> Use `req.method` to get the request method.
> Use `req.url` to get the url from the request.
> Now export the function using `module.exports = <functionname>`
> In the app.js file import the file you just created.
> Once imported under the step 2 section register the function you made as middleware.
> To do this you use `app.use(<function>())`.
> Run the application and make a request to the route from step 1.
> You might be wondering why this is not working correctly for you.
> Remember that 3rd parameter `next`? Well this callback function is used to tell express to continue on to the next process. If you don't call this function at the end of you middleware it will hang and never finish your middleware function.
> At the bottom of your middleware function add `next()`
> Go rerun your project and make the request from postman again.
> In the terminal you should see the time, request method and url.

> Bonus: figure out how to get the statusCode correctly and log that information as well. Not as straightforward as the others. Message me on discord if you have questions on how to do this.

> You can do some really cool things with custom middleware so try and make some of your own.

##### Step 3: Using event listeners
> If you actually completed the bonus from the previous section you have used a listener.
> Open up the file you created for the middleware function.
> Inside of the function use `res.on()`.
> The on function takes 2 parameters, the event name and a callback.
> The event name that you will need to complete this section is `finish`. You can get this information from the express website in their docs.
> You now need to move all of the code for the logging except `next()` inside of the callback for the on function.
> Now you can use `this.statusCode` to log the status.


##### Step 4: 