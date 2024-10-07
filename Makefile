include .env


build:
	docker compose --project-name $(APP_NAME) build

fuckoff:
	docker compose down

run:
	docker compose up -d
	echo "DEV: goto http://localhost:3002"

prettier:
	npx prettier . --write

lint:
	npm run lint

deploy:
	vercel --prod --yes 

prod:
	docker compose --project-name $(APP_NAME) -f docker-compose.prod.yml build --no-cache
	docker compose -f docker-compose.prod.yml up --prune
	echo: 'PROD: goto http://localhost:3002'
