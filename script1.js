// JavaScript source code
const readline = require("readline");
const mysql = require("mysql2");
const connection = mysql.createConnection({
    host: "127.0.0.1",
    port: 3306,
    user: "kirulhik",
    database: "db1",
    password: "4092851002k"
});
function makerandomname() {
    var text = "";
    var possibe = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    for (var i = 0; i < 20; i++) {
        text += possible.charAt(Math.floor(Math.random() * possible.length));
    };
    return text;
};
function makerakdomgender() {
    var min = 1;
    var max = 2;
    var numm = Math.floor(Math.random() * (max - min)) + min;
    if (numm == 1) {
        return "male"
    } else return "female";
};
const r1 = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
r1.question("type ¹  \n", (value) => {
    let inputnumber = value;
    if (inputnumber == 1) {
        connection.query("CREATE DATABASE db1", function (err, result) {
            if (err) {
                return console.error("ERROR: " + err.message);
            } else {
                console.log("Database created!");
            };
        });
        connection.connect(function (err) {
            if (err) {
                return console.error("ERROR: " + err.message);
            }
            else {
                console.log("connected successfully!");
                var sql = "CREATE TABLE if not exists table1(id int primary key auto_increment, name varchar(255)not null, DoB date not null, gender varchar(255)not null)";
                connection.query(sql, function (err, result) {
                    if (err) {
                        return console.error("ERROR: " + err.message);
                    } else {
                        console.log("Table created!");
                    };
                });
            };
        });
    };
    if (inputnumber == 3) {
        connection.connect(function (err) {
            if (err) {
                return console.error("ERROR: " + err.message);
            }
            else {
                console.log("connected successfully!");
                var sql = " SELECT name, DoB, gender FROM table1 GROUP BY name, DoB";
                connection.query(sql, function (err, result) {
                    if (err) {
                        return console.error("ERROR: " + err.message);
                    } else {
                        console.log("its done!");
                    };
                });
            };
        });
    };
    if (inputnumber == 5) {
        connection.connect(function (err) {
            if (err) {
                return console.error("ERROR: " + err.message);
            }
            else {
                console.log("connected successfully!");
                var sql = "SELECT * FROM table1 WHERE gender='male' AND name LIKE 'F*'";
                connection.query(sql, function (err, result) {
                    if (err) {
                        return console.error("ERROR: " + err.message);
                    } else {
                        console.log("Its done!");
                    };
                });
            };
        });
    };
    r1.close();
});
  