class SortedList {
	constructor(items, length) {
		this.items = [];
		this.length = 0;
	}
	// The add(item) method should add the value item to the items array, ensuring that the items array stays sorted in ascending order. What does this mean? Well, if an array of items has these elements: [2, 5, 7], and if 6 is added, the array of items should be as follows: [2, 5, 6, 7].
	// Here you should also make sure that the length property gets updated accordingly when new items are added to the list.
	add(item) {
		this.items.push(item);
		this.items.sort((a, b) => a - b);
		this.length += 1;
	}
	// The get(pos) method will get the value at index pos in the list.
	// Example: if an instance of SortedList has elements: [2, 5, 7], when get(2) called, return should be 7 since this is element in that position in the array. Check the tests to see more examples.
	// In addition, make sure you throw an error with the message OutOfBounds if a user tries to get an element in the non-existing position (e.g. if the array has 5 elements and we are trying to get the element on the position 7).
	get(pos) {
		if (this.items.at(pos) === undefined) {
			throw new Error("OutOfBounds");
		}
		return this.items.at(pos);
	}
	// The max() method should return the highest value of the array.
	// In case you have an empty SortedList, you must throw an error with the message "EmptySortedList". For this, you can use:
	// throw new Error("EmptySortedList");
	max() {
		if (this.length === 0) {
			throw new Error("EmptySortedList");
		}
		return Math.max(...this.items);
	}

	min() {
		if (this.length === 0) {
			throw new Error("EmptySortedList");
		}
		return Math.min(...this.items);
	}

	sum() {
		if (this.length === 0) {
			return 0;
		}
		return this.items.reduce((acc, cv) => acc + cv);
	}

	avg() {
		return this.items.reduce((acc, cv) => acc + cv) / this.length;
	}
}

module.exports = SortedList;
