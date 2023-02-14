#!/bin/sh

# Lint code using eslint
echo "Running lint checks..."
yarn pretty-quick --staged && yarn lint

# Run tests using jest
echo "Running tests..."
# npx jest

# Check if there are any files with unstaged changes
echo "Checking for unstaged changes..."
if [ -n "$(git diff-files --quiet --ignore-submodules --)" ]; then
  echo "There are unstaged changes. Aborting commit."
  exit 1
else
  echo "No unstaged changes detected."
  exit 0
fi
