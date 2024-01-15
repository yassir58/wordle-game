docker-compose up --build -d

wait

npx prisma generate

npx prisma migrate deploy

npm run build 

wait

npm start
