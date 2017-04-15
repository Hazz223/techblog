FROM hazz22/jessie-node:v7.9.0

COPY public public
COPY views views
COPY package.json package.json
COPY app.js app.js

EXPOSE 3000

# Todo: perform a chmod on the files. They shouldn't be run as root / shouldn't be sudo'd.
# I might need to redo the base OS for that to work.

RUN sudo npm install

CMD ["sudo", "node", "app.js"]
