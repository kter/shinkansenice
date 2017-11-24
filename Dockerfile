FROM node:8.9.1

COPY index.js /src/index.js
COPY package.json /src/package.json
RUN cd /src; npm install

CMD ["node", "/src/index.js"]
