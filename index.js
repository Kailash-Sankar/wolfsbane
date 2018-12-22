var express = require('express'),
    app = express(),
    engines = require('consolidate'),
    sassMiddleware = require('node-sass-middleware'),
    Poet = require('poet');

app.engine('html', engines.nunjucks);
app.set('view engine', 'html');
app.set('views', __dirname + '/views');

var port = process.env.PORT || 3000;

app.use(sassMiddleware({
    /* Options */
    src: __dirname + '/public/sass',
    dest: __dirname + '/public/css',
    debug: false,
    //outputStyle: 'compressed',
    prefix:  '/css'  // Where prefix is at <link rel="stylesheets" href="prefix/style.css"/>
}));

app.use(express.static('public'));

// Handler for internal server errors
function errorHandler(err, req, res, next) {
    console.error(err.message);
    console.error(err.stack);
    res.status(500).render('error_template', { error: err });
}

app.get('/', function(req, res, next) {
    res.render('home.html', { });
});

app.get('/blog', function(req, res, next) {
    res.render('blog.html', { });
});

app.use(errorHandler);

var poet = Poet(app, {
    posts: './_posts/',
    postsPerPage: 5,
    metaFormat: 'json'
});

poet.watch(function () {
  // watcher reloaded
}).init().then(function () {
    // ready to go!
});

var server = app.listen(port, function() {
    var port = server.address().port;
    console.log('Express server listening on port %s.', port);
});


/* -- poet enh -- */

// finds the page in which a post belongs to
// expects post slug as identifier
poet.helpers.getPostPage = function(slug) {
    var postsPerPage = poet.options.postsPerPage;
    var pageCount = poet.helpers.getPageCount();

    // iterate each page
    for(var i=1; i <= pageCount; i++) {
        var from = (i-1) * postsPerPage;
        var to = from + postsPerPage;
        // get posts in a page
        var posts = poet.helpers.getPosts(from, to);

        // look for the slug
        if ( posts.find(p => p.slug === slug) ) {
          return i;
        }
    }

    //not found
    return 0;
};

app.locals.getPostPage = poet.helpers.getPostPage;
