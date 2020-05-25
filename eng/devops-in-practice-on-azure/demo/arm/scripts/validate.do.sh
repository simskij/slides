az group deployment validate \
    --resource-group "gabresourcegroup" \
    --template-file devops.template.json \
    --parameters @devops.parameters.json