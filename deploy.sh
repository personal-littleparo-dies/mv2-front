echo "start docker-compose up..."
# sudo docker compose -f /home/craft/compose/docker-compose.yml down --rmi all
# sudo docker volume rm compose_shared
rm -rf /home/craft/compose/shared
sudo docker compose -f /home/craft/compose/docker-compose.yml up -d --build --no-deps frontend
