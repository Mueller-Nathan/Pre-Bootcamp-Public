// #1

function OneToTwoFiveFive() {
    var arr = [];
    for (var i = 1; 1 < 256; i++) {
        arr.push(i);
    }    
    return arr;
}


    

// #2

function sum_even_numbers() {
    var sum = 0
    for (var i = 0; i <= 1000; i++) {
        if (i % 2 == 0) {
            sum += i;
        }
    }
    return sum;
}

// #3

function sum_odd_numbers() {
    var sum = 0;
    for (var i = 1; i <= 5000; i++) {
        if (i % 2 != 0) {
            sum = sum + i;
            console.log(i);
        }
    }
    return sum;
}

// #4

function NewArray(arr) {
    var sum = 0;
    for(var i = 0; i < arr.length; i++) {
        sum = sum + arr[i];
    }
    return sum;
}

// #5

function MaxValue(arr) {
    var max = arr[0];
    for(var i = 0; i < arr.length; i++) {
        if(arr[i] > max) {
            max = arr[i]
        }
    }
    return max;
}

// #6

function findAvg(arr) {
    var sum = 0;
    for (var i = 0; i < arr.length; i++) {
        sum = sum + arr[i];    
    }
    return sum/arr.length;
}

// #7

function arrayOdd(arr) {
    var newarr = [];
    for (var i = 1; i < 50; i+=2) {
        if (i % 2 != 0) {
            newarr.push(i);
        }
    }
    return newarr;
}

// #8

function greaterthanY(arr, y) {
    var counter = 0;
    for(var i = 0; i < arr.length; i++) {
        if (arr[i] > y) {
            counter += 1;
        }
    }
    return counter;
}

// #9

function squaredArray(arr) {
    for (var i = 0; i < arr.length; i++) {
        arr[i] = arr[i] * arr[i];
    }
    return arr;
}

// #10

function negativesequalZero(arr) {
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] < 0) {
            arr[i] = 0;
        }
    }
    console.log(arr);
}

// #11

function maxMinAvg(arr) {
    var max = arr[0];
    var min = arr[0];
    var sum = 0;
    var avg = 0;

    for (var i = 0; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i]
        }
        else if (arr[i] < min) {
            min = arr[i]
        }
        sum += arr[i];
    }
    avg = sum / arr.length;
    var newarr = [max, min, avg];
    return newarr;
}

// #12

function swapValues(arr) {
    var temp = 0;

    temp = arr[0];
    arr[0] = arr[arr.length - 1];
    arr[arr.length - 1] = temp;

    return arr;
}

// #13

function numbertoString(arr) {
    for (var i = 0; i < arr.lenth; i++) {
        if(arr[i] < 0) {
            arr[i] = 'Dojo';
        }
    }
    console.log(arr);
}
