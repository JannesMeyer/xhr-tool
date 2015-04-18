JASMINE=./node_modules/.bin/jasmine

all: node_modules

test: all
	$(JASMINE)

test-without-color: all
	$(JASMINE) --no-color

node_modules:
	npm install

.PHONY: all test test-without-color