# Stage 1: Build
FROM node:20-alpine as build
WORKDIR /root/app

# Copy necessary files for dependencies installation
COPY package.json package-lock.json ./
RUN npm install

COPY . .

# Generate Prisma files and build
RUN npm run prisma:push
RUN npm run prisma:generate

COPY . .
RUN npm run build

# Stage 2: Production
FROM node:20-alpine
WORKDIR /root/app

# Copy build output
COPY --from=build /root/app/dist ./dist
COPY --from=build /root/app/package.json ./package.json
COPY --from=build /root/app/package-lock.json ./package-lock.json

# Install only production dependencies
RUN npm install --only=production

CMD ["npm", "run", "start:prod"]
