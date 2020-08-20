deploy:
	git pull
	npm install
	npm run-script build
	rm -rf ~/public_html/*
	cp -rf build/* ~/public_html/
	chmod -R 755 ~/public_html/*