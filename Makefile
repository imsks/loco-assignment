up:
	docker-compose --env-file ./.env.development up -d

up-prod:
	docker-compose --env-file ./.env.production -f docker-compose.yml -f docker-compose.prod.yml up

build:
	docker-compose --env-file ./.env.development build

build-prod:
	docker-compose --env-file ./.env.production -f docker-compose.yml -f docker-compose.prod.yml build

down: 
	docker-compose --env-file ./.env.development down