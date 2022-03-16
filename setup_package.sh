#!/bin/bash
set -e

# Setup the package.json for a given npm module
echo ${BASH_SOURCE[0]}
SCRIPT_DIR=$( cd -- "$( dirname -- "${BASH_SOURCE[0]}" )" &> /dev/null && pwd )
# REMOVE: ONLY FOR FIRST PUBLISH USE
node $SCRIPT_DIR/trimPackageJson.js `pwd` "${BASH_SOURCE[1]}"
