#!/bin/bash

DIR="$( dirname -- "${BASH_SOURCE[0]}"; )";   # Get the directory name
DIR="$( realpath -e -- "$DIR"; )";    # Resolve its full path if need be
OPENAPI_GENERATOR_JAR=${1:-~/Apps/openapi-generator-cli/openapi-generator-cli.jar}

java -jar ${OPENAPI_GENERATOR_JAR} generate \
        -g typescript \
        -i https://unisinos-ppdm-backend.tramasoli.com/openapi.json \
        -o ${DIR}/app/src/apiclient \
        --skip-validate-spec \
        --enable-post-process-file