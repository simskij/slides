#!/bin/bash

printSyntax() {
    echo "error: incorrent syntax."
    echo "usage: arm-exec [deploy|validate [rg|devops]|clean]"
}



if [ "$1" = "deploy" ]; then
    echo "Executing deployment"
    bash ./scripts/deploy.sh
elif [ "$1" = "validate" ]; then
    if [ "$2" = "rg" ]; then
        echo "Executing resource group validation"
        bash ./scripts/validate.rg.sh
    elif [ "$2" = "devops" ]; then
        echo "Executing devops validation"
        bash ./scripts/validate.do.sh
    else
        printSyntax
    fi
elif [ "$1" = "clean" ]; then
    echo "Cleaning resources"
    bash ./scripts/clean.sh
else
    printSyntax    
fi

