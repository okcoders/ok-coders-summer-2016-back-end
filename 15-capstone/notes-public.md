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
