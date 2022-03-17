#!/bin/bash
set -e

# Setup the package.json for a given npm module
SCRIPT_DIR=$( cd -- "$( dirname -- "${BASH_SOURCE[0]}" )" &> /dev/null && pwd )
echo $SCRIPT_DIR
node $SCRIPT_DIR/trimPackageJson.js `pwd` "$1"
