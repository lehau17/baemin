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

# Copy wait-for-postgres.sh script
COPY wait-for-postgres.sh /wait-for-postgres.sh
RUN chmod +x /wait-for-postgres.sh

# Install only production dependencies
RUN npm install --only=production

# Use wait-for-postgres.sh to ensure DB is ready before starting the app
CMD ["sh", "/wait-for-postgres.sh", "some-postgres", "npm", "run", "start:prod"]
