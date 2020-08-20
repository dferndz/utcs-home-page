deploy:
	git pull
	npm install
	npm run-script build
	rsync -avu --delete "/build/" "~/public_html"
	chmod -R 755 public_html/*