#
# Simple Makefile for conviently testing, building and deploying experiment.
#
PROJECT = widgets

VERSION = $(shell grep '"version":' codemeta.json | cut -d\"  -f 4)

BRANCH = $(shell git branch | grep '* ' | cut -d\  -f 2)

CODEMETA2CFF = $(shell which codemeta2cff)

status:
	git status

save:
	$(CODEMETA2CSFF)
	if [ "$(msg)" != "" ]; then git commit -am "$(msg)"; else git commit -am "Quick Save"; fi
	git push origin $(BRANCH)

publish: save .FORCE
	./publish.bash

.FORCE:
