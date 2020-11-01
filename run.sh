#!/bin/bash

rm -r output 
npx codeceptjs run  --plugins allure  
allure serve output
