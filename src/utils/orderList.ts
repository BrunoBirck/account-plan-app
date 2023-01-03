export function sortList(array, order) {
    var sort = {
        asc: function (a, b) {
            var l = 0, m = Math.min(a.value.length, b.value.length);
            while (l < m && a.value[l] === b.value[l]) {
                l++;
            }
            return l === m ? a.value.length - b.value.length : a.value[l] - b.value[l];
        },
        desc: function (a, b) {
            return sort.asc(b, a);
        }
    },

        // temporary array holds objects with position and sort-value
        mapped = array.map(function (el, i) {
            return { index: i, value: el.code && el.code.split('.').map(Number) };
        });

    // sorting the mapped array containing the reduced values
    mapped.sort(sort[order] || sort.asc);

    // container for the resulting order
    return mapped.map(function (el) {
        return array[el.index];
    });
}