This is an exercise in scraping and making animated gifs.

1. Install ```node```, ```wget```, and ```ImageMagik```.  (```brew install node wget imagemagik```)
2. Run: ```npm install```
3. Run: ```bash build.sh```

If the site is unreachable, you can try the client-side scraping script in your browser and do things manually.

## More

* A [navigable version of the comic](http://xkcd.aubronwood.com/).
* [Explain XKCD page](http://www.explainxkcd.com/wiki/index.php?title=1190).

## Cron

So, this just keeps going.  Here's an example cron I am using:

```
cd ~/Code/node/xkcd-time/ && nice bash build.sh && git add . && git commit -m "Auto update" && git push origin master;
```