export const getCompanies = (searchedText) => {
  return fetch("/api/search?query=" + searchedText)
    .then((data) => data.json())
    .then(({ data }) => {
      return data;
    })
}

export const getCompanyBasicInformation = (id) => {
  return fetch("/api/company/basics/" + id)
    .then((data) => data.json())
    .then(({ data }) => {
      return data;
    })
}

export const getCompanyHighlights = (id) => {
  return fetch("/api/company/highlights/" + id)
    .then((data) => data.json())
    .then(({ data }) => {
      return data;
    })
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