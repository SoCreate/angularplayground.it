ng build --prod --output-path docs --base-href //
git checkout -- docs/CNAME
cp docs/index.html docs/404.html
