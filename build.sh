#! /bin/bash

#set NODE_PATH=`which node`
set CONVERT_PATH=`which convert`

NODE_PATH=/usr/local/bin/node
CONVERT_PATH=/usr/local/bin/convert

echo $NODE_PATH
echo $CONVERT_PATH

$NODE_PATH scrape-node.js 1190 && \
$CONVERT_PATH -delay 80 -loop 0 images/*.png xkcd-time.gif && \
$CONVERT_PATH -delay 20 -loop 0 images/*.png xkcd-time-fast.gif && \
$CONVERT_PATH -delay 7 -loop 0 images/*.png xkcd-time-super-fast.gif && \
$CONVERT_PATH -delay 2 -loop 0 images/*.png xkcd-time-ludicrous-speed.gif;