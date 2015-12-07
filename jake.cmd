@echo off
echo building npm module:
npm rebuild
./node_modules/.bin/jake %*