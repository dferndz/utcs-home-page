deploy:
	git pull
	npm install
	npm run-script build
	cp -rf build/* ~/public_html/
	chmod -R 755 ~/public_html/*