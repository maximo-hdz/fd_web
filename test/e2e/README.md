#End-to-End test with Protractor

=========

##Prerequisites

This assumes that you have [node.js (5.6.0 or the latest version)](http://nodejs.org), [npm](https://npmjs.org/), [Java Development Kit](http://www.oracle.com/technetwork/java/javase/downloads/index.html) and [Protractor](https://angular.github.io/protractor/) installed.

Protractor uses the [Jasmine](http://jasmine.github.io/) test framework for its testing interface.

## Getting Started

Install Protractor globally with:

```shell
npm install -g protractor
```

Then download the necessary binaries with:

```shell
npm install
bower install
```

Now start up a server with:

```shell
webdriver-manager start
```

Before run the test, change the port which use grunt in "local" (make it change in the conf.js file):

```shell
protractor conf.js
```

##Using PhantomJS

In order to test locally with PhantomJS, you'll need to either have it installed globally, or relative to your project. For global install see the [PhantomJS download page](http://phantomjs.org/download.html). For local install run:

```shell
npm install phantomjs
```

Note: By default the conf.js file is configure to use PhantomJS, but If you would like to test against multiple browsers (firefox, chrome, safari, IE, etc...), use the multiCapabilities configuration option which is commented.
