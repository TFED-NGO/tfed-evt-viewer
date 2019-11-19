export interface Map<T> {
    [key: string]: T;
}

export function mapToArray<T>(m: Map<T>) {
    return Object.keys(m).map((id) => m[id]);
}

export function uniqueObjCharKeys<T>(m: Map<T>) {
    const keys = [];
    Object.keys(m).forEach(key => {
        if (keys.indexOf(key[0].toLowerCase()) < 0) {
            keys.push(key[0].toLowerCase());
        }
    });
    keys.sort();
    return keys;
}
export function uniqueArrayCharKeys<T>(a: string[]) {
    const keys = [];
    a.forEach(key => {
        if (keys.indexOf(key[0].toLowerCase()) < 0) {
            keys.push(key[0].toLowerCase());
        }
    });
    keys.sort((strA, strB) => strA.toLowerCase().localeCompare(strB.toLowerCase()));
    return keys;
}

/**
 * Performs a deep merge of objects and returns new object. Does not modify
 * objects (immutable) and merges arrays via concatenation.
 *
 * @param objects - Objects to merge
 * @returns New object with merged key/values
 */
export function mergeDeep(...objects) {
    const isObject = obj => obj && typeof obj === 'object';

    return objects.reduce((prev, obj) => {
        Object.keys(obj).forEach(key => {
            const pVal = prev[key];
            const oVal = obj[key];

            if (Array.isArray(pVal) && Array.isArray(oVal)) {
                prev[key] = [...pVal, ...oVal].filter((element, index, array) => array.indexOf(element) === index);
            } else if (isObject(pVal) && isObject(oVal)) {
                prev[key] = mergeDeep(pVal, oVal);
            } else {
                prev[key] = oVal;
            }
        });

        return prev;
    }, {});
}

export function getEventKeyCode(event) {
    let code: number | string;

    if (event.key !== undefined) {
        code = event.key;
    } else if (event.keyIdentifier !== undefined) {
        code = event.keyIdentifier;
    } else if (event.keyCode !== undefined) {
        code = event.keyCode;
    }

    return code;
}
