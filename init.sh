#!/usr/bin/env bash

echo "Install dependencies..."
npm install

echo "Downloading Paws..."
curl -# -o styles/src/_paws.scss --create-dirs https://raw.github.com/tvooo/paws/master/sass/_paws.scss

echo "Downloading Underscore.js..."
curl -# -o js/vendor/underscore.js --create-dirs http://underscorejs.org/underscore.js

echo "Downloading Backbone.js..."
curl -# -o js/vendor/backbone.js --create-dirs http://backbonejs.org/backbone.js

echo "Downloading jQuery..."
curl -# -o js/vendor/jquery.js --create-dirs http://code.jquery.com/jquery-2.0.3.js

echo "Downloading and installing Redacted font"
mkdir -p tmp
mkdir -p fonts
git clone https://github.com/christiannaths/Redacted-Font.git tmp/redacted
cp -f tmp/redacted/fonts/web/* fonts/
sed 's/redacted-/..\/fonts\/redacted-/g' fonts/stylesheet.css > styles/src/_fonts.scss
rm fonts/stylesheet.css
rm -fr tmp
# Rename project
