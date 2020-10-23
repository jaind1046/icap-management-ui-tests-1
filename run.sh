#!/bin/bash

rm -r output 
npx codeceptjs run --grep "@fileUpload" --plugins allure  
allure generate allure-results --clean -o allure-report && allure open allure-report

