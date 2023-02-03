;(function () {
  'use strict'

  var tweets = [
    {
      id: 1,
      line: 'It was dark',
      time: 1,
      tweet: {
        text: 'I spooked him big time cuz it was dark and he was hiding on the side of the driveway lol',
        link: 'http://twitter.com/2464935918/status/1621427369213935616',
        username: 'miztifying',
        created_at: '2023-02-03 08:36:24 +0000',
      },
    },
    {
      id: 2,
      line: 'In the car park',
      time: 2,
      tweet: {
        text: 'by the time i get into the beyonc presale the only seats left will be in the car park',
        link: 'http://twitter.com/2849831637/status/1621451467226841089',
        username: 'yeojinXCX',
        created_at: '2023-02-03 10:12:09 +0000',
      },
    },
    { id: 3, line: 'I heard a lark ascending', time: 3, tweet: null },
    {
      id: 4,
      line: 'And you laughed',
      time: 4,
      tweet: {
        text: '"One day, you said something about another world, suddenly you wanted to be a grown up, and you laughed." (Futarikake no Bashou)',
        link: 'http://twitter.com/710397199/status/1621313372263428096',
        username: 'LSSJUMP',
        created_at: '2023-02-03 01:03:25 +0000',
      },
    },
    {
      id: 5,
      line: 'And in my bones',
      time: 5,
      tweet: {
        text: 'yo i hateeeee this white man with my heart and my soul and in my bones bro',
        link: 'http://twitter.com/898581302588342272/status/1618751302523289600',
        username: 'shandem_',
        created_at: '2023-01-26 23:22:40 +0000',
      },
    },
    {
      id: 6,
      line: "I guess I've always known",
      time: 6,
      tweet: {
        text: "MS is a good person in her heart I guess i've always known that",
        link: 'http://twitter.com/1480286667504295936/status/1620000601382998017',
        username: 'unrunre',
        created_at: '2023-01-30 10:06:56 +0000',
      },
    },
    { id: 7, line: 'There was a spark exploding', time: 7, tweet: null },
    { id: 8, line: 'In the dry bark', time: 8, tweet: null },
    {
      id: 10,
      line: 'you look sick',
      time: 9.5,
      tweet: {
        text: '(    `) Why you not eating my pickled sushi roll bestie? You look sick.',
        link: 'http://twitter.com/755198190899589121/status/1621306510583398402',
        username: 'xbestfriend_bot',
        created_at: '2023-02-03 00:36:09 +0000',
      },
    },
    {
      id: 12,
      line: 'We are everything',
      time: 10.5,
      tweet: {
        text: " Mars, we're... already happy the way we are-- everything's over,,- ",
        link: 'http://twitter.com/1619457770608295937/status/1621459904442830849',
        username: 'chocoduoquotes',
        created_at: '2023-02-03 10:45:41 +0000',
      },
    },
    {
      id: 13,
      line: 'And all my clothes',
      time: 14.5,
      tweet: {
        text: 'My mom really doesnt want me to leave Ive been coming home with my room clean and all my clothes folded bed made etc etc ',
        link: 'http://twitter.com/1392780200329445378/status/1620975789666869249',
        username: 'chailovercx',
        created_at: '2023-02-02 02:41:59 +0000',
      },
    },
    { id: 14, line: 'Well baby they were thrown', time: 15.5, tweet: null },
    { id: 15, line: 'Into the sea', time: 16.5, tweet: null },
    { id: 16, line: 'God I felt it when you left me', time: 17.5, tweet: null },
    { id: 17, line: 'It hit me hard', time: 18.5, tweet: null },
    {
      id: 18,
      line: 'In the car park',
      time: 19.5,
      tweet: {
        text: '40k in front of me lmao Im gonna be in the car park for it',
        link: 'http://twitter.com/17215264/status/1621449664644907009',
        username: 'caitilinokelly',
        created_at: '2023-02-03 10:04:59 +0000',
      },
    },
    { id: 19, line: 'Cause I was always looking', time: 20.5, tweet: null },
    {
      id: 20,
      line: 'For a spark',
      time: 21.5,
      tweet: {
        text: 'hoping for a spark',
        link: 'http://twitter.com/1303146139424894978/status/1621452821261582336',
        username: 'julianslyrics',
        created_at: '2023-02-03 10:17:32 +0000',
      },
    },
    { id: 21, line: "we can't lose", time: 23, tweet: null },
    {
      id: 23,
      line: 'we never won',
      time: 24,
      tweet: {
        text: 'I dont have the stats but we never won a game on ESPN this year.',
        link: 'http://twitter.com/24349840/status/1621005681972371457',
        username: 'jackhawk11',
        created_at: '2023-02-02 04:40:46 +0000',
      },
    },
    { id: 25, line: "I'm going to make it anyway", time: 27, tweet: null },
    { id: 27, line: "I'm going to fake it baby", time: 29, tweet: null },
    {
      id: 29,
      line: 'I feel it now',
      time: 32.5,
      tweet: {
        text: "Love, you just know it when you feel it. I feel it now, and it's furry and purring.",
        link: 'http://twitter.com/3592600156/status/1621162735386894341',
        username: 'BrainyKitten',
        created_at: '2023-02-02 15:04:50 +0000',
      },
    },
    {
      id: 30,
      line: 'I feel it now',
      time: 33.5,
      tweet: {
        text: "Love, you just know it when you feel it. I feel it now, and it's furry and purring.",
        link: 'http://twitter.com/3592600156/status/1621162735386894341',
        username: 'BrainyKitten',
        created_at: '2023-02-02 15:04:50 +0000',
      },
    },
    {
      id: 31,
      line: 'I feel it now',
      time: 34.5,
      tweet: {
        text: 'I think I was numb to it last year but, you know I feel it now more than ever',
        link: 'http://twitter.com/269613529/status/1621343372311928833',
        username: 'KieMarie__',
        created_at: '2023-02-03 03:02:37 +0000',
      },
    },
    {
      id: 32,
      line: 'I feel it now',
      time: 35.5,
      tweet: {
        text: "Love, you just know it when you feel it. I feel it now, and it's furry and purring.",
        link: 'http://twitter.com/3592600156/status/1621162735386894341',
        username: 'BrainyKitten',
        created_at: '2023-02-02 15:04:50 +0000',
      },
    },
  ]

  angular.module('tweetflight').controller('MainCtrl', [
    '$scope',
    '$http',
    function ($scope, $http) {
      var getTweets, requestAnimationFrame, setBarTime, setLyricSplit
      document.ontouchmove = function (e) {
        if (!$scope.unsupported()) {
          return e.preventDefault()
        }
      }
      requestAnimationFrame =
        window.requestAnimationFrame ||
        window.mozRequestAnimationFrame ||
        window.webkitRequestAnimationFrame ||
        window.msRequestAnimationFrame
      window.requestAnimationFrame = requestAnimationFrame
      $scope.isiPhone = function () {
        return navigator.userAgent.match(
          /iPhone/i || navigator.userAgent.match(/iPod/i)
        )
      }
      $scope.ready = function () {
        return $scope.lyricsLoaded
      }
      $scope.start = function () {
        return ($scope.playing = true)
      }
      $scope.replay = function () {
        return location.reload()
      }
      $scope.unsupported = function () {
        return (
          !Modernizr.cssanimations ||
          !Modernizr.csstransitions ||
          !Modernizr.video ||
          !Modernizr.opacity ||
          !window.requestAnimationFrame ||
          $scope.isiPhone()
        )
      }
      setBarTime = function (lyric) {
        return (lyric.time = 6.4 * lyric.time - 6.4)
      }
      setLyricSplit = function (lyric) {
        var pattern
        if (lyric.tweet) {
          pattern = new RegExp('^(.*)(' + lyric.line + ')(.*)$', 'im')
          return (lyric.processed = lyric.tweet.text.match(pattern))
        }
      }
      getTweets = function () {
        $scope.status = 'Fetching tweets...'

        var lyric, _i, _len, _ref, _results
        $scope.lyrics = tweets
        _ref = $scope.lyrics
        _results = []
        for (_i = 0, _len = _ref.length; _i < _len; _i++) {
          lyric = _ref[_i]
          setBarTime(lyric)
          _results.push(setLyricSplit(lyric))
        }
        return _results
      }
      return getTweets()
    },
  ])

  angular.module('tweetflight').directive('preflight', function () {
    return {
      restrict: 'E',
      template: `
      <div id='stage'>
        <video preflight-video class="preflight video" preload>
          <source ng-src="{{ video }}.mp4"  type="video/mp4; codecs=avc1.42E01E,mp4a.40.2">
          <source ng-src="{{ video }}.webm" type="video/webm; codecs=vp8,vorbis">
          <source ng-src="{{ video }}.ogv"  type="video/ogg; codecs=theora,vorbis">
        </video>
        <ul class="tweets">
          <li ng-repeat="lyric in lyrics" ng-controller="LyricController" ng-class="lyricClass()" lyric>
            <div class='innerLyric'>
              <div ng-show="lyric.tweet" class="meta">
                <span class="date">{{lyric.tweet.created_at | timeAgo}}</span>
              </div>
              <div class="line">
                <span ng-show="lyric.tweet" class="tweet start">{{lyric.processed[1] | swapSymbols}}</span>
                {{lyric.line}}
                <span ng-show="lyric.tweet" class="tweet end">{{lyric.processed[3] | swapSymbols}}</span>
              </span>
              <div ng-show="lyric.tweet" class="link">
                <a class="tweet-link" href="{{lyric.tweet.link}}" target="blank">
                  <span class="ss-icon ss-social">twitter</span>&nbsp;{{lyric.tweet.username}}
                </a>
              </div>
            </div>
          </li>
        </ul>
      </div>
      `,
      replace: true,
      scope: {
        video: '@',
      },
      link: function (scope, element, attr) {
        var height, makeVideoFill, video, width
        width = 518
        height = 292
        video = angular.element('.video')
        video.css('margin-top', '-' + height / 2 + 'px')
        video.css('margin-left', '-' + width / 2 + 'px')
        makeVideoFill = function () {
          var newHeight, newWidth, ratio, windowRatio
          ratio = width / height
          windowRatio = window.innerWidth / window.innerHeight
          if (windowRatio > ratio) {
            video.css('width', '' + window.innerWidth + 'px')
            video.css('margin-left', '-' + window.innerWidth / 2 + 'px')
            newHeight = window.innerWidth / ratio
            video.css('height', '' + newHeight + 'px')
            return video.css('margin-top', '-' + newHeight / 2 + 'px')
          } else {
            newWidth = window.innerHeight * ratio
            video.css('width', '' + newWidth + 'px')
            video.css('margin-left', '-' + newWidth / 2 + 'px')
            video.css('height', '' + window.innerHeight + 'px')
            return video.css('margin-top', '-' + window.innerHeight / 2 + 'px')
          }
        }
        makeVideoFill()
        return angular.element(window).bind('resize', makeVideoFill)
      },
    }
  })

  angular.module('tweetflight').directive('preflightVideo', function () {
    return function (scope, elem, attrs) {
      var video
      video = elem[0]
      scope.$watch('$parent.playing', function () {
        if (scope.$parent.playing) {
          return video.play()
        }
      })
      scope.$watch('$parent.lyrics', function () {
        if (scope.$parent.lyrics) {
          scope.lyrics = scope.$parent.lyrics
          return (scope.$parent.lyricsLoaded = true)
        }
      })
      return elem.bind('play', function () {
        var nextLyricId, watchForChanges
        nextLyricId = 0
        scope.visibleLyrics = []
        watchForChanges = function () {
          var currentTime, nextLyric
          if (scope.lyrics != null) {
            currentTime = video.currentTime
            nextLyric = scope.lyrics[nextLyricId]
            if (currentTime > nextLyric.time) {
              scope.currentLyric = nextLyric
              scope.currentLyric.visible = true
              scope.$apply()
              nextLyricId++
            }
            if (scope.lyrics.length > nextLyricId) {
              return window.requestAnimationFrame(watchForChanges)
            } else {
              return setTimeout(function () {
                scope.$parent.ended = true
                return scope.$parent.$apply()
              }, 12000)
            }
          }
        }
        return window.requestAnimationFrame(watchForChanges)
      })
    }
  })

  angular.module('tweetflight').controller('LyricController', [
    '$scope',
    function ($scope) {
      return ($scope.lyricClass = function () {
        return {
          visible: $scope.lyric.visible,
          'no-tweet': !$scope.lyric.tweet,
          'transition-height': true,
        }
      })
    },
  ])

  angular.module('tweetflight').directive('lyric', function () {
    return function (scope, element, attrs) {
      setTimeout(function () {
        return element.height(0)
      }, 0)
      return scope.$watch('lyric.visible', function (isVisible) {
        var lyricHeight
        if (isVisible) {
          lyricHeight = element.find('.innerLyric').height()
          element.height(lyricHeight)
          return setTimeout(function () {
            element.removeClass('transition-height')
            return element.css('height', 'auto')
          }, 10000)
        }
      })
    }
  })

  angular.module('tweetflight').filter('timeAgoInWords', function () {
    return function (input) {
      if (input) {
        return moment(input).from(Date.now())
      }
    }
  })

  angular.module('tweetflight').filter('timeAgo', function () {
    return function (input) {
      if (input) {
        return moment(input, 'YYYY-MM-DD HH:mm:ss Z').format('MMM D h:mma')
      }
    }
  })

  angular.module('tweetflight').filter('swapSymbols', function () {
    return function (input) {
      if (input) {
        return input.replace('&amp;', '&')
      }
    }
  })
}).call(this)
