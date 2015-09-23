#MFM SPA Application

=========

##Prerequisites

This assumes that you have [node.js](http://nodejs.org),[npm](https://npmjs.org/) and [yeoman](http://yeoman.io/) installed.

You could need [Sass](http://sass-lang.com/) and [Compass](http://compass-style.org/), both can be installed like Gems of [Ruby](https://www.ruby-lang.org/es/).   

## Getting Started


Install the Grunt CLI client and Bower with:

```shell
npm install -g grunt-cli
npm install -g bower
```
Then install both Grunt dependencies and Bower dependencies by running the following commands in the root directory of this project:

```shell
npm install
bower install
```

Running project using :

```shell
grunt serve
```

## Troubleshooting

If you found the following error when run *grunt serve*

```shell
> TypeError: Cannot read property 'prototype' of undefined
```

You need to reinstall a component, follow the next commands

```shell
rm -rf node_modules/grunt-connect-proxy
npm install eventemitter3@0.1.6
npm install grunt-connect-proxy
```
