# Cinefile
An app to locally store films that you have watched

## What to know before running
1. If you don't already have it, [install npm](https://www.npmjs.com/get-npm).
   * You can check if you have npm on your machine by running `npm -v`
2. Our application is NOT responsive, please run on a 1024px screen or larger

## How to install
1. Open films.sql and run it!
2. In terminal, navigate to the root of this project (inside cinefile) and run `npm install`
3. Set your MySQL password to null, you can do so by running the following in MySQL
   * `ALTER USER 'root'@'localhost' IDENTIFIED BY '';`
   * `ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY '';`
4. In terminal, run `nodemon index.js`. Make sure you are still at the root of the project. You should see the following messages in terminal
   * Terror from the Port :5000 connected
   * Connected!
5. In a new tab of terminal, navigate to the root again and now run `npm start`
6. This should happen automatically, but if not, navigate to `localhost:3000` on your web browser to access Cinefile
