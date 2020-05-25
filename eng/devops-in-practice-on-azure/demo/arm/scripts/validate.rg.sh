az deployment validate \
    --template-file resource-group.template.json \
    --location "West Europe" \
    --parameters @resource-group.parameters.json
