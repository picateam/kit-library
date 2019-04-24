'use strict';

var main = {
    init() {
        return new Promise((resolve, reject) => {
            resolve(123);
        })
        // return '123';
    }
};

module.exports = main;
