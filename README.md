This is an exercise in scraping and making animated gifs.

1. Use the ```scrape-images.js``` script to scrape the images from [http://www.explainxkcd.com/wiki/index.php?title=1190](explainXKCD) at they have collected the images already.  Run this in the browser console.
2. The output of that scrape will give you a bash command.  Run it in the terminal from within the ```images/``` directory.  You will need ```wget```.
3. Then run the following to make the animated gif: ```convert -delay 80 -loop 0 images/*.png xkcd-time.gif```.  You will need to install ImageMagik.