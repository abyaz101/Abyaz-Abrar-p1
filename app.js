var coffee = {
    head: ["Coffee", "PRICE$:"],
    name: ['Mocha Frappuchino','Vanilla Late','Java Chip'],
    Mocha: ['Small $2.99','Medium $4.99','Large $7.99'],
    Vanilla: ['Small $4.99','Medium $7.99',' Large $12.99'],
    Java: ['Small $3.99','Medium $5.99',' Large $10.99']
};

document.getElementById("title").innerHTML = "~ABRAR'S PIZZA~";


document.getElementById("smalltitle").innerHTML = "WELCOME PIZZA LOVERS"


document.getElementById("fox").innerHTML = "BELOW ARE SOME CLASSIC PIZZA & PASTA OPTIONS"
document.getElementById("lola").innerHTML = "FOR SPECIAL PIZZA LOVERS"


document.getElementById("head1").innerHTML = coffee.head[0]
document.getElementById("head2").innerHTML = coffee.head[1]

document.getElementById("data1").innerHTML = coffee.name[0]

document.getElementById("data2").innerHTML = coffee.name[1]

document.getElementById("data3").innerHTML = coffee.name[2]

document.getElementById("price1").innerHTML = coffee.Mocha[0]
document.getElementById("price2").innerHTML = coffee.Mocha[1]
document.getElementById("price3").innerHTML = coffee.Mocha[2]

document.getElementById("price4").innerHTML = coffee.Vanilla[0]
document.getElementById("price5").innerHTML = coffee.Vanilla[1]
document.getElementById("price6").innerHTML = coffee.Vanilla[2]

document.getElementById("price7").innerHTML = coffee.Java[0]
document.getElementById("price8").innerHTML = coffee.Java[1]
document.getElementById("price9").innerHTML = coffee.Java[2]

