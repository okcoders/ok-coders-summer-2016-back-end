var request = require('request')
var cheerio = require('cheerio')
var _ = require('lodash')

scrapePage(3)
scrapePage(2)
scrapePage(1)

function scrapePage(page) {
  var url = 'http://pitchfork.com/reviews/best/albums/'
  var options = {
    url: url,
    method: 'GET',
    qs: {
      page: page
    }
  }
  request(options, getCallback)

  function getCallback(err, res, body) {
    if (err) {
      console.log('Oops!', err)
    } else {
      console.log(res.statusCode)
      if (res.statusCode === 200) {
        startParsing(body)
      } else {
        console.log("can't parse!")
      }
    }
  }

  function startParsing(body) {
    var $ = cheerio.load(body)
    getReviews($)
  }

  function getReviews(html) {
    var reviewContainer = html('div.fragment-list')
    var reviews = reviewContainer.find('div.review')
    parseReviews(reviews)
  }

  function parseReviews(reviews) {
    var parsedReviews = _.map(reviews, review => {
      var parsedAnchor = parseAnchor(review.children[0])
      var parsedMeta = parseMeta(review.children[1])
      return _.merge({}, parsedAnchor, parsedMeta)
    })
    console.log('page: ', page, parsedReviews)
    return parsedReviews
  }

  function parseAnchor(anchor) {
    var albumArtist = anchor.children[1]
    var album = albumArtist.children[1].children[0].data
    var artist = albumArtist.children[0].children[0].children[0].data
    return { artist: artist, album: album }
  }

  function parseMeta(meta) {
    var genre =  meta.children[0].children[0].children[0].children[0].data
    return { genre: genre }
  }
}


