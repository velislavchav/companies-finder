export const getCorrectInformation = (informationForExtracting) => {
    if (isObject(informationForExtracting)) {
        let result = "";
        Object.values(informationForExtracting).forEach(insObjValue => {
            if (!isArray(insObjValue) && typeof insObjValue === 'string' || insObjValue instanceof String) {
                result = insObjValue;
                return result;
            }
        })
        return result;
    } else if (!isObject(informationForExtracting) && !isArray(informationForExtracting)) {
        return informationForExtracting;
    }
}

const isObject = (informationForExtracting) => {
    return typeof informationForExtracting === 'object' && informationForExtracting !== null && !Array.isArray(informationForExtracting) ? true : false;
}

const isArray = (informationForExtracting) => {
    return typeof informationForExtracting === 'object' && informationForExtracting !== null && Array.isArray(informationForExtracting) ? true : false;
}