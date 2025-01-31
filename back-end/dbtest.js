const mysql= require('mysql2');

const connection = mysql.createConnection({
    host:'127.0.0.1',
    user:'Host',
    password:'pswd',
    database:'fullstack_form'
});

connection.connect(function(err){
    if(err) throw err;
    console.log('Conectado papu');
});