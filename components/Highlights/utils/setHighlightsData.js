export const makeKeysToUI = (keyString) => {
    return keyString.replaceAll("_", " ");
}

export const sortHighlights = (highlightsJson) => {
    const objKeys = Object.keys(highlightsJson);
      objKeys.forEach(key => {
        highlightsJson[key]["key"] = key; //add the keys in the object
      })
  
      return Object.values(highlightsJson).sort((a, b) => {
        const priorityClassification = ["negative", "positive", "neutral"]
  
        if (priorityClassification.indexOf(a.classification) < priorityClassification.indexOf(b.classification)) {
          return -1;
        } else if (priorityClassification.indexOf(a.classification) > priorityClassification.indexOf(b.classification)) {
          return 1;
        } else if (a.weight > b.weight) {
          return - 1;
        } else if (a.weight < b.weight) {
          return 1;
        }
        return 0;
      }) //sorting the objects
  }