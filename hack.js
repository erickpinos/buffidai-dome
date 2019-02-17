var blocks = require('./blockscout.js');

var bs = new blocks("https://blockscout.com/", "poa/dai");
/*
bs.balance("0x4d9055752eB2bF316d926BA89a3c1a2ce2B81596", function(r){
	if(r.success){
		console.log("Balance:" + r.data.toString())
	}else{
		console.log(r.error)
	}
});
*/
bs.tokenBalance("0x3E50BF6703Fc132A94E4BAfF068db2055655f11B&address", "0x5Ed286f691F0efa4DfcdFDE59cBE4957051EABb8", function(r){
    if(r.success){
//        console.log("Meatball Truck: " + r.data)
    }else{
        console.log(r.error);
    }
});

bs.tokenBalance("0x3E50BF6703Fc132A94E4BAfF068db2055655f11B&address", "0x3509Af671d26EC204c62C1561d4d505a161F93CB", function(r){
    if(r.success){
//        console.log("Gyro Truck: " + r.data)
    }else{
        console.log(r.error);
    }
});

bs.tokenBalance("0x003bd93a6d1181654922d0a0fbe940ab12c21682&address", "0x3509Af671d26EC204c62C1561d4d505a161F93CB", function(r){
    if(r.success){
//        console.log("Smoke Truck: " + r.data)
    }else{
        console.log(r.error);
    }
});


function run(){
var trucks = [
["Meatball Truck","0x5ed286f691f0efa4dfcdfde59cbe4957051eabb8"],
["Gyro Truck","0x3509af671d26ec204c62c1561d4d505a161f93cb"],
["Smoke Truck","0x003bd93a6d1181654922d0a0fbe940ab12c21682"],
["Wheels on Fire","0x390556f6665bb13011343c24944b5cbc8728543f"],
["Rollup Sushi","0x80db35b6c673d1e72e3912e279c90f07030bb434"],
["Roadrunner","0x6804c8fe37ec2e0eb00d46fa7d694214a037a581"],
["Mac N Noodles","0xc8478286ba641f3354f5b271aa481d25b78fdacb"],
["Chibby Wibbits","0x178e45fba05722cf9f80be1d775d1df86c6f571e"],
["Crock Spot","0x70bc16a6ac50e734f8d41024ce3f69bbff7c1cea"],
["Lucky Mary's Baking","0xadb098070e0d96471a117db7827de0eed0e198c4"],
["Pavy's","0x28b55fc6abb109cfee947d38d0f1e139a7ba98ae"]
];

for (var i in trucks) {
//	console.log(i);
	test(trucks[i][0],trucks[i][1]);
};

function test(name, address){
		bs.tokenTxList(address, address, function(r){
//	        console.log(trucks[i][0]);
	    if(r.success){
	        console.log(name + " Token Transfers: " + r.data)
	//        console.log(JSON.stringify(r.data))
	    }else{
	        console.log(r.error);
	    }
	});
}
/*
bs.tokenTxList("0x3509Af671d26EC204c62C1561d4d505a161F93CB", function(r){
        console.log("Gyro Truck");
    if(r.success){
        console.log("Gyro Truck Token Transfers: " + r.data);
//        console.log(JSON.stringify(r.data))
    }else{
        console.log(r.error);
    }
});

bs.tokenTxList("0x003bd93a6d1181654922d0a0fbe940ab12c21682", function(r){
        console.log("Smoke Truck");
    if(r.success){
        console.log("Smoke Truck Token Transfers: " + r.data);
//        console.log(JSON.stringify(r.data))
    }else{
        console.log(r.error);
    }
});
*/
};


function start() {
run();  // your code here
//  setTimeout(start, 3000);
  console.log(" ");
}

// boot up the first call
start();
