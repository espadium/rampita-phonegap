# Rampita

## Overview
The flagship Client App of the AccesibleUY API.

## Tech Details
* __Plataform__: Phonegap
* __JS Framework__: Ember.js
* __Stylesheets Framework__: LESS

## Getting Started
1. Clone the repo.
2. Install Phonegap: `$ sudo npm install -g phonegap` (requires [nodejs](http://nodejs.org)).
3. Install LESS: `$ npm install -g less` (styles will compile as you build the app)

Install the ios plugin
```
phonegap local plugin add https://git-wip-us.apache.org/repos/asf/cordova-plugin-device.git
sudo npm install -g ios-deploy
npm install -g ios-sim
```
Now you're ready to build the App:
```
$ phonegap run ios
```
or
```
$ phonegap run android
```
__That's it!__
