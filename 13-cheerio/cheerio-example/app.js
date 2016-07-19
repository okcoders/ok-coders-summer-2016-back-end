var cheerio = require('cheerio')
var request = require('request')
var _ = require('lodash')

var url = 'http://pitchfork.com/reviews/best/albums/'
var page = 1
var options = {
  url: url,
  qs: {
    page: page
  }
}

request(options, requestCallback)

function requestCallback(err, response, data) {
  if (err) {
    console.log('Oops!', err)
  } else {
    parsingTime(data)
  }
}


function parsingTime(data) {
  var $ = cheerio.load(data)
  // console.log('cheerio', $.html())
  getBestList($)
}

function getBestList(html) {
  var bestList = html('div.fragment-list')
  reviewList = bestList.find('div.review')
  extractBestListAttributes(reviewList)
}

function extractBestListAttributes(list) {
  var merged = _.map(list, review => {
    var proccessedAnchor = processAnchor(review.children[0])
    var proccessedMeta = processMeta(review.children[1])
    return _.merge({}, proccessedAnchor, proccessedMeta)
  })
  console.log(merged)
}

function processMeta(meta) {
  var genre = meta.children[0].children[0].children[0].children[0].data
  var author = meta.children[1].children[0]
  var date = meta.children[2].children[0]
  return {genre: genre}
}

function processAnchor(anchor) {
  var albumArtist = anchor.children[1]
  var artist = albumArtist.children[0].children[0].children[0].data
  var album = albumArtist.children[1].children[0].data
  // console.log(artist, album)
  return { artist: artist, album: album }
}
