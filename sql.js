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

function run(callback){
connection.query('SELECT * FROM sql_store.customers where first_name = "Babara" ', function (error, results, fields) {
    if (error)
        throw error;

    results.forEach(result => {
        callback(error, result, fields);
        
    });
});
}

run(function(err, data, fl){
    console.log(data);
});


connection.end();