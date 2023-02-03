(function() {
  'use strict';

  angular.module('tweetflight').controller('MainCtrl', [
    '$scope', '$http', function($scope, $http) {
      var getTweets, requestAnimationFrame, setBarTime, setLyricSplit, tweet_fetch_attempt_limit, tweet_fetch_attempts, tweet_url;
      tweet_fetch_attempt_limit = 5;
      tweet_url = window.location.toString().match(/127.0.0.1/) && !window.location.toString().match(/\?live=1/) ? "http://127.0.0.1:5173/tweets.json?callback=JSON_CALLBACK" : "https://tweetflight.wearebrightly.com/tweets.json?callback=JSON_CALLBACK";
      document.ontouchmove = function(e) {
        if (!$scope.unsupported()) {
          return e.preventDefault();
        }
      };
      requestAnimationFrame = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || window.msRequestAnimationFrame;
      window.requestAnimationFrame = requestAnimationFrame;
      $scope.isiPhone = function() {
        return navigator.userAgent.match(/iPhone/i || navigator.userAgent.match(/iPod/i));
      };
      $scope.ready = function() {
        return $scope.lyricsLoaded;
      };
      $scope.start = function() {
        return $scope.playing = true;
      };
      $scope.replay = function() {
        return location.reload();
      };
      $scope.unsupported = function() {
        return !Modernizr.cssanimations || !Modernizr.csstransitions || !Modernizr.video || !Modernizr.opacity || !window.requestAnimationFrame || $scope.isiPhone();
      };
      setBarTime = function(lyric) {
        return lyric.time = (6.4 * lyric.time) - 6.4;
      };
      setLyricSplit = function(lyric) {
        var pattern;
        if (lyric.tweet) {
          pattern = new RegExp("^(.*)(" + lyric.line + ")(.*)$", "im");
          return lyric.processed = lyric.tweet.text.match(pattern);
        }
      };
      tweet_fetch_attempts = 1;
      getTweets = function() {
        $scope.status = "Fetching tweets...";
        return $http.jsonp(tweet_url + '').success(function(data) {
          var lyric, _i, _len, _ref, _results;
          $scope.lyrics = data;
          _ref = $scope.lyrics;
          _results = [];
          for (_i = 0, _len = _ref.length; _i < _len; _i++) {
            lyric = _ref[_i];
            setBarTime(lyric);
            _results.push(setLyricSplit(lyric));
          }
          return _results;
        }).error(function(data, status, headers, config) {
          if (tweet_fetch_attempts >= tweet_fetch_attempt_limit) {
            return $scope.status = "Hmm, something went wrong. Reload, or try again soon!";
          } else {
            tweet_fetch_attempts += 1;
            return setTimeout((function() {
              return getTweets();
            }), 1000);
          }
        });
      };
      return getTweets();
    }
  ]);

  angular.module('tweetflight').directive('preflight', function() {
    return {
      restrict: 'E',
      template: "<div id='stage'>\n  <video preflight-video class=\"preflight video\" preload>\n    <source ng-src=\"{{ video }}.mp4\"  type=\"video/mp4; codecs=avc1.42E01E,mp4a.40.2\">\n    <source ng-src=\"{{ video }}.webm\" type=\"video/webm; codecs=vp8,vorbis\">\n    <source ng-src=\"{{ video }}.ogv\"  type=\"video/ogg; codecs=theora,vorbis\">\n  </video>\n  <ul class=\"tweets\">\n    <li ng-repeat=\"lyric in lyrics\" ng-controller=\"LyricController\" ng-class=\"lyricClass()\" lyric>\n      <div class='innerLyric'>\n        <div ng-show=\"lyric.tweet\" class=\"meta\">\n          <span class=\"date\">{{lyric.tweet.created_at | timeAgo}}</span>\n        </div>\n        <div class=\"line\">\n          <span ng-show=\"lyric.tweet\" class=\"tweet start\">{{lyric.processed[1] | swapSymbols}}</span>\n          {{lyric.line}}\n          <span ng-show=\"lyric.tweet\" class=\"tweet end\">{{lyric.processed[3] | swapSymbols}}</span>\n        </span>\n        <div ng-show=\"lyric.tweet\" class=\"link\">\n          <a class=\"tweet-link\" href=\"{{lyric.tweet.link}}\" target=\"blank\">\n            <span class=\"ss-icon ss-social\">twitter</span>&nbsp;{{lyric.tweet.username}}\n          </a>\n        </div>\n      </div>\n    </li>\n  </ul>\n</div>",
      replace: true,
      scope: {
        video: '@'
      },
      link: function(scope, element, attr) {
        var height, makeVideoFill, video, width;
        width = 518;
        height = 292;
        video = angular.element('.video');
        video.css('margin-top', "-" + (height / 2) + "px");
        video.css('margin-left', "-" + (width / 2) + "px");
        makeVideoFill = function() {
          var newHeight, newWidth, ratio, windowRatio;
          ratio = width / height;
          windowRatio = window.innerWidth / window.innerHeight;
          if (windowRatio > ratio) {
            video.css('width', "" + window.innerWidth + "px");
            video.css('margin-left', "-" + (window.innerWidth / 2) + "px");
            newHeight = window.innerWidth / ratio;
            video.css('height', "" + newHeight + "px");
            return video.css('margin-top', "-" + (newHeight / 2) + "px");
          } else {
            newWidth = window.innerHeight * ratio;
            video.css('width', "" + newWidth + "px");
            video.css('margin-left', "-" + (newWidth / 2) + "px");
            video.css('height', "" + window.innerHeight + "px");
            return video.css('margin-top', "-" + (window.innerHeight / 2) + "px");
          }
        };
        makeVideoFill();
        return angular.element(window).bind('resize', makeVideoFill);
      }
    };
  });

  angular.module('tweetflight').directive('preflightVideo', function() {
    return function(scope, elem, attrs) {
      var video;
      video = elem[0];
      scope.$watch('$parent.playing', function() {
        if (scope.$parent.playing) {
          return video.play();
        }
      });
      scope.$watch('$parent.lyrics', function() {
        if (scope.$parent.lyrics) {
          scope.lyrics = scope.$parent.lyrics;
          return scope.$parent.lyricsLoaded = true;
        }
      });
      return elem.bind('play', function() {
        var nextLyricId, watchForChanges;
        nextLyricId = 0;
        scope.visibleLyrics = [];
        watchForChanges = function() {
          var currentTime, nextLyric;
          if (scope.lyrics != null) {
            currentTime = video.currentTime;
            nextLyric = scope.lyrics[nextLyricId];
            if (currentTime > nextLyric.time) {
              scope.currentLyric = nextLyric;
              scope.currentLyric.visible = true;
              scope.$apply();
              nextLyricId++;
            }
            if (scope.lyrics.length > nextLyricId) {
              return window.requestAnimationFrame(watchForChanges);
            } else {
              return setTimeout(function() {
                scope.$parent.ended = true;
                return scope.$parent.$apply();
              }, 12000);
            }
          }
        };
        return window.requestAnimationFrame(watchForChanges);
      });
    };
  });

  angular.module('tweetflight').controller("LyricController", [
    '$scope', function($scope) {
      return $scope.lyricClass = function() {
        return {
          visible: $scope.lyric.visible,
          'no-tweet': !$scope.lyric.tweet,
          'transition-height': true
        };
      };
    }
  ]);

  angular.module('tweetflight').directive("lyric", function() {
    return function(scope, element, attrs) {
      setTimeout(function() {
        return element.height(0);
      }, 0);
      return scope.$watch('lyric.visible', function(isVisible) {
        var lyricHeight;
        if (isVisible) {
          lyricHeight = element.find('.innerLyric').height();
          element.height(lyricHeight);
          return setTimeout(function() {
            element.removeClass('transition-height');
            return element.css('height', 'auto');
          }, 10000);
        }
      });
    };
  });

  angular.module('tweetflight').filter("timeAgoInWords", function() {
    return function(input) {
      if (input) {
        return moment(input).from(Date.now());
      }
    };
  });

  angular.module('tweetflight').filter("timeAgo", function() {
    return function(input) {
      if (input) {
        return moment(input, "YYYY-MM-DD HH:mm:ss Z").format("MMM D h:mma");
      }
    };
  });

  angular.module('tweetflight').filter("swapSymbols", function() {
    return function(input) {
      if (input) {
        return input.replace("&amp;", "&");
      }
    };
  });

}).call(this);
