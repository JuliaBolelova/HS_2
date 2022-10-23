const sleep = (value) => new Promise((resolve, reject) =>  {
    setTimeout(resolve, value);
})

console.log(`Время начала ${Date(Date.now())}`);
sleep(5000).then(() => {
    console.log('Выполнилось через 5 секунд!');
    console.log(`Время окончания ${Date(Date.now())}`);
})