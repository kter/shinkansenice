var Twit = require('twit')
var T = new Twit({
  consumer_key: process.env.SSKABOT_CONSUMER_KEY,
  consumer_secret: process.env.SSKABOT_CONSUMER_SECRET,
  access_token: process.env.SSKABOT_ACCESS_TOKEN,
  access_token_secret: process.env.SSKABOT_ACCESS_TOKEN_SECRET,
  timeout_ms: 60*1000,
})

var stream = T.stream('statuses/filter', { track: ['ｼﾝｶﾝｾﾝｽｺﾞｸｶﾀｲｱｲｽ', 'シンカンセンスゴクカタイアイス'] })

stream.on('tweet', function (tweet){
  var tweetId = tweet.id_str;
  var tweetEntitiesMedia = tweet.entities.media;
  if (tweetEntitiesMedia){
    T.post('statuses/retweet/:id', { id: tweetId }, function (err, data, response) {
})
  }
})
