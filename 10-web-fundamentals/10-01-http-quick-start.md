The Hypertext Transfer Protocol
====

# The foundation for communication over the internet

HTTP describes (is a protocol, so someone made it up and we just follow it)
ways for us to request things, create things, update things, and delete things
over incredibly long distances at light speed. HTTP is not the physical
mechanism - it describes the rules.

# The semantics of HTTP:

HTTP is how two computers talk to each other. The way they talk is
anthropomorphized in the following dialog.

The players:
Craig: Client-Side
Steven: Server-Side
Magic: The-Internet

Craig: "I want to check out new music on Pitchfork.com!"
Magic: "I looked up pitchfork.com and it is located at 54.225.134.203"
Magic: "I'll try to establish a connection with 54.225.134.203 on Port 80"
Steven: "Oh, hello! wanna connect? Sweet ok"
Magic: "Ok I'm connected now Craig, I'll request the main page for you"
Magic: "GET / HTTP/1.1"
Steven: "HTTP/1.1 200 OK"
... headers and html is received from Steven
Craig: "Sweet, I want to add my album to the best new music page!"
Magic: "Ok I'll try"
Magic: "POST /best HTTP/1.1"
Steven: HTTP/1.1 401 Unauthorized"
Magic: "Sorry Craig, but pitchfork.com says you are not allowed to do that"


## From where?

DNS, and IP Address

## What thing?

The URL/URI/Resource

## What do you want to do to it?

GET, POST, PUT, and DELETE

## Status

200 OK, 404 NOT FOUND, 500 INTERNAL SERVER ERROR

## And more: Encryption, CORS, Authentication, and Cookies

HTTPS allows for encrypting our data so that people watching can't understand
what we are saying, CORS is cross origin resource sharing which allows scripts
to request data from servers the script did not originate from, Authentication
allows us to send usernames and passwords so that we can limit certain resources
to certain people, and cookies allow us to have state across requests.
