BACKEND_APP=backendApp

# build_backend binary
build_backend:
	@echo "Building backend binary..."
	cd ./backend && env CGO_ENABLED=0 go build -o ./build/${BACKEND_APP} .
	@echo "Done building"

build_frontend:
	@echo "Building frontend binary..."
	echo "Not setup yet"

build: build_backend build_frontend
	@echo "Building images..."
	docker compose build
	@echo "Done building!"

up: down
	@echo "Starting..."
	docker compose up -d

down:
	# cd ${CUR_DIR}
	@echo "Stopping running images (if running)..."
	docker compose down
