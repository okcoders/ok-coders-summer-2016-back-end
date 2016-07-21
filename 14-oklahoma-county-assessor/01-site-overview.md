# Investigating the site you want to scrape

First off, keep in mind scraping can be against the terms-of-service for a
website, so make sure you are not in violation of the TOS before setting up a
crawler.

Alright, so here is the site we are going to investigate:
http://www.oklahomacounty.org/assessor/

## First steps

In order to figure out how to get the data we ultimately want, we need to get an
idea of how the site operates. We will do this with the developer tools in
chrome (specifically the network tab) and with curl. With the network tab open,
start navigating through the site like you normally would.

Pay attention to page reloads and what generates new traffic. At a high level we
have a few questions we need to answer.

1. server based or client side rendered?

We need to figure out if the site is sending rendered html to the client, or if
it is sending some sort of machine-readable format that a client side framework
is using to generate html (this latter format is what we did in the front-end
course, using angular [there are other options like react and ember], or by
using a jquery. If it is the latter, and assuming the data we are interested in
is in the api, then we can directly hit the api without needing to do any html
parsing. If it is the former we will need use a library like cheerio to pull
what we want out of the html.

2. What information do we need to gain access to the data we want

Often, some form of login or authentication is going to be needed to gain access
to the data we want. This may be some form of a username and password, or some
kind of token. This will usually shake out two ways:

a. you will need your scraper to perform the submission, and then utilize what
comes back (i.e some cookie, or token)
b. you can hard code a header that will give you access

3. Finally, what are the queries we need to perform?

What information do we need to post? What are the query parameters?

## First steps with the county assessor site

First we want to go to the search records section/ live property records. Once
we click that it takes us to the disclaimer. Which is something we need to
consider. After we accept "the above statement" do we get something back that
we need to send in subsequent requests?

Up to this point, if you check out your headers in the headers section of the
first request (disclaim.htm), you will notice we are not sending any cookies or
anything.

## Map number

This looks like a search type that we can iterate on (the range is given to us
as 1001-4944. So let's try this route. When we make the search, in our network
tab we should see that we are posting to /assessor/Searches/MapNumber, and that
we are sending along form data that looks like Map=1001

Let's see how that works if we do it with curl (or postman)

 ```
 curl -request POST -d 'Map=1001' --verbose http://www.oklahomacounty.org/assessor/Searches/MapNumber.asp
 ```

 Bummer, looks like they are saying something about robots in the meta header,
 and if you look at the code it is mentioning stuff about cookies.

Ok, fine, grab the cookie from your initial traffic in the network tab of google
chrome, and stick that in your curl/postman request.

 ```
 curl -request POST -d 'Map=1001' -H 'cookie: visid_incap_306289=k4KTDizpTO6asf5YizEgxXprAVcAAAAAQUIPAAAAAAAXdOtCZQ9le+GoxoCCkX8b; incap_ses_168_306289=dSYPFF41SCCzShNUZNtUAuFdjVcAAAAAf7OlXW1EN+rOWlbabmorNA==; nlbi_306289=vfO6bbf3PA03wcwPVY/nZQAAAAAQGHMxrfJ/g0zeo7L4JEZk; _ga=GA1.2.1472471324.1459710843; ASPSESSIONIDCQQQCQSC=OJKJOJGCFPECANKFEAAKFFHI; __utmt=1; __utma=242048028.1472471324.1459710843.1461362933.1468882452.3; __utmb=242048028.13.10.1468882452; __utmc=242048028; __utmz=242048028.1459710843.1.1.utmcsr=google|utmccn=(organic)|utmcmd=organic|utmctr=(not%20provided)' --verbose http://www.oklahomacounty.org/assessor/Searches/MapNumber.asp

 ```

 And boom it works.


 Alright, now look at the page that comes back. It has a series of links we are
 interested in. Grab one of those links and check out what happens when you go
 to it without an cookies.

You will get a reCaptcha! Provided by this company:
https://www.incapsula.com/why-am-i-seeing-this-page.html?src=23&utm_source=blockingpages


Fortunately, we just need to provide our cookie in order to gain access.
