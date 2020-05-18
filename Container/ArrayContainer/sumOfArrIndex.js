

const sumArrIndex = (arr1, arr2) => {
    let merge = [];
    let i = 0;
    let x = 0;

    while (i < arr1.length && i < arr2.length) {
        merge.push(arr1[i] + arr2[i]);
        i++;
    }
    if (i === arr1.length) {
        for (x = i; x < arr1.length; x++) {
            merge.push(arr1[x]);
        }
    }
    else {
        for (x = i; x < arr2.length; x++) {
            merge.push(arr2[x]);
        }
    }
    return merge;
}

console.log(sumArrIndex([1, 2, 3, 4], [5, 6, 7, 8]));