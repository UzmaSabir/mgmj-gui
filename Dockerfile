FROM node:21-alpine

WORKDIR /mgmj-gui/

COPY public/ /mgmj-gui/public
COPY src/ /mgmj-gui/src
COPY package.json /mgmj-gui/

RUN npm install
CMD ["npm", "start"]