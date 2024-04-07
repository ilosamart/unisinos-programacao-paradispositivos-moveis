#!/bin/bash

set -e

DIR="$( dirname -- "${BASH_SOURCE[0]}"; )";   # Get the directory name
DIR="$( realpath -e -- "$DIR"; )";    # Resolve its full path if need be

cd ${DIR}/app
ionic build --prod --platform=android
