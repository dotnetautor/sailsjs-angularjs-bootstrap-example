/**
 * Bootstrap
 *
 * An asynchronous boostrap function that runs before your Sails app gets lifted.
 * This gives you an opportunity to set up your data model, run jobs, or perform some special logic.
 *
 * For more information on bootstrapping your app, check out:
 * http://sailsjs.org/#documentation
 */

module.exports.bootstrap = function (done) {

  // It's very important to trigger this callack method when you are finished
  // with the bootstrap!  (otherwise your server will never lift, since it's waiting on the bootstrap)
  //done();

  // Create dummy data
  var dummyTodos = [
    {
      "title": "First todo",
      "isComplete": false
    },
    {
      "title": "Completed todo",
      "isComplete": true
    },
    {
      "title": "One more todo",
      "isComplete": false
    }
  ];

  Todo.count().exec(function(err, count) {
    if (err) {
      return done(err);
    }
    if (count > 0) return done();
    Todo.create(dummyTodos).exec(done);
  });

};