#FROM node:boron

# Create app directory
# RUN mkdir -p /usr/src/app
# WORKDIR /usr/src/app

# # Install app dependencies
# COPY package.json /usr/src/app/
# RUN npm install

# # Bundle app source
# COPY ./build/bundle.js /usr/src/app

# EXPOSE 5000
# CMD [ "npm", "start" ]

#RUN npm install webpack -g
#WORKDIR /tmp
#COPY package.json /tmp/
#RUN npm config set registry http://registry.npmjs.org/ && npm install
#WORKDIR /usr/src/app
#COPY . /usr/src/app/
#RUN cp -a /tmp/node_modules /usr/src/app/
#RUN webpack
#ENV NODE_ENV=production
#ENV PORT=5000
#EXPOSE 5000

# CMD [ “/usr/local/bin/node”, “./build/bundle.js” ]


FROM node:boron

# Create app directory
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

# Install app dependencies
COPY package.json /usr/src/app/
RUN npm install

# Bundle app source
COPY ./app/ /usr/src/app

CMD [ "npm", "start" ]
