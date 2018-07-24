# Till tech test

We want to sell tills to local hipster coffee shop who are finally embracing the 21st century. We need a new till to replace their vintage machines - unfortunately, hipster staff are too cool to learn a new system, so we need you to build something that they will understand.

This program is written using Node.js, ES6, and is tested with Jasmine.

### Specification

This is what a sample receipt looks like:

![a receipt](/images/receipt.jpg)

### Approach

I decided fairly early that I would create 3 classes, the till, the printer, and the shop. The till is responsible for processing an order, and can ask for a receipt from the printer class, which is responsible for printing receipts. The shop class is responsible for knowing its own details such as shop name, address, number, tax, menu etc.

Currently I think my printer class is responsible for too much. It makes calculations, manipulates the total, incorporates tax etc. These should not be the responsibility of the printer, so I would like to move them either to the till class, or create a new processor class to handle this functionality. I also need to add the date and time of the transaction to the printed receipt.

I began by incorporating the hipstercoffee.json file into the shop class, allowing me access to each menu item and its respective price.

I then created the till class and printer class. Initially, the till class held the information about the shop, however I decided fairly early on that this information is not relevant to the till, and so moved it to a shop class.

Currently, the till can process any number of orders that get added to a basket array. When the till asks the printer for a receipt, it tells the printer the name of the customer, the cash they have given, the shop, and the current basket. The printer uses this information to work out the correct totals, and returns a pretty printed receipt with all the relevant information. I have completed version 1 of this tech test, and half of version 2.

### User Stories:

```
As a User,
So that I can know what is on offer at the shop,
I would like to be able to view the menu
```

```
As a User,
So that I do not have to do the mental math,
I would like to be able to automate the tallying of a customers items
```

```
As a User,
So that I can check with the customer that I have processed everything,
I would like to view the current order
```

```
As a User,
So that I can give the customer information about their order,
I would like to be able to view a receipt
```

### Version 1

Implement a system that contains the business logic to produce receipts similar to this, based on a `json` price list and test orders. A sample `.json` file has been provided with the list of products sold at this particular coffee shop.

Here are some sample orders you can try - whether you use this information is up to you:

> **Jane**  
> 2 x Cafe Latte  
> 1 x Blueberry Muffin  
> 1 x Choc Mudcake  
>
> **John**  
> 4 x Americano  
> 2 x Tiramisu  
> 5 x Blueberry Muffin  

Your receipt must calculate and show the correct amount of tax (in this shop's case, 8.64%), as well as correct line totals and total amount. Do not worry about calculating discounts or change yet. Consider what output formats may be suitable.

### Version 2

- Add functionality to take payment and calculate correct change.  
- Add functionality to handle discounts - in this example, a 5% discount on orders over $50, and a 10% muffin discount.

### Version 3

Implement an user interface that can actually be used as a till.
