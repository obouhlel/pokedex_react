DEPENDENCIES = ./node_modules

all: $(DEPENDENCIES) build run

$(DEPENDENCIES):
	npm install

build:
	npm run build

run: $(DEPENDENCIES)
	npm run dev

clean:
	rm -rf dist
	rm -rf $(DEPENDENCIES)
	rm -rf package-lock.json

re: clean all

.PHONY: all clean