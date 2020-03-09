FROM node:10

# Set working directory
RUN mkdir /usr/src/app

WORKDIR /usr/src/app

# A wildcard is used to ensure both package.json AND package-lock.json are copied
COPY package*.json ./

## Install only the packages defined in the package-lock.json (faster than the normal npm install)
RUN npm set progress=false && npm ci --no-cache

# Copy the contents of the project to the image
COPY . .

# Use generic non-root user
USER 1001

EXPOSE 3000

CMD ["npm", "run", "start"]