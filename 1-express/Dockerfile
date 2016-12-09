FROM node:argon

# Create demo-app directory
RUN mkdir -p /usr/src/demo-app
WORKDIR /usr/src/demo-app

# Install demo-app dependencies
COPY package.json /usr/src/demo-app/
RUN npm install

# Bundle demo-app source
COPY . /usr/src/demo-app

EXPOSE 8080
CMD [ "npm", "start" ]