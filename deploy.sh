#!/bin/sh

npm run generate && rsync -arvz --delete dist/ ext2:~/public_html/silverto/
