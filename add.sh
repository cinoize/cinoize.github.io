
echo `date`
wget -r -p -k -l 0 -H --retry 0 --wait 0 --timeout 34 --tries 1 $1
echo `date`
#cp -R fromthemachine.org/* .
cp -R douci.ml/* .
cp -R douci.ml/*.html .
#cp -R fromthemachine.org/*.html .

#cp -R fromthemachine.org/* .
#cp -R douci.ml/*.html .

sed -i -e 's/src=\"\.\./src=\"\./g' *.html
sed -i -e 's/suez.fromthemachine.org/fromthemachine.org/g' *.html
#sed -i -e 's/fromthemachine.org/en.reallyhim.com/g' *.html
sed -i -e 's/www.en.reallyhim.com/www.lamc.la/g' *.html
sed -i -e 's/src=\".\/en.reallyhim.com/src=\"\./g' *.html
sed -i -e 's/src=\".\/lamc.la/src=\"\./g' *.html
sed -i -e 's/douci.ml/en.reallyhim.com/g' *.html
sed -i -e 's/href=\"\.\./href=\"\./g' *.html
sed -i -e 's/href=\"\.\/fonts.google/href=\"http:\/\/fonts.google/g' *.html
sed -i -e 's/http\:\/\/en.reallyhim.com\/reqs\/mailfoogae.appspot.com/http\:\/\/mailfoogae.appspot.com/g' *.html
sed -i -e "s/src=\"\.\/addsearch.com/src=\"https:\/\/addsearch\.com/g" *.html
sed -i -e "s/src=\"\.\/s7\.addthis/src=\"http\:\/\/s7\.addthis/g" *.html
sed -i -e "s/http:\/\/omealf.september2016.com/./g" *.html
sed -i -e 's/\t//g' *.html
echo `date`
git add .
echo `date`
cp -R douci.ml ../oldit2
rm -rf douci.ml
#mv fromthemachine.org ../oldit2
