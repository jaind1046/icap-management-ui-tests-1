#!/bin/bash

rm -r output 
npx codeceptjs run --plugins allure  
allure generate allure-results --clean -o allure-report && allure open allure-report

