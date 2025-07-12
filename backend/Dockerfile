FROM node:20-slim
WORKDIR /app
COPY package.json package-lock.json* ./
RUN npm install --legacy-peer-deps || npm install
COPY . .
RUN npm run build
EXPOSE 4000
CMD ["npm", "run", "start"] 