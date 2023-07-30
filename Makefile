include .env


build:
	docker compose --project-name $(APP_NAME) build

fuckoff:
	docker stop $(FRONTEND_CONTAINER_NAME)

run:
	docker compose up

prettier:
	npx prettier . --write

lint:
	npm run lint