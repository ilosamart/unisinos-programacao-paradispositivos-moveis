#!/bin/bash

set -e

DIR="$( dirname -- "${BASH_SOURCE[0]}"; )";   # Get the directory name
DIR="$( realpath -e -- "$DIR"; )";    # Resolve its full path if need be
VERSION=${1:-0.0.1}

docker build -f ${DIR}/backend/Dockerfile ${DIR} -t unisinos-ppdm-backend:${VERSION}
docker tag unisinos-ppdm-backend:${VERSION} ghcr.io/ilosamart/docker-registry/unisinos-ppdm-backend:${VERSION}
docker push ghcr.io/ilosamart/docker-registry/unisinos-ppdm-backend:${VERSION}
