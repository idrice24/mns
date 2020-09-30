
npm run deploy
echo on "######## Deploy ends#############"
git add *
git commit --allow-empty -m "Trigger rebuild"
git push
