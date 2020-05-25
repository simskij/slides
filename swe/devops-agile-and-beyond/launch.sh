#!/usr/bin/env zsh


(docker rm -f reveal || true)
SLIDES_PATH=$(pwd)

docker run -d \
  -p 8000:8000 \
  -v $SLIDES_PATH/index.html:/reveal/index.html \
  -v $SLIDES_PATH/js:/reveal/js \
  -v $SLIDES_PATH/css:/reveal/css \
  -v $SLIDES_PATH/public:/reveal/public \
  --name reveal \
  arcticbit/reveal 
