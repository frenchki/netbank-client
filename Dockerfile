### Local development ###

FROM node:16.14.2-alpine AS netbank-client-development

# Create a working directory
WORKDIR /usr/src/netback-client

#  Expose application port and hot reload.
EXPOSE 4200 49153

# Install application dependencies.
COPY package.json package-lock.json ./
RUN npm install
RUN npm install -g @angular/cli

# Copy in the source code.
COPY . .

CMD ["ng","serve","--host","0.0.0.0", "--disable-host-check", "--poll", "100"]

### Build ###

FROM node:16.14.2-alpine AS netbank-client-build

WORKDIR /usr/src/netback-client

COPY package.json package-lock.json ./
RUN npm install

COPY . .
RUN npm run build

### Production runtime ###

FROM nginx:1.21.6-alpine AS netbank-client-production
COPY --from=netbank-client-build /usr/src/netback-client/dist/netbank-client /usr/share/nginx/html

EXPOSE 80