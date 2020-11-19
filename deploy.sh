#!/usr/bin/env sh

# abort on errors
set -e

yarn run build
cd dist

# if you are deploying to a custom domain
# echo 'www.example.com' > CNAME

git init
git add .
git commit -m 'deploy'
git push -f git@github.com:Gideonnn/rick-maps.git master:gh-pages

cd -
