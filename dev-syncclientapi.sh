#!/bin/bash

set -e

DIR="$( dirname -- "${BASH_SOURCE[0]}"; )";   # Get the directory name
DIR="$( realpath -e -- "$DIR"; )";    # Resolve its full path if need be
OPENAPI_GENERATOR_JAR=${1:-~/Apps/openapi-generator-cli/openapi-generator-cli.jar}
APIURL=${2:-http://0.0.0.0:9999/openapi.json}

java -jar ${OPENAPI_GENERATOR_JAR} generate \
        -g typescript \
        --additional-properties useOverride=true \
        -i ${APIURL} \
        -o ${DIR}/app/src/apiclient \
        --skip-validate-spec \
        --enable-post-process-file