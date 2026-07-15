# Use Node.js Debian image
FROM node:20-bookworm

# Set working directory
WORKDIR /app

# Install dependencies required for sharp
RUN apt-get update && apt-get install -y \
    build-essential \
    python3 \
    libc6-dev \
    libvips-dev \
    && rm -rf /var/lib/apt/lists/*

# Copy package files
COPY package.json package-lock.json* ./

# Install node dependencies
RUN npm install

# Copy project files
COPY . .

# Build Tailwind CSS
RUN npm run build:css

EXPOSE 8080