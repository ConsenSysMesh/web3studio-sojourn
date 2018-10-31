#!/bin/bash

if [[ $TRAVIS_OS_NAME == 'osx' ]]; then
  yarn e2e
else
  yarn test;
fi
