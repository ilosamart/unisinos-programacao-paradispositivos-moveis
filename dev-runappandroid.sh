#!/bin/bash

set -e

DIR="$( dirname -- "${BASH_SOURCE[0]}"; )";   # Get the directory name
DIR="$( realpath -e -- "$DIR"; )";    # Resolve its full path if need be

cd ${DIR}/app

AVD=${1:-Small_Phone_API_33}

ionic cordova emulate android --target=${AVD}