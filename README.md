# Security Check CI

This project demonstrates a basic security CI pipeline for any GitHub project using GitHub Actions.

## ✅ What it Does

- **Gitleaks**: scans your codebase for secrets like tokens, passwords, API keys
- **Trivy**: scans the repository for known vulnerabilities (CVEs) and optionally your Dockerfile

## 📦 Requirements
No runtime dependencies — works with any codebase (Node.js, Python, Go, etc.)

## 🚀 How to Use
1. Copy `.github/workflows/security.yml` to your repository
2. Push to `main` or open a pull request
3. GitHub Actions will trigger the security scan automatically

## 🔐 Example Output
You’ll see output from Gitleaks and Trivy directly in the Actions tab of your repo

---

Feel free to extend this workflow with:
- `npm audit` or `yarn audit` (if using Node.js)
- `bandit` for Python
- `snyk` if you have an account
- `dependency-check` for Java

> This project is intended to demonstrate CI-based security checks — it can be added to any repo to harden your code review process.
