include .env


build:
	docker compose --project-name $(APP_NAME) build

fuckoff:
	docker compose down

run:
	docker compose up

prettier:
	npx prettier . --write

lint:
	npm run lint