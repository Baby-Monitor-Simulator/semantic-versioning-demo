# Semantic versioning demo
This demo repository shows how semantic versioning can be applied to Docker image builds to ensure they always have the correct version number.
This repository uses the *"release-please"* action from GitHub actions to achieve the generation of version numbers based on commit messages.

## How to use
To use this approach of versioning docker images, there are two main things needed to make it work: 
1. The *"release-please"* workflow should be used in GitHub actions.
2. All commit messages that should be tracked, should use the *"Conventional Commits"* specification. This can be found over here: https://www.conventionalcommits.org/en/v1.0.0/

