'use strict';


let personalPlanPeter = {
    experience: '1 month',
    programmingLangs: {js: 20, php: 10},
    age: 27,
    languages: ['Ru, eng']
};


// 1) Напишите функцию showExperience, которая будет принимать в себя объект со всеми данными и возвращать строку с опытом.
// Пример:
// showExperience(personalPlanPeter) => '1 month'
// P.S. используйте деструктуризацию


function showExperience(obj) {
    const {experience} = obj;
    return experience;
}

console.log(showExperience(personalPlanPeter));


// 2) Напишите функцию showProgrammingLangs, которая будет принимать в себя объект со всеми данными и возвращать строку в 
// нужном виде.
// Пример:
// showProgrammingLangs(personalPlanPeter)  =>
// "Язык js изучен на 20% Язык php изучен на 10%"
// Причем функция должна работать вне зависимости от количества языков. Если ни один не указан, то возвращается пустая 
// строка.
// P.S. Для переноса строки используется \n в конце строки.


function showProgrammingLangs(obj) {
    for (let lang in obj.programmingLangs) {
        console.log(`Язык ${lang} изучен на ${obj.programmingLangs[lang]} %`);
    }
}

showProgrammingLangs(personalPlanPeter);


// 3) Создайте метод showAgeAndLangs внутри объекта personalPlanPeter. При его вызове метод будет принимать в себя объект 
// и возвращать строку в нужном виде.
// Пример:
// personalPlanPeter.showAgeAndLangs(personalPlanPeter)
// => 'Мне 29 и я владею языками: RU ENG'
// Заметьте, что возраст и языки подставляются автоматически из объекта, а языки всегда в верхнем регистре (большими 
// буквами). Если данные в объекте поменяются, то и сообщение тоже изменится.


const showAgeAndLangs = function() {
    let upperLanguages = [];
    for (let i = 0; i < this.languages.length; i++) {
        upperLanguages.push(this.languages[i].toUpperCase());
    }
    console.log(`Мне ${this.age} лет и я владею языками: ${upperLanguages}`);
}

personalPlanPeter.showAgeAndLangs = showAgeAndLangs;
personalPlanPeter.showAgeAndLangs();
