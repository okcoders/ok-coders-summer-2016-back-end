OK Coders: Express Exercises
====================================

For this assignment you will create a new express application from scratch and add a number of custom routes to it.

## Create a new express application

Create a new express application from scratch. In the command line run `express express-homework`. Express will create a new folder "express-homework" and fill it with an application template. `cd` into that directory and run `npm install` to download the application's dependencies.

## Add routes for a duck resource

Your application will represent a place where people can go to get information on various types of ducks. Add routes that support viewing all the ducks we know about, viewing a single duck, creating a new duck, editing a duck, and deleting a duck (must be extinct now). Don't worry about generating good responses for the routes. Just send a text response back that identifies the path and any named parameters, e.g.:

```js
app.get('/ducks/:id', function(req, res) {
	var id = req.params.id;
	res.send("You requested duck " + id);
});
```

Modern web applications use something called *resourceful routing* to represent editable collections of objects on a server. A *resource* is just a collection of data that can be modfied using standard HTTP requests. All of the operations listed above, such as viewing and editing ducks, can be implemented with particular VERB and path combinations. The following tables lists those combinations:

<table>
<thead>
<tr>
<th>HTTP Verb</th>
<th>Path</th>
<th>Used for</th>
</tr>
</thead>
<tbody>
<tr>
<td>GET</td>
<td>/ducks</td>
<td>display a list of all ducks</td>
</tr>
<tr>
<td>POST</td>
<td>/ducks</td>
<td>create a new duck</td>
</tr>
<tr>
<td>GET</td>
<td>/ducks/:id</td>
<td>display a specific duck</td>
</tr>
<tr>
<td>PUT</td>
<td>/ducks/:id</td>
<td>update a specific duck</td>
</tr>
<tr>
<td>GET</td>
<td>/ducks/:id/quack</td>
<td>provide a detailed text description for how this specific duck quacks</td>
</tr>
<tr>
<td>DELETE</td>
<td>/ducks/:id</td>
<td>delete a specific duck</td>
</tr>
</tbody>
</table>

Generate all of the following routes above with the VERB and path combinations identified. This implements a ducks resource.

Go ahead and implement your routes inside the main *app.js* file. For a more advanced application architecture, create the routes inside a separate routing file and require it into app.js. That means you'll need a "ducks.js" file inside the "routes" folder in your express project. Scope the module to the `/ducks` path from the "app.js" file. Refer to the lesson material and template code for instructions on how to do this.
