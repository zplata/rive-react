#!/bin/bash

# Bumps the version of a single npm module found in the current working
# directory. Call bump_version.sh from the path with package.json in it.

set -e
SCRIPT_DIR=$( cd -- "$( dirname -- "${BASH_SOURCE[0]}" )" &> /dev/null && pwd )
# REMOVE: ONLY FOR FIRST PUBLISH USE
node $SCRIPT_DIR/next_version.js "['0.0.0']" `pwd`
