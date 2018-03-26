//========> SIMPLE OBJECTS

//var user = {
//    name: "Mohammad Kashif",
//    age: 25,
//    isAdmin: true
//};
//console.log('user ===>', user);
//
//function checkAdmin(){
//    if(user.isAdmin){
//        console.log("Yes admin!")
//    } else {
//        console.log("No admin")
//    }
//}
//
//checkAdmin();
//
//user.isAdmin = false;
//checkAdmin();
//console.log('user ===>', user);

//========> PLANS OBJECTS
var plans = {
    plan1: {name: "Basic", price: 3.99},
    plan2: {name: "Professional", price: 5.99},
    plan3: {name: "Ultimate", price: 7.99}
};

//console.log('plans.plan2.price****');
//console.log(plans.plan2.price);
plans.plan1.space = "40GB";


plans.plan4 = {name: "Premium", price: 8.99};

plans.plan1.name = "Aasan Package";

//delete plans.plan3;

//console.log(plans);
//delete plans.plan1.name;

plans.plan3.discountMonths = false;
//console.log('plans**');
//console.log(plans);

var discountExist = 'discountMonths' in plans.plan3;
//console.log('discountExist');
//console.log(discountExist);

var sum = {
    add: function(x, y){
        return x + y;
    },
    sub: sub,
    multiply: multiply
};


function sub(x, y){
    return x - y;
}

function multiply(x, y) {
    return x * y;
}



console.log(sum.multiply(3, 5));