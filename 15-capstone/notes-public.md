## steps for oklahoma county scraper

### General Strategy
We are going to try and gather all the data we need by querying by map number.
The range they give us is 1001 to 4944. So first was must setup a loop that
queries for each of those ranges.

A returned page from this search provides us links to detail pages, which are
the main thing we want to gather data from. The problem on this initial search
result is that there is pagination, and we must keep state in order to go to the
next page. The goal within each map search is to gather all the account numbers,
once that is done we will then query each of those details pages, once that
gathering is done we will then go to the next map number.

1. capture min and max range for map query
2. setup initial request to map query
  a. get needed url
  b. post to it
  c. add the form for map number
3. gather account number (discovered x number of links)
4. show that certain results have multiple pages
5. show the cookie that we need to utilize to go to other page
6. capture page profile
7. ensure sync for generation of next query in order to keep state


### week 8

#### next step is to gather detail info for account numbers
2. store the account numbers in a global variable
3. loop through and create a request for each
4. parse the html we need (in class exercise)
5. stick that into mongo
6. wrap request map info in a scrape function
7. create loopOverMaps function that helps with iterating once query map is done


#### repeat this for all map numbers

how do they know I am a machine?
a. ongoing battle, but,
b. they look at headers
c. they track your ip
d. they watch your behavior (things like rapid requests, or regularly timed
  requests can be flagged


so what can we do?
a. spoof our headers
b. change our ip address
c. replicate human behavior
  1. sleep
  2. get the correct cookies

notes for me:
1. modify to handle multiple map dates
2. sequence of requests
3. cookie jar
4. headers
5. sleep
6. parsing account number page for the attributes we want
7. how to organize the code
8. if time start to talk about how to setup the api
