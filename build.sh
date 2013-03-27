#! /bin/bash

node scrape-node.js 1190 && \
convert -delay 80 -loop 0 images/*.png xkcd-time.gif && \
convert -delay 20 -loop 0 images/*.png xkcd-time-fast.gif && \
convert -delay 7 -loop 0 images/*.png xkcd-time-super-fast.gif && \
convert -delay 2 -loop 0 images/*.png xkcd-time-ludicrous-speed.gif;