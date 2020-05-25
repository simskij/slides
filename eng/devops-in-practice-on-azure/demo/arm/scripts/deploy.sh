echo "Deploying resource group"
az deployment create \
    --template-file resource-group.template.json \
    --location "West Europe" \
    --parameters @resource-group.parameters.json && \
echo "Deploying devops resources"
az group deployment create \
    --resource-group "gabresourcegroup" \
    --template-file devops.template.json \
    --parameters @devops.parameters.json