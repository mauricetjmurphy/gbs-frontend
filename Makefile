install:
	yarn install

run-tests:
	yarn test

build-dev:
	yarn build:dev
	rm -rf ./build/.env

build-stg:
	yarn build:stg
	rm -rf ./build/.env

build-prod:
	yarn build:prod
	rm -rf ./build/.env

deploy-dev: build-dev
	aws s3 sync --delete build/ s3://gbs-blog-dev-web
	aws cloudfront create-invalidation --distribution-id "E2WE5B1GQZGWDP" --paths '/*'

deploy-stg: build-stg
	aws s3 sync --delete build/ s3://gbs-blog-stg-web
	aws cloudfront create-invalidation --distribution-id "" --paths '/*'

deploy-prod: build-prod
	aws s3 sync --delete build/ s3://gbs-blog-prod-web
	aws cloudfront create-invalidation --distribution-id "E2HW3SJEGMZV3U" --paths '/*'