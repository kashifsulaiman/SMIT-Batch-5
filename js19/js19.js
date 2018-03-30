//var plans = {
//    plan1: {name: "Basic", price: 3.99, discountMonths: [2, 7]},
//    plan2: {name: "Professional", price: 5.99, discountMonths: [6, 7, 11]},
//    plan3: {name: "Ultimate", price: 9.99, discountMonths: [6, 7]}
//};
//
//function calcAnnual(planName){
//    var price, discountedMonths, annualPrice;
//    var currentMonth = new Date().getMonth();
//
//    switch (planName){
//        case 'Basic': {
//            price = plans.plan1.price;
//            discountedMonths = plans.plan1.discountMonths;
//            break;
//        }
//        case 'Professional': {
//            price = plans.plan2.price;
//            discountedMonths = plans.plan2.discountMonths;
//            break;
//        }
//        case 'Ultimate': {
//            price = plans.plan3.price;
//            discountedMonths = plans.plan3.discountMonths;
//            break;
//        }
//    }
//
//    for(var i = 0; i < discountedMonths.length; i++){
//        if(discountedMonths[i] == currentMonth){
//            alert("Discounted Price: " + price * 0.8 * 12);
//            return;
//        }
//    }
//    alert("Original Price: " + price * 12);
//}

//var plans = {
//    Basic: {name: "Basic", price: 3.99, discountMonths: [2, 7]},
//    Professional: {name: "Professional", price: 5.99, discountMonths: [6, 7, 11]},
//    Ultimate: {name: "Ultimate", price: 9.99, discountMonths: [6, 7]}
//};
//
//function calcAnnual(planName){
//    var price = plans[planName].price;
//    var discountedMonths = plans[planName].discountMonths;
//    var currentMonth = new Date().getMonth();
//
//    for(var i = 0; i < discountedMonths.length; i++){
//        if(discountedMonths[i] == currentMonth){
//            return alert("Discounted Price: " + price * 0.8 * 12);
//        }
//    }
//    alert("Original Price: " + price * 12);
//}

//
//var plan1 = {
//    name: "Basic",
//    price: 3.99,
//    space: 100,
//    transfer: 1000,
//    pages: 10,
//    discountMonths: [2, 7],
//    calcAnnual: function(percentIfDisc) {
//        var bestPrice = this.price;
//        var currDate = new Date();
//        var thisMo = currDate.getMonth();
//        for (var i = 0; i < this.discountMonths.length; i++) {
//            if (this.discountMonths[i] === thisMo) {
//                this.annualPrice = this.price * percentIfDisc;
//                break;
//            }
//        }
//        this.annualPrice = bestPrice * 12;
//    }
//};
//
//plan1.calcAnnual(0.5);
//console.log(plan1);

//Constructor Function
//function Plan(name, price, space, transfer, pages, discountMonths) {
//    console.log(this);
//    this.name = name;
//    this.price = price;
//    this.space = space;
//    this.transfer = transfer;
//    this.discountMonths = discountMonths;
//    this.pages = pages;
//    this.calcAnnual = function(percentIfDisc) {
//        var bestPrice = this.price;
//        var currDate = new Date();
//        var thisMo = currDate.getMonth();
//        for (var i = 0; i < this.discountMonths.length; i++) {
//            if (this.discountMonths[i] === thisMo) {
//                console.log("If chala", percentIfDisc);
//                this.annualPrice = this.price * percentIfDisc;
//                return;
//            }
//        }
//        this.annualPrice = bestPrice * 12;
//    }
//}
//
//var plan1 = new Plan("Basic", 3.99, 100, 1000, 10, [3, 5]);
//var plan2 = new Plan("Premium", 5.99, 500, 5000, 50);
//var plan3 = new Plan("Ultimate", 9.99, 2000, 20000, 500, [2, 5]);
//
//console.log('plan1', plan1);
//console.log('plan2', plan2);
//console.log('plan3', plan3);


////Prototypes ==============
//function Plan(name, price, transfer, pages, discountMonths) {
//    this.name = name;
//    this.price = price;
//    this.transfer = transfer;
//    this.discountMonths = discountMonths;
//    this.pages = pages;
//}
//
//Plan.prototype.space = "20GB";
//
//var plan1 = new Plan("Basic", 3.99, 1000, 10, [3, 5]);
//var plan2 = new Plan("Premium", 5.99, 5000, 50);
//var plan3 = new Plan("Ultimate", 9.99, 20000, 500, [2, 5]);
//
//Plan.prototype.calcAnnual = function(percentIfDisc) {
//    var bestPrice = this.price;
//    var currDate = new Date();
//    var thisMo = currDate.getMonth();
//    for (var i = 0; i < this.discountMonths.length; i++) {
//        if (this.discountMonths[i] === thisMo) {
//            console.log("If chala", percentIfDisc);
//            this.annualPrice = this.price * percentIfDisc;
//            return;
//        }
//    }
//    this.annualPrice = bestPrice * 12;
//};
//
//
//plan1.calcAnnual(0.8);
//
//
////plan1.space = "30 GB";
//
//console.log('plan1.space');
//console.log(plan1.space);
//
//console.log('plan2.space');
//console.log(plan2.space);
//
//console.log('plan1', plan1);
//console.log('plan2', plan2);
//console.log('plan3', plan3);
//
//
//for(var key in plan1){
//    console.log('key****', key);
//    console.log('value****', plan1[key]);
//}