# Dockerfile_node_angular_cypress
FROM node:slim

RUN apt-get update --yes
RUN apt-get install --yes libgtk2.0-0 libgtk-3-0 libnotify-dev libnotify4 libgconf2-4 libnss3 libxss1 libasound2 libxtst6 xauth xvfb

# set working directory
WORKDIR /app

RUN yarn global add cypress