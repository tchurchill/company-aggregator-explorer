PORT ?= 8100
DIR=/opt/sps/app

build:
	docker build -t app .

compile:
	docker run -v `pwd`/build:$(DIR)/build -i app pnpm build

serve:
	docker run -itp 8100:$(PORT) app

test:
	docker run -v `pwd`/test-report/:$(DIR)/test-report -i app pnpm test:ci
