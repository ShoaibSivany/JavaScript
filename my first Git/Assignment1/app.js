// Q1
// var name = prompt("Enter your name","John Ducket");
// alert("Welcome "+name);

// Q2

// var tableNumber = +prompt("Enter table number","0");
// var count = 1;

// document.write("Multiplication of "+tableNumber+"<br/>");
// document.write(tableNumber + " * " + count + " = " + tableNumber*count++ + "<br/>" );
// document.write(tableNumber + " * " + count + " = " + tableNumber*count++ + "<br/>" );
// document.write(tableNumber + " * " + count + " = " + tableNumber*count++ + "<br/>" );
// document.write(tableNumber + " * " + count + " = " + tableNumber*count++ + "<br/>" );
// document.write(tableNumber + " * " + count + " = " + tableNumber*count++ + "<br/>" );
// document.write(tableNumber + " * " + count + " = " + tableNumber*count++ + "<br/>" );
// document.write(tableNumber + " * " + count + " = " + tableNumber*count++ + "<br/>" );
// document.write(tableNumber + " * " + count + " = " + tableNumber*count++ + "<br/>" );
// document.write(tableNumber + " * " + count + " = " + tableNumber*count++ + "<br/>" );
// document.write(tableNumber + " * " + count + " = " + tableNumber*count++ + "<br/>" );

// Q3
// var cityName = prompt("Enter your city name","ISB");
//
// if(cityName.toLowerCase() === "karachi")
//     {alert("Welcome to the city of lights");}

// Q4
// var gender = prompt("Enter your gender");
// if (gender.toLowerCase() === "male")
//     {alert("Good morning Sir");}
// if (gender.toLowerCase() === "female")
//     {alert("Good morning Ma'am");}

// Q5
// var trafficColorName = prompt("Enter traffic signal color");     
// if(trafficColorName.toLowerCase() === "red")
// {alert("vehicles must stop");}
//  if(trafficColorName.toLowerCase() === "yellow")
// {alert("vehicles should get ready to move");}
//  if(trafficColorName.toLowerCase() === "green")
// {alert("vehicles can move now");}

// Q6
// var maxAge = prompt("Enter max age");
// var currentAge = prompt("Enter current age");
// if(maxAge>currentAge)
// {alert("You are welcome");}

// Q8
// var fuel = prompt("Enter fuel(in litres)");
// if(fuel<0.25)
// {alert("Please refill the fuel in your car");}

// Q9
// var noOfSubjects = 3;
// var marksObtained = +prompt("Enter obtained marks in " + noOfSubjects + " subjects");
// var totalMarks = 300;
// var percentage = ((marksObtained/totalMarks)*100); 
// var grade;
// if(percentage >= 80 && percentage <= 100)
// {grade = ("A-one grade | Excellent");}
// else if(percentage < 80 && percentage >= 70)
// {grade = ("A grade | Good");}
// else if(percentage < 70 && percentage >= 60)
// {grade = ("B grade | You need to improve");}
// else
// {grade = ("Fail | Sorry");}

// document.write("Total Marks : "+totalMarks+"<br/>");
// document.write("Marks Obtained : "+marksObtained+"<br/>");
// document.write("Percentage : "+percentage+"%"+"<br/>");
// document.write("Grade : "+grade);

// Q10
// var item1 = prompt("Name of item1");
// var price1 = +prompt("Price of item1");
// var item2 = prompt("Name of item2");
// var price2 = +prompt("Price of item2");
// var order1 = +prompt("Ordered quantity of 1");
// var order2 = +prompt("Ordered quantity of 2");
// var charges = +prompt("Shipping charges");

// document.write("<h1>Shopping Cart</h1>"+"<br/>")
// document.write("Quantity of "+item1+ "is " + order1 + "<br/>")
// document.write("Quantity of "+item2+ "is " + order2 + "<br/>")
// document.write("Shipping charges "+charges+"<br/>");
// document.write("Total "+(price1*order1 + price2*order2)+"<br/>");
// if( (price1*order1 + price2*order2) > 2000 )
// {document.write("Discounted Price : "+((price1*order1 + price2*order2) - (((price1*order1 + price2*order2) * 10) / 100)));}

// Q11
// var guessedNum = +prompt("Guess a number");
// var secretNum = 5;

// if(guessedNum === 5)
// {alert("Bingo");}
// else if(guessedNum === secretNum +1 || guessedNum === secretNum -1)
// {alert("You are close to the number");}
// else
// {alert("Wrong guessed!");}

// Q12
// var num = prompt("Enter a number");
// if(num%3==0)
// {alert("Num is divisible by 3");}
// else
// {alert("Not divisible by 3")}