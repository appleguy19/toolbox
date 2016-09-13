# This is an official Bootstrap theme, which means you get free updates when the Bootstrap team releases new versions. Woo Hoo! #

Within the Bootstrap Theme you’ll find the following directories and files, grouping common resources and providing both compiled and minified distribution files, as well as raw source files.

```
toolkit/
  ├── gulpfile.js
  ├── package.json
  ├── README.md
  ├── theme-docs/
  ├── less/
  │   ├── bootstrap/
  │   ├── custom/
  │   ├── variables.less
  │   └── toolkit.less
  ├── js/
  │   ├── bootstrap/
  │   └── custom/
  ├── fonts/
  │   ├── bootstrap-entypo.eot
  │   ├── bootstrap-entypo.svg
  │   ├── bootstrap-entypo.ttf
  │   ├── bootstrap-entypo.woff
  │   └── bootstrap-entypo.woff2
  └── dist/
      ├── toolkit.css
      ├── toolkit.css.map
      ├── toolkit.min.css
      ├── toolkit.min.css.map
      ├── toolkit.js
      └── toolkit.min.js
```

#### Docs and Examples

The `theme-docs` directory contains all the static resources for your Themes docs and examples. To view, just open in your favorite browser!

```
$ open docs/index.html
```


#### Gulpfile.js

We'll use Gulp to take care of building all our front-en resources. You’ll need to install Node.js and Gulp before using our included gulpfile.js.

To install Node visit [https://nodejs.org/download](https://nodejs.org/download/).

To install gulp, run the following command:

```
$ npm install gulp -g
```

When you’re done, install the rest of the theme's dependencies:

```
$ npm install
```

From here on out, simply run `gulp` from your terminal and you're good to go!

+ `gulp` - recompiles and minifies your theme assets.


#### Support

The nice thing about using Bootstrap is that there is a fantastic community. A good place to start is the [official Bootstrap Blog](http://blog.getbootstrap.com/).

You can also find tons of good information by using the [`twitter-bootstrap-3` tag on StackOverflow](https://stackoverflow.com/questions/tagged/twitter-bootstrap-3).

If you have trouble with the theme as implemented by Jake Apple, you can reach out to him: [mailto:jake@jakeapple.com](jake@jakeapple.com) (or @appleguy on Twitter).

If you experience any problems with the theme itself, or if you think you've found a bug with it - please don't hesitate to reach out to themes@getbootstrap.com.
