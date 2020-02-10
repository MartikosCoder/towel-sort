const oldFlat = (matrix = []) => {
    const prepared_matrix = matrix.map((elem, i) =>
        i % 2 !== 0 ? elem.reverse() : elem
    );
    return [].concat.apply([], prepared_matrix);
};

const towelSort = (matrix = []) => {
    // return oldFlat(matrix) => will do same thing in old way.
    return matrix
        .map((elem, i) => (i % 2 !== 0 ? elem.reverse() : elem))
        .flat();
};
module.exports = towelSort;
