function getIndexAll(list, input) {
	var findArray = list;
	var findValue = input;
	var firstIndex = findArray.indexOf(findValue);
	var lastIndex = findArray.lastINdexOf(findValue);
	var outputList = [];

	while (firstIndex < lastIndex) {
		if (findValue == findArray[firstIndex]) {
			outputList.push(firstIndex);
		}
		firstIndex++;
	}
	return outputList;
}
