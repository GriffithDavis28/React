# it is telling docker to use this version of node 
# and the type of distribution system
FROM node:18-alpine

#the directory it needs to take from
WORKDIR /product
# Copy all the files
COPY . .
# Copy the package.json
COPY package*.json ./
# Installs all the required dependencies present in package.json
RUN npm install
# Telling what port it should run on
EXPOSE 3000
# command it should use to start the application
CMD ["npm", "start"]