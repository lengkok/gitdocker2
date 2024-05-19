From node:18-alpine
Workdir /usr/src/app
Copy package*.json ./
run npm install 
Copy . .
Expose 600
CMD ["node", "index.js"]