var indexAll = function(list,input) {
	this.list = list;
	this.input = input;
};

indexAll.prototype.IndexAll = function (array, input, firstOccur, lastOccur) {
	var findArray = array;
	var findValue = input;
	var firstIndex = firstOccur;
	var lastIndex = lastOccur;
	var outputList = [];

	while (firstIndex <= lastIndex) {
		if (findValue == findArray[firstIndex]) {
			outputList.push(firstIndex);
		}
		firstIndex++;
	}
	return outputList;
}

indexAll.prototype.getIndexAll = function (list, input) {
	var firstOccur = list.indexOf(input);
	var lastOccur = list.lastIndexOf(input);
	return myObj.IndexAll(list, input, firstOccur, lastOccur);
}

// var list = Array.from({ length: 10000 }, (_, i) => i % 100);
// var list = [12, 3, 5, 67, 89, 1223, 55, 3, 69, 54, 3, 5, 897, 785, 5 , 785];
// var input = 5;
// var myObj = new indexAll(list,input);

//console.log(myObj.getIndexAll(list,input));
