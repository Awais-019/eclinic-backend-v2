FROM node:18
# Create app directory
WORKDIR /usr/src/app
# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# COPY package*.json ./
COPY package*.json ./
RUN npx yarn install
# If you are building your code for production
# RUN npm ci --omit=dev
# Bundle app source
COPY . .
# RUN npx yarn generate
# RUN npx yarn build
EXPOSE 4000
# CMD [ "node", "dist/index" ]