# Stage 1 — Build the portfolio React app
FROM node:20-alpine AS build

# Required working directory name
WORKDIR /wickramasinghe_rishitha_final_site

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the entire project
COPY . .

# Build the production React app
RUN npm run build

# Stage 2 — Serve using Nginx
FROM nginx:alpine

# Replace default nginx config
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Copy production build into nginx folder
COPY --from=build /Wickramasinghe_Rishitha_final_site/build /usr/share/nginx/html

# Expose required port
EXPOSE 5575

# Start nginx
CMD ["nginx", "-g", "daemon off;"]
