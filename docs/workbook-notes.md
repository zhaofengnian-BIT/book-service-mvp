# how to "connect" a local folder to a github repo

## step 1

1. create a local folder
2. open the folder in VS Code
3. run git init in the terminal  

## step 2

1. create a repo in github
2. copy the repo link
3. in VS Code, run the following:
   1. git remote add origin (paste the link here)  
   2. git branch -M main
   3. git push -u origin main

after the previous steps, the local folder and the remote repo have been "connected"

## step 3

do "commit and push" or other things in the "source control" panel of VS Code  
