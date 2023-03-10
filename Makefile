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
	aws s3 sync --delete build/ s3://gbs-blog-dev-web
	aws cloudfront create-invalidation --distribution-id "E1D0I1EMJ4O77T" --paths '/*'

deploy-stg: build-stg
	aws s3 sync --delete build/ s3://gbs-blog-stg-web
	aws cloudfront create-invalidation --distribution-id "" --paths '/*'

deploy-prod: build-prod
	aws s3 sync --delete build/ s3://gbs-blog-prod-web
	aws cloudfront create-invalidation --distribution-id "" --paths '/*'