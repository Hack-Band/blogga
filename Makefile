CMS_APP=cmsApp

build_frontend:
	@echo "Building frontend binary..."
	echo "Not setup yet"

build: build_frontend
	@echo "Building images..."
	docker compose build
	@echo "Done building!"

up: down
	@echo "Starting..."
	docker compose up -d

down:
	@echo "Stopping running images (if running)..."
	docker compose down
