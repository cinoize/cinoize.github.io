#rm -rf 127.0.0.1
echo `date`
#wget  -e robots=off --no-check-certificate -r -p -k -l 1 -H  --wait 0 --timeout 10 --tries 1  http://127.0.0.1/NEMEC.html >>wget.log 2>>wget2.log
wget  -e robots=off --no-check-certificate -r -p -k -l 1 -H  --wait 0 --timeout 10 --tries 1  http://127.0.0.1/fix.html >>wget.log 2>>wget2.log
echo `date`
#cp -R fromthemachine.org/* .
cp -R 127.0.0.1/* .
rm -rf 127.0.0.1

#cp -R 127.0.0.1/*.html .
#cp -R fromthemachine.org/*.html .

#cp -R fromthemachine.org/* .
#cp -R douci.ml/*.html .

sed -i -e 's/src=\"\.\./src=\"\./g' *.html
sed -i -e 's/suez.fromthemachine.org/fromthemachine.org/g' *.html
#sed -i -e 's/fromthemachine.org/en.reallyhim.com/g' *.html
sed -i -e 's/www.en.reallyhim.com/www.lamc.la/g' *.html
sed -i -e 's/src=\".\/en.reallyhim.com/src=\"\./g' *.html
sed -i -e 's/src=\".\/www.lamc.la/src=\"\./g' *.html
sed -i -e 's/src=\".\/lamc.la/src=\"\./g' *.html
sed -i -e 's/douci.ml/en.reallyhim.com/g' *.html
sed -i -e 's/href=\"\.\./href=\"\./g' *.html
sed -i -e 's/href=\"\.\/fonts.google/href=\"http:\/\/fonts.google/g' *.html
sed -i -e 's/http\:\/\/en.reallyhim.com\/reqs\/mailfoogae.appspot.com/http\:\/\/mailfoogae.appspot.com/g' *.html
sed -i -e "s/src=\"\.\/addsearch.com/src=\"https:\/\/addsearch\.com/g" *.html
sed -i -e "s/src=\"\.\/s7\.addthis/src=\"http\:\/\/s7\.addthis/g" *.html
sed -i -e "s/http:\/\/omealf.september2016.com/./g" *.html
sed -i -e 's/\t//g' *.html
sed -i -e 's/http:\/\/i.imgur.com/\/i.imgur.com/g' *.html
sed -i -e 's/https:\/\/i.imgur.com/\/i.imgur.com/g' *.html
sed -i -e 's/https/http/g' *.html
sed -i -e 's/http:\/\/fromthemachine.org/\./g' *.html
sed -i -e 's/http:\/\/www.fromthemachine.org/\./g' *.html
sed -i -e 's/http:\/\/suez.fromthemachine.org/\./g' *.html
sed -i -e 's/http:\/\/lamc.la/\./g' *.html
sed -i -e 's/http:\/\/www.lamc.la/\./g' *.html
sed -i -e 's/http:\/\/en.reallyhim.com/\./g' *.html
sed -i -e 's/http:\/\/127.0.0.1/\./g' *.html
sed -i -e 's/127.0.0.1/\./g' *.html
echo `date`
rm -rf ../douciml2
mkdir ../douciml2
mv *.log ../douciml2
mv *.tar ../douciml2
mv videos3* ../douciml2
rm *.log
rm *.tar

echo date
#mv fromthemachine.org ../oldit2
#fix question mark shit
find ./ -type f -name '*\?*' |while read f; do mv "$f" "${f%\?*}"; done

cp DEVLANEU.html index.html
\git add .
