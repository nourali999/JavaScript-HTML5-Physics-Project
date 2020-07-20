var mysql      = require('mysql');
var connection = mysql.createConnection({
    host     : 'localhost',
    database : 'sql_store',
    user     : 'root',
    password : 'Hassan56',
});

connection.connect(function(err) {
    if (err) {
        console.error('Error connecting: ' + err.stack);
        return;
    }

    console.log('Connected as id ' + connection.threadId);
});


connection.query('SELECT * FROM sql_store.customers where first_name = "Elka"',function (error, results, fields){
    if (error)
        throw error;

    results.forEach(result => {
        //callback(error, result, fields);
        console.log(result);
        
    });
});
