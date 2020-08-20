deploy:
	git pull
	npm install
	npm run-script build
	cd ..
	cp -rf utcs-home-page/build/* public_html/
	chmod -R 755 public_html/*