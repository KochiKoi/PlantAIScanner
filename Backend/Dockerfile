# Kéo môi trường Node.js 
FROM node:18-alpine

#tạo thư mục làm việc bên trong container
WORKDIR /app

#copy file package.json và package-lock.json vào thư mục làm việc
COPY package*.json .

#cài đặt dependencies
RUN npm install

#copy toàn bộ code vào thư mục làm việc
COPY . .

#expose port 3000
EXPOSE 3000

#chạy ứng dụng
CMD ["npm", "run", "dev"]
