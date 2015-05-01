# coffeeShopApp
Application for searching a coffee shop

ToRun it:
npm install
bower install
grunt serve

To get the Sample data (if you have a local host with couchDB):
grunt deployCouch


It is possible to update the mapreduce manually or by using Erica.
cd into the file "CouchDB_structure" and use: $erica push . http://admin:none@localhost:5984/coffee_shops.

How to install Erica, reference here --> https://github.com/benoitc/erica