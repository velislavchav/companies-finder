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