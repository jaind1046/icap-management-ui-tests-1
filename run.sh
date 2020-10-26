#!/bin/bash

rm -r output 
npx codeceptjs run --grep "@fileUpload" --plugins allure  
allure serve output
