pnpm docs:build
cd docs/.vuepress/dist
git init
git add -A
git commit -m 'deploy'
git push -f git@github.com:csmasterpath/csmasterpath.github.io main:gh-pages
cd -