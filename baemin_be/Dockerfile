# Stage 1: Build
FROM node:20-alpine as build

WORKDIR /root/product-service

# Copy necessary files for dependencies installation
COPY package.json yarn.lock ./

# Set Yarn timeout
RUN yarn config set network-timeout 300000

# Install dependencies
RUN yarn install --frozen-lockfile

# Copy all application files
COPY . .

# Generate Prisma files and build
RUN yarn prisma generate
RUN yarn build

# Stage 2: Production
FROM node:20-alpine

WORKDIR /root/product-service

# Copy build output
COPY --from=build /root/product-service/dist ./dist
COPY --from=build /root/product-service/package.json ./package.json
COPY --from=build /root/product-service/yarn.lock ./yarn.lock

# Install only production dependencies
RUN yarn install --production --frozen-lockfile

# Set Yarn timeout in runtime container as well
RUN yarn config set network-timeout 300000

CMD ["yarn", "start:prod"]
