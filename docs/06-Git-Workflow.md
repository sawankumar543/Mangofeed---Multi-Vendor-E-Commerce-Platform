# Git Workflow

## Purpose

This document defines the Git workflow used in the Mangofeed project.

The goal is to keep development organized, maintainable, and production-ready.

Every feature should have its own development cycle.

---

# Branch Strategy

Mangofeed follows a simplified Git Flow.

main

↓

develop

↓

feature branches

↓

develop

↓

main

---

# Branches

## main

Production-ready code only.

Always stable.

Never commit directly.

---

## develop

Integration branch.

All completed features are merged here first.

---

## feature/*

Used for developing new features.

Examples

feature/authentication

feature/products

feature/cart

feature/orders

feature/seller-dashboard

feature/admin-panel

---

## bugfix/*

Used to fix bugs.

Examples

bugfix/login

bugfix/payment

bugfix/navbar

---

## hotfix/*

Emergency production fixes.

Examples

hotfix/security

hotfix/payment

hotfix/server-crash

---

# Feature Development Lifecycle

Create Feature Branch

↓

Implement Feature

↓

Local Testing

↓

Review Code

↓

Commit Changes

↓

Merge into develop

↓

Test Again

↓

Merge into main

---

# Commit Message Format

Mangofeed follows Conventional Commits.

Format

type(scope): short description

Example

feat(auth): add register endpoint

fix(cart): resolve quantity update bug

docs(api): update authentication endpoints

refactor(product): simplify product service

style(button): improve spacing

test(auth): add login tests

---

# Commit Types

feat

A new feature.

fix

A bug fix.

docs

Documentation changes.

style

Formatting changes.

refactor

Code improvements without changing behavior.

test

Adding or updating tests.

chore

Maintenance work.

build

Build configuration changes.

ci

CI/CD configuration.

perf

Performance improvements.

revert

Revert previous commit.

---

# Commit Rules

Each commit should contain only one logical change.

Bad

Added Login

Fixed Navbar

Updated Products

All in one commit.

Good

feat(auth): implement login API

fix(navbar): resolve responsive issue

feat(product): create product card

---

# Branch Naming Rules

Always use lowercase.

Use hyphens.

Examples

feature/login-page

feature/product-search

feature/email-verification

feature/seller-registration

bugfix/cart-total

hotfix/token-refresh

---

# Merge Rules

Never merge untested code.

Always review before merging.

Resolve conflicts carefully.

Delete feature branches after merging.

---

# Pull Request Checklist

Before merging:

Code compiles successfully.

No TypeScript errors.

No ESLint errors.

No console.log statements.

Validation added.

Error handling completed.

Documentation updated.

Feature tested.

---

# .gitignore

The following files should never be committed.

node_modules/

.env

dist/

build/

coverage/

logs/

uploads/

*.log

---

# Git Tags

Versioning follows Semantic Versioning.

v1.0.0

v1.1.0

v1.2.0

v2.0.0

---

# Semantic Versioning

Major

Breaking changes.

Minor

New features.

Patch

Bug fixes.

---

# Release Process

Development

↓

Testing

↓

Bug Fixes

↓

Release Candidate

↓

Production

↓

Tag Release

---

# Recommended Git Commands

Initialize repository

git init

Clone repository

git clone

Create new branch

git checkout -b feature/authentication

Check branch

git branch

Stage files

git add .

Commit

git commit -m "feat(auth): implement login endpoint"

Push branch

git push origin feature/authentication

Switch branch

git checkout develop

Merge

git merge feature/authentication

Delete branch

git branch -d feature/authentication

---

# Daily Workflow

Pull latest changes

↓

Create feature branch

↓

Write code

↓

Test locally

↓

Commit

↓

Push branch

↓

Review

↓

Merge

---

# Best Practices

Commit frequently.

Keep commits small.

Write meaningful commit messages.

Never commit secrets.

Never force push to main.

Always test before merging.

Keep documentation updated.

---

# Common Mistakes

❌ Committing multiple features together.

✅ One feature per commit.

----------------------------

❌ Using commit messages like:

"update"

"changes"

"final"

✅ Use meaningful messages.

----------------------------

❌ Committing .env

✅ Keep secrets out of Git.

----------------------------

❌ Working directly on main.

✅ Create feature branches.

----------------------------

❌ Skipping testing before merge.

✅ Test every feature before merging.

---

# Git Workflow Summary

Create Branch

↓

Develop Feature

↓

Test

↓

Commit

↓

Push

↓

Review

↓

Merge

↓

Delete Branch

Repeat