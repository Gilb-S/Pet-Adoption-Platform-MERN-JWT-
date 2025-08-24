Step 1: Setup main & dev
git checkout main
git pull origin main
git checkout -b dev
git push origin dev

Step 2: Create a feature branch
git checkout dev
git pull origin dev
git checkout -b feature/register-auth

Step 3: Work on the feature
# make changes
git add .
git commit -m "Add register API with JWT"
git push origin feature/register-auth

Step 4: Merge feature → dev
git checkout dev
git pull origin dev
git merge feature/register-auth
git push origin dev


(or open a Pull Request on GitHub to merge feature → dev)

Step 5: Merge dev → main (when stable)
git checkout main
git pull origin main
git merge dev
git push origin main


(again, usually via a PR so teammates can review before merging to main)

Step 6: Cleanup
git branch -d feature/register-auth
git push origin --delete feature/register-auth