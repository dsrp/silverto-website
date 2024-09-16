#!/bin/sh

npm run generate && rsync -arvz --delete dist/ ext:~/public_html/silverto/
