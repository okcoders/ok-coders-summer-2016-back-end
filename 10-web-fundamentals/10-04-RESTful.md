RESTful API (Representational State Transfer)
====

## Uniform Interface

URI to identify resource, and operations available for that resource (GET, POST,
PUT, DELETE).

## Stateless

Server does not necessarily know its prior interactions with any client. The
interface must therefore be stateless, meaning each request can be viewed as
independent. This also means that the required state is contained entirely in
each individual request.

Other descriptions: Cacheable, Client Server, Layered System (Don't worry about these for now)

## Actions

#### GET

Get a collection of resources or a specific resource by id.

#### POST

Add a new item to a collection.

#### PUT

Update a specific item in a collection (or create it if it doesn't exist), or
update the collection.

#### DELETE

Delete a specific item.

## Naming

No correct answer hear, but from experience you will start to get a feel for
naming resources. Quick tip, nouns, not verbs.

Example, thinking about a blogging application, we might have:

Get the user collection
/users

Get the post collection
/posts

Get the user with id 5
/users/5

Get the post with id 6
/posts/6

Get the posts for user with id 5
/users/5/posts

For the above we typically post to the collections (end with the noun, not the
id), and put or delete specific resources (end with an id)

## Status Codes

We can use status codes to be specific about the result of using these actions
on resources

200
201
404
405
500

## Final note

Keep in mind, as the programmer, you decide all of this. The routing, the status
codes, the actions for resources, all up to you. You don't even have to use the
methods correctly. If you wanted your server could respond to a GET reques by
deleting something. All up to you, but it makes life easier for all of us to
follow these conventions.
