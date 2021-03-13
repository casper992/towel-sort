module.exports = function towelSort (matrix) {
    let finishSort = [];
    if(matrix != undefined) {
        for(let i = 0; i < matrix.length; i++) {
            if(i % 2 == 0) {
                finishSort.push(...matrix[i]);
            } else {
                finishSort.push(...matrix[i].reverse());
            }
        }
    }
    return finishSort;
}

