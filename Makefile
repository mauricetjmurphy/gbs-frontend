install:
	yarn install

build: install
	yarn build

build-dev: install
	yarn build:dev

build-stg: install
	yarn build:stg

build-dr: install
	yarn build:dr

build-prod: install
	yarn build:prod

run-tests:
	yarn test

deploy-dev: build-dev
	aws s3 sync --delete build/ s3://gpt-blog-dev-web

deploy-stg: build-stg
	aws s3 sync --delete build/ s3://gpt-blog-stg-web

deploy-dr: build-dr
	aws s3 sync --delete build/ s3://gpt-blog-dr-web

deploy-prod: build-prod
	aws s3 sync --delete build/ s3://sgpt-blog-prod-web
	aws cloudfront create-invalidation --distribution-id "E1CUYQLHXWMCYY" --paths '/*'