const getData = new Promise((resolve, reject) => {

    const num = Math.random() * 10;
    console.log(num);
    if (num < 5) {
        resolve({num: 10000});
    } else {
        reject('no data available');
    }
});

getData
    .then(data => console.log(data + 22))
    .catch(err => console.log('error:', err))

// console.log(getData);

// 01835094696