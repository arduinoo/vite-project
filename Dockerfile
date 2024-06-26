# 使用官方的Node.js作为父镜像  
FROM node:lts-alpine as build-stage  
WORKDIR /app  

# 复制package*.json和yarn.lock（如果使用yarn）  
COPY package*.json ./  
COPY package-lock.json ./ 

# 安装项目依赖  
RUN npm install

# 复制项目源文件  
COPY . .  

# 构建生产环境应用  
RUN npm run build  

# 使用Nginx作为静态文件服务器  
FROM nginx:stable-alpine as production-stage  
COPY --from=build-stage /app/dist /usr/share/nginx/html  

# 如果需要自定义Nginx配置，可以复制nginx.conf文件  
# COPY nginx.conf /etc/nginx/conf.d/default.conf  

# 暴露端口  
EXPOSE 80  

# 前台运行Nginx  
CMD ["nginx", "-g", "daemon off;"]