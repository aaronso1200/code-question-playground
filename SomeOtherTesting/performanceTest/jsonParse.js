    let json = require('./20082.json')

const convertToDataDict = new Promise((resolve,reject) => {
    let result = convertFormTemplateToTemplateDictionary(json)
    console.log(result)
    resolve('done')
}
)


function convertFormTemplateToTemplateDictionary(formTemplate) {
    console.log('start')
    let formTemplateDict = {}

    formTemplate.form_data.form_obj.forEach((formTemplateStep) => {
        formTemplateDict = {
            ...formTemplateDict,
            ...convertFieldListToTemplateDictionary(formTemplateStep.field_items)
        }
    })

    return formTemplateDict
}

function convertFieldListToTemplateDictionary(formFieldList) {
    var result = {};

    function templateRecurse(currArray, prop, inheritProperties) {
        let propertiesNamePassToChild = ['currency_label', 'show_in_profile'];
        currArray.forEach(currItem => {
            if (currItem.field_items && currItem.field_items.length > 0) {
                let propertiesPassToChild = new FormTemplateFieldItemDto();
                for (let propertyName of propertiesNamePassToChild) {
                    if (inheritProperties[propertyName]) {
                        propertiesPassToChild[propertyName] = inheritProperties[propertyName];
                    } else if (currItem[propertyName] !== undefined) {
                        propertiesPassToChild[propertyName] = currItem[propertyName];
                    }
                }
                templateRecurse(currItem.field_items, currItem.id, propertiesPassToChild);
            } else {
                for (let property of Object.keys(inheritProperties)){
                    if (currItem[property] === undefined){
                        currItem[property] = inheritProperties[property]
                    }
                }
                result[prop ? `${prop}.${currItem.id}` : currItem.id] = currItem;
            }
        });
    }

    templateRecurse(formFieldList, '', {});
    return result;
}


// Promise.all(Array(10000).fill(convertToDataDict)).then((result)=> {
//     console.log(result)
//     console.log('Success')
// })

console.log(json)