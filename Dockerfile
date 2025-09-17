# Multi-stage Dockerfile for Node.js Sales Website

# Development stage
FROM node:18-alpine AS development

# Set the working directory
WORKDIR /app

# Copy package files
COPY package*.json ./

# Install all dependencies (including dev dependencies)
RUN npm ci && npm cache clean --force

# Copy source code
COPY . .

# Expose port
EXPOSE 3000

# Start development server with nodemon
CMD ["npm", "run", "dev"]

# Production base stage
FROM node:18-alpine AS base

# Install dumb-init for proper signal handling
RUN apk add --no-cache dumb-init

# Create app directory
WORKDIR /app

# Create a non-root user
RUN addgroup -g 1001 -S nodejs && \
    adduser -S salesweb -u 1001

# Copy package files
COPY package*.json ./

# Install only production dependencies
FROM base AS dependencies
RUN npm ci --only=production && npm cache clean --force

# Production stage
FROM base AS production

# Copy production dependencies
COPY --from=dependencies --chown=salesweb:nodejs /app/node_modules ./node_modules

# Copy application code
COPY --chown=salesweb:nodejs . .

# Create logs directory
RUN mkdir -p /app/logs && \
    chown -R salesweb:nodejs /app

# Switch to non-root user
USER salesweb

# Expose port
EXPOSE 3000

# Add health check
HEALTHCHECK --interval=30s --timeout=10s --start-period=5s --retries=3 \
    CMD node healthcheck.js

# Use dumb-init to handle signals properly
ENTRYPOINT ["dumb-init", "--"]

# Start the application
CMD ["npm", "start"]