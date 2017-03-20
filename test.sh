set -e

rm -rf generated-project
yes "" | ./node_modules/.bin/vue init . generated-project

cd generated-project
yarnbin=/usr/local/bin/yarn
if [ -f $yarnbin ]; then
    yarn
else
    npm install
fi
npm test
test_result=$?
npm run build
exit $test_result