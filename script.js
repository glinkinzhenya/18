// Написать функцию, которая принимает как аргумент(параметр) два массива и сравнивает суммы всех ЧИСЛОВЫХ элементов.
// Тот массив, сумма которого большая – должен вернутся функцией.

//     Пример:
// a = [1, 2, 3, 'hello', 4, 5] => summA = 15
// b = [1, 2, 3, true, 4, undefined, 6] => summB = 16
// if (summA < summB) => return b

const a = [1, 4, 3, 'hello', 4, 5]
const b = [1, 1, 3, true, 44, undefined, 6]

function comparison(arrOne, arrTwo) {
    let summA = 0;
    let summB = 0;
    let length = 0;

    const arrThrre = [arrOne, arrTwo];

    length = arrOne.length > arrTwo.length ? arrOne.length : arrTwo.length;

    for (let i = 0; i < length; i++) {
        if (typeof (arrThrre[0][i]) === 'number') {
            summA += arrThrre[0][i];
        } if (typeof (arrThrre[1][i]) === 'number') {
            summB += arrThrre[1][i];
        }
    }

    if (summA < summB) {
        return b;
    } else {
        return a;
    }
}

console.log(comparison(a, b));



