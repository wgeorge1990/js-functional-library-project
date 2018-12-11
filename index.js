fi = (function() {
  return {
    libraryMethod: function() {
      return 'Start by reading https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0'
    },

    // : function (element, index, collection) {},

    each: function(collection, callback) {

      for (i = 0; i < collection.length; i++) {

        callback(collection[i])

      }
      return collection
    },

    map: function() {

    },

    reduce: function() {

    },

    functions: function() {

    },


  }
})()

fi.libraryMethod()
