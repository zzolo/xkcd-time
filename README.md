This is an exercise in scraping and making animated gifs.

1. Use the ```scrape-images.js``` script to scrape the images from [http://www.explainxkcd.com/](explainXKCD) at they have collected the images already.  Run this in the browser console.
2. The output of that scrape will give you a bash command.  Run it in the terminal from within the ```images/``` directory.
3. Then run the following to make the animated gif: ```convert -delay 50 -loop 0 images/*.png xkcd-time.gif```.  You will need to install ImageMagik.