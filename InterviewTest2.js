var assert = require('assert');


var suites=["Clubs","Hearts","Diamonds","Spades"];
var number=['A','2','3','4','5','6','7','8','9','10','J','Q','K'];
var deck = [];
var delt_cards=[[],[]];
var playerCards = [];
var num_Players=4;




//Create Deck
function createDeck(){

for(var i=0;i<suites.length;i++){
	for(var j=0;j<number.length;j++){

		var card ={Suite:suites[i],Number:number[j]};

		deck.push(card);

	}
}
return deck;

}


//Shuffle Deck
function shuffled_Deck(myArray){



var rdm_Index;
var temp;

for(k=myArray.length-1;k>0;k--){

rdm_Index=Math.floor(Math.random()*(k+1));

temp=myArray[k];
myArray[k]=myArray[rdm_Index];
myArray[rdm_Index]=temp;



}

return myArray;

}

//Dealing the Deck
function dealDeck(myArray,num_Players){
	var num_Cards=myArray.length;
	var dealRound=Math.floor(myArray.length/num_Players);


	if(num_Cards>=num_Players){

		for(r=0;r<dealRound;r++){
			

			delt_cards[r]=new Array();

			for(n=0; n<num_Players ;n++){
				

			
				delt_cards[r][n]=myArray.shift();
							
				
			}

			
			}

				}
	
				
	
		return delt_cards;
		
}


//Display Crads for Each Player		
function displayCards(arr,n){
const arrayColumn = (arr, n) => arr.map(x => x[n]);



for(var t = 0; t < n ; t++){
var player = new Array();
player[t] = arrayColumn(arr,t);
console.log(player[t]);
console.log(player[t].length);
playerCards.push(player[t]);
}

return playerCards;
}




//--------------------------------------------------------------Unit Test-------------------------------------------------------------------
//CreateDeck

function testCreateDeck(deck) {
	{
		

//1)check 52 cards are generated
	assert.equal(deck.length,52)
	console.log("Unit test1 passed: Created deck has 52 cards")
	
}
{
	//3)no duplicate objects in deck;
	//console.log(duplicateTest(deck))
	assert.ok(duplicateTest(deck))
	console.log("Unit Test 2:No Duplicates")
}
{
	//2)check that no card has empty suite or/and number
	assert.ok(testCheckEmptyProps(deck))
	console.log("Unit Test 3:No empty objects")
}
{
	//4)there should be 13 of each suite
	assert.ok(testSuiteCount(deck,"Clubs"))
	console.log("Unit Test 4: Suite Count Correct")
}
{
	//5)there should be 4 of each Number
	assert.ok(testNumberCount(deck,"A"))
	console.log("Unit Test 5: Number Count Correct")
}


}

function testDealingUnitTest(){
	{
	//6)Dealing cards
	assert.ok(testDealing(playerCards))
	console.log("Unit Test 6: dealing is correct")
}

}


function duplicateTest(deck){
		for(var g=0;g< deck.length;g++){
			for(var h=0;h<deck.length;h++){

				if (g != h) 
                {
                    if (deck[g] == deck[h]) 
                    {
                        return false; // means there are duplicate values
                    }

				
			}
		}
		
	}
	//console.log("True")
	return true;
}

function testCheckEmptyProps(deck){
			for(var s=0;s<deck.length;s++){
				if(deck[s].Suite === null || deck[s].Number === null){
					return false;
				}
			}
			return true;

}

function testSuiteCount(deck,suite){

	var testSuiteArray = [];
		for(var b=0; b<deck.length;b++)	{
			if(deck[b].Suite == suite){
				testSuiteArray.push(deck[b]);
			}
		}
		if(testSuiteArray.length == 13){

			return true;
		}

		else
			return false;
		
	
}

function testNumberCount(deck,number){

	var testSuiteArray = [];
		for(var b=0; b<deck.length;b++)	{
			if(deck[b].Number == number){
				testSuiteArray.push(deck[b]);
			}
		}
		if(testSuiteArray.length == 4){

			return true;
		}

		else
			return false;
		
	
}

function testDealing(playerCards){

	for(a=0;a<playerCards.length;a++){
		for(y=0;y<playerCards.length;y++){
			if(a !== y){
				if(playerCards[a].length !== playerCards[y].length){
					return false;
				}
			}
		}
	}
	return true;

}



//-------------------------------------------------Running The Program-----------------------------------------------------------------------

createDeck();

testCreateDeck(deck);

shuffled_Deck(deck);

dealDeck(deck,num_Players);

displayCards(delt_cards,num_Players)

testDealingUnitTest(playerCards)






