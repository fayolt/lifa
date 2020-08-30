FROM ruby:2.7.1-slim-buster

RUN apt update

RUN apt install -y git curl build-essential

RUN gem install bundler jekyll

RUN curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.35.3/install.sh | bash

RUN source ~/.profile && nvm install 12.18.3

RUN npm install -g gulp-cli