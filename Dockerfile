# Use Node.js 12 as the base image
FROM node:12

# Set working directory in the container
WORKDIR /app

# Copy project files to the container
COPY . .

# Install dependencies
RUN yarn install

# Build the project (if you have a build step)
RUN yarn build

# Expose the port the app runs on (use appropriate port for your app)
EXPOSE 3000

# Start the application
CMD ["yarn", "start"]
