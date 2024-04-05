#!/bin/bash

set -e

AVD=${1:-Small_Phone_API_33}

${ANDROID_HOME:?Você precisa setar a variável ANDROID_HOME}/emulator/emulator -avd ${AVD} -no-snapshot -wipe-data