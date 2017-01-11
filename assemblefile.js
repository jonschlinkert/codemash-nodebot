'use strict';

var assemble = require('assemble');
var app = assemble();

app.task('default', function() {
  app.layouts('src/templates/layouts/*.hbs');
  app.pages('src/templates/pages/*.hbs');
  return app.toStream('pages')
    .pipe(app.renderFile())
    .pipe(app.dest(function(file) {
      file.extname = '.html';
      return 'dist';
    }));
});

module.exports = app;
