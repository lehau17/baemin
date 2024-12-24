# Stage 1: Build
FROM node:20-alpine as build
WORKDIR /root/product-service

# Copy necessary files for dependencies installation
COPY package.json package-lock.json ./
RUN npm install

# Copy all application files
COPY prisma ./prisma

# Generate Prisma files and build
RUN npm run prisma:push
RUN npm run prisma:generate

COPY . .
RUN npm run build

# Stage 2: Production
FROM node:20-alpine
WORKDIR /root/product-service

# Copy build output
COPY --from=build /root/product-service/dist ./dist
COPY --from=build /root/product-service/package.json ./package.json
COPY --from=build /root/product-service/package-lock.json ./package-lock.json

# Install only production dependencies
RUN npm install --only=production

CMD ["npm", "run", "start:prod"]
