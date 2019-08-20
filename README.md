PROJECT SCHOTEST
Requirements

For development, you will only need Node.js installed on your environement. And please use the appropriate Editorconfig plugin for your Editor (not mandatory).
Node

Node is really easy to install & now include NPM. You should be able to run the following command after the installation procedure below.

$ node --version
v0.10.24

$ npm --version
1.3.21

Node installation on OS X

You will need to use a Terminal. On OS X, you can find the default terminal in /Applications/Utilities/Terminal.app.

Please install Homebrew if it's not already done with the following command.

$ ruby -e "$(curl -fsSL https://raw.github.com/Homebrew/homebrew/go/install)"

If everything when fine, you should run

brew install node

Node installation on Linux

sudo apt-get install python-software-properties
sudo add-apt-repository ppa:chris-lea/node.js
sudo apt-get update
sudo apt-get install nodejs

Node installation on Windows

Just go on official Node.js website & grab the installer. Also, be sure to have git available in your PATH, npm might need it.
Install

$ git clone https://github.com/ORG/PROJECT.git
$ cd PROJECT
$ npm install

Configure app

Copy config.sample.json to config.json then edit it with the url where you have setup:

    backend api
    oauth like endpoint for auth
    development

Start & watch

$ npm start
