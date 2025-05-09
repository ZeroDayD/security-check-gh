# Security Check CI

This project demonstrates a basic security CI pipeline for any GitHub project using GitHub Actions.

## ✅ What it Does

- **Gitleaks**: scans your codebase for secrets like tokens, passwords, API keys (with SARIF output)
- **Trivy**: scans the repository for known vulnerabilities (CVEs) and optionally your Dockerfile
- **npm audit**: checks Node.js dependencies for known issues (optional)
- **Custom bypass**: add the `no-block` label to allow merging despite security scan failures

## 📦 Requirements
No runtime dependencies — works with any codebase (Node.js, Python, Go, etc.)

## 🚀 How to Use
1. Copy `.github/workflows/security.yml` to your repository
2. Optionally copy `.gitleaks.toml` if you want to customize detection rules
3. Push to `main` or open a pull request
4. GitHub Actions will trigger the security scan automatically

## 🔐 Output
You’ll see output from Gitleaks and Trivy in the Actions tab. SARIF results are saved as artifacts.

---

Feel free to extend this workflow with:
- `yarn audit` (if using Yarn)
- `bandit` for Python
- `snyk` if you have an account
- `dependency-check` for Java

> This project is intended to demonstrate CI-based security checks — it can be added to any repo to harden your code review process.
