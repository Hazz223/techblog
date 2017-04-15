FROM hazz22/jessie-node

COPY public public
COPY views views
COPY package.json package.json
COPY app.js app.js

EXPOSE 3000

RUN npm install

CMD node app.js
