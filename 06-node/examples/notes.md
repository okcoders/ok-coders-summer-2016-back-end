# exercise:
1. write a function called higherOrder that takes two parameters, one called
  callback and the other called name
2. in the body of higherOrder, execute the callback and pass the name parameter
   to the callback
3. return the result of that in the body (i.e return statement)
4. write a function called lowerAndSub that takes a parameter called str
5. in the body lowercase the string, then take only the first 2 characters (substring)
6. return the result of that
7. call higherOrder, pass your name to it and pass your lowercase function to it
8. make a new function called higherAndSub, and then repeat step 7 with this new
   function
###

# overview of passing in functions to function
# anonymous functions
# rocket functions

# sync vs. async (parallel)
# sync vs. async in node (the event loop)
# node reading files
# callback chaining
# write a file, get stats on it, delete it

# node server
# have the class connect to it.

### week 4

#### npm
1. npm - introduction
2. npm - npm init and package.json
3. npm install and npm install -g and npm install --save
4. require (commonJS)
5. module.exports (special exports variable), and replacing module.exports
6. require and the steps ., .., /, built-in, node_modules/
7. publish the package

#### exercise:
1. make a new module (directory with package.json)
2. find the package I published on npm
3. add it as a dependency
4. make a new script that requires that package
5. call the methods on it in whatever creative way you can think of
6. Pull in the lodash package
7. Look at the documentation for lodash and do something with one of the methods provided in it

