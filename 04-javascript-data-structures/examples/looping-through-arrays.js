// as we have seen arrays can have more than just primitives, for example, they
// can have an object as one of the elements in the array

//
// below I have an example array of some data you might see in the real world
// (note, I made up the data though)

var sampleData = [
  {year: 1990, population: 500000, spend: 10000000, city: "OKC", state: "OK"},
  {year: 1991, population: 500031, spend: 10000057, city: "OKC", state: "OK"},
  {year: 1992, population: 500062, spend: 10000114, city: "OKC", state: "OK"},
  {year: 1993, population: 500093, spend: 10000171, city: "OKC", state: "OK"},
  {year: 1994, population: 500124, spend: 10000228, city: "OKC", state: "OK"},
  {year: 1995, population: 500155, spend: 10000285, city: "OKC", state: "OK"},
  {year: 1996, population: 500186, spend: 10000342, city: "OKC", state: "OK"},
  {year: 1997, population: 500217, spend: 10000399, city: "OKC", state: "OK"},
  {year: 1998, population: 500248, spend: 10000456, city: "OKC", state: "OK"},
  {year: 1999, population: 500279, spend: 10000513, city: "OKC", state: "OK"},
  {year: 2000, population: 500310, spend: 10000570, city: "OKC", state: "OK"},
  {year: 2001, population: 500341, spend: 10000627, city: "OKC", state: "OK"},
  {year: 2002, population: 500372, spend: 10000684, city: "OKC", state: "OK"},
  {year: 2003, population: 500403, spend: 10000741, city: "OKC", state: "OK"},
  {year: 2004, population: 500434, spend: 10000798, city: "OKC", state: "OK"},
  {year: 2005, population: 500465, spend: 10000855, city: "OKC", state: "OK"},
  {year: 2006, population: 500496, spend: 10000912, city: "OKC", state: "OK"},
  {year: 2007, population: 500527, spend: 10000969, city: "OKC", state: "OK"},
  {year: 2008, population: 500558, spend: 10001026, city: "OKC", state: "OK"},
  {year: 2009, population: 500589, spend: 10001083, city: "OKC", state: "OK"},
  {year: 2010, population: 500620, spend: 10001140, city: "OKC", state: "OK"},
  {year: 2011, population: 500651, spend: 10001197, city: "OKC", state: "OK"},
  {year: 2012, population: 500682, spend: 10001254, city: "OKC", state: "OK"},
  {year: 2013, population: 500713, spend: 10001311, city: "OKC", state: "OK"},
  {year: 2014, population: 500744, spend: 10001368, city: "OKC", state: "OK"},
  {year: 2015, population: 500775, spend: 10001425, city: "OKC", state: "OK"},
  {year: 2016, population: 500806, spend: 10001482, city: "OKC", state: "OK"}
]

// try and "loop" through this array, and add one of the fields (the spend
// field), to a new array, i.e
// this
// [
//   {year: 1990, population: 500000, spend: 10000000, city: "OKC", state: "OK"},
//   {year: 1991, population: 500031, spend: 10000057, city: "OKC", state: "OK"}
// ]
// should become
// [10000000, 10000057]

// bonus, loop through you new array and tell me the value for total spending
// since 1990
//
//
//

console.log(sampleData)

var spendData = []
for(var i = 0; i < sampleData.length; i++) {
   spendData.push(sampleData[i].spend)
}

console.log(sampleData.length)
console.log(spendData.length)
console.log(spendData)

var total = 0
for(var i = 0; i < spendData.length; i++) {
   total = total + spendData[i]
}

console.log(total)










