
var counter = (function(){

	// Приватная	 переменная
	var _number;

	// Приватная	 фунция
	var _isInteger = function(x) {

		return (x ^ 0) === x; // Проверяет целое число или нет  и возвращает  true или false
		
	}


	var setValue = function(x) {

		if (_isInteger(x)) {
			_number = x;
		} else {
			console.log("Неверное значение");
		}
		
	}

	var increaseCounter = function() {
		_number++;
	}

	var decreaseCounter = function() {
		_number--;
	}

	var printCounter = function() {
		console.log(_number);
	}

	

	return {
		
		setValue,
		increaseCounter,
		decreaseCounter,
		printCounter

	}

}())

	counter.setValue(4.2343); // Неверное значение
	counter.printCounter();  // Undefinde так  как _number ни чего не присвоено

	counter.setValue(4);		// _number присвоится 4
	counter.increaseCounter(); 
	counter.printCounter();  // 5

	counter.increaseCounter();
	counter.printCounter();  // 6

	counter.decreaseCounter(); 
	counter.printCounter(); // 5


