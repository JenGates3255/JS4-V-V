// var victimnumber = prompt("How many disater victims do you wish to enter?");

// var vicnam =[]
// var vicnum =[]
// var vicstreet=[]

// for (var i=0; i<victimnumber; i++){
// 	vicnam.push(prompt("victim name"));		
// 	vicnum.push(prompt("victim number"));
// 	vicstreet.push(prompt("victim street"));
// 		console.log(vicnam);
// 		console.log(vicnum);
// 		console.log(vicstreet);
// }
 
// var volunteers = prompt("How many volunteers do you wish to enter?")
//     var volname = []
//     var volnum = []
//     var volstreet= []

//    for (var i=0; i<volunteers; i++){
//    	volname.push(prompt("volunteer name"));
//    	volnum.push(prompt("volunteer number"));
//    	volstreet.push(prompt("volunteer street"));
//    		console.log(volname);
//    		console.log(volnum);
//    		console.log(volstreet);
//    }
// alert("victims= " + victimnumber + " volunteers= " + volunteers + " names: " + vicnam + volname);





var value = true;
var vicnam =[];
var vicnum =[];
var vicstreet=[];
while (value){
	vicnam.push(prompt("victim name"));		
	vicnum.push(prompt("victim number"));
	vicstreet.push(prompt("victim street"));
		console.log(vicnam);
		console.log(vicnum);
		console.log(vicstreet);

value = confirm("Do you want to enter another?");
}



var volunteers = true
var volnam =[]
var volnum =[]
var volstreet=[]
while (volunteers){
	volnam.push(prompt("volunteer name"));		
	volnum.push(prompt("volunteer number"));
	volstreet.push(prompt("volunteer street"));
		console.log(volnam);
		console.log(volnum);
		console.log(volstreet);

volunteers = confirm("Do you want to enter another?")
}


// victim and volunteer matching streets 
//volstreet = vicstreet
var in_need = prompt('Name a person in need');

var street;
// Find the victims street

// For each victim
for (var i = 0; i < vicnam.length; i++) {
	// If they are the person in need
	if (vicnam[i] == in_need) {
		// Save their street
        street = vicstreet[i];
	}
}

var volsOnStreet = []
// For each volunteer
for (var i = 0; i < volnam.length; i++) {
	// If they are on the same street
	if (street == volstreet[i]) {
		volsOnStreet.push(volnam[i]);
	}
}

alert('Volunteers on your street: ' + volsOnStreet.join(', '));






















