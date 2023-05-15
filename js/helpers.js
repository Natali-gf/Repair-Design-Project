const helpers = {
	//remove current class
	removeCurrentClass:	function removeCurrentClass(index) {
			for (let i = 1; i < arguments.length; i++) {
				arguments[i][index].classList.remove(arguments[++i]);
			}
		},

	//remove all current class
	removeAllCurrentClass: function removeAllCurrentClass(array, currentclassName){
			array.forEach((elem) => {
				if (elem.classList.contains(currentclassName)){
					elem.classList.remove(currentclassName);
				}
			});
		},
}

export const removeCurrentClass = helpers.removeCurrentClass;
export const removeAllCurrentClass = helpers.removeAllCurrentClass;