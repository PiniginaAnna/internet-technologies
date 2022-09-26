// 1a
// Заполните новый массив (result) числами из старого (arr). Количество элементов в массиве можно получить как arr.length, а 
// к элементам обращаемся все так же: arr[0], arr[1] и тд.Должен получиться точно такой же массив.

function newArray(arr) {
    result = [];
    for (let i = 0; i < arr.length; i++) {
        result.push(arr[i])
    }
    return result
}


console.log(newArray([5, 10, 'Shopping', 20, 'Homework']))


// 1b
// Измените массив [5, 10, 'Shopping', 20, 'Homework'] так, чтобы все числа были увеличены в 2 раза, а если попадается 
// строка строка - то к ней было добавлено " - done". Для определения типа данных используйте typeof(); Должно получиться: 
// [ 10, 20, 'Shopping - done', 40, 'Homework - done' ]

function changeArray(arr) {
    result = [];
    for (let i = 0; i < arr.length; i++) {
        typeof(arr[i]) == 'number' ? element = arr[i] * 2 : 
        typeof(arr[i]) == 'string' ? element = arr[i] + ' - done' : 
        element = arr[i];
        result.push(element)
    }
    return result
}


console.log(changeArray([5, 10, 'Shopping', 20, 'Homework']))


// 1c
// Разверните массив наоборот при помощи цикла и запишите данные в массив result. Должно получиться: [ 'Homework', 20, 
// 'Shopping', 10, 5 ]

function reverseArray(array) {
    result = [];
    for (let i = 0; i < array.length; i++) {
        result.unshift(array[i])
    }
    return result
}


console.log(reverseArray([5, 10, 'Shopping', 20, 'Homework']))


// 2
// Создайте функцию, которая будет принимать в себя 2 аргумента, оба числа. Первое число - это база, второе число - это 
// сколько раз нужно будет повторить это число в прогрессии. Функция должна возвращать строку (или число в особых случаях, о 
// которых ниже), где эти числа идут по порядку, разделенные тремя дефисами "---". После последнего числа их не должно быть. 
// Если второй аргумент не является числом, равен или меньше нуля - то возвращать просто первый аргумент. (Проверяем через 
// оператор typeof).

function getMathResult(step, iterations) {
    if (typeof(iterations) == 'number' & iterations > 0) {
        reslut = String(step);
        for (let i = 2; i <= iterations; i++) {
            reslut = reslut + '---' + step * i;
        }
        return reslut
    }
    else {
        return step
    }
}


console.log(getMathResult(5, 3))  // даст ответ 5---10---15
console.log(getMathResult(3, 10))  // даст ответ 3---6---9---12---15---18---21---24---27---30
console.log(getMathResult(10, 5))  // даст ответ 10---20---30---40---50
console.log(getMathResult(10, '5'))  // даст ответ 10
console.log(getMathResult(10, 0))  // даст ответ 10
console.log(getMathResult(20, -5))  // даст ответ 20
