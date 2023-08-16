include .env


build:
	docker compose --project-name $(APP_NAME) build

fuckoff:
	docker compose down

run:
	docker compose up -d

prettier:
	npx prettier . --write

lint:
	npm run lint

deploy:
	vercel --prod --yes 
