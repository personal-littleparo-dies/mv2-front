echo "start docker-compose up..."
# sudo docker compose -f /home/craft/compose/docker-compose.yml down --rmi all
sudo docker volume rm shared
sudo docker compose -f /home/craft/compose/docker-compose.yml up -d --build --no-deps frontend