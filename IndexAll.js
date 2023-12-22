function getIndexAll(list, input) {
    var firstIndex = list.indexOf(input);
    var lastIndex = list.lastIndexOf(input) + 1;
    var outputList = [];

    while (firstIndex < lastIndex) {
        if (findValue == findArray[firstIndex]) {
            outputList.push(firstIndex);
        }
        firstIndex++;
    }
    return outputList;
}
