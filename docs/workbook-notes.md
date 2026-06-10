# How to connect a local folder to a GitHub repository

## Step 1: Create a local Git repository

1. Create a local folder.
2. Open the folder in VS Code.
3. Open a terminal.
4. Run:

```bash
git init
```

This turns the folder into a Git repository.

---

## Step 2: Create a GitHub repository

1. Create a repository on GitHub.
2. Copy the repository URL.
3. In VS Code, run:

```bash
git remote add origin <repository-url>
```

Example:

```bash
git remote add origin https://github.com/username/book-service-mvp.git
```

This connects the local repository to the GitHub repository.

---

## Step 3: Make the first commit and push

Create at least one file (for example, README.md), then run:

```bash
git add .
git commit -m "Initial commit"
git branch -M main
git push -u origin main
```

This uploads the local repository to GitHub and sets up the tracking relationship.

---

## Step 4: Continue development

After the initial setup, most day-to-day work can be done through the VS Code Source Control panel:

1. Make changes.
2. Commit changes.
3. Push changes to GitHub.

Typical workflow:

```text
Edit → Commit → Push
```  
