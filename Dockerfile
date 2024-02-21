# Use a base Nginx image
FROM nginx:alpine

# Copy static website files to the Nginx document root
COPY ./src /usr/share/nginx/html/


# Expose port 80
EXPOSE 80
