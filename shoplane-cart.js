
$.get("https://5d76bf96515d1a0014085cf9.mockapi.io/product",function(response){
    var cartresponse=response
    var cartproduct=JSON.parse(localStorage.getItem("cartproductdetails"))
    console.log(cartproduct)
    const arr = cartproduct
    const counts = {};
    arr.forEach((x) => {
      counts[x] = (counts[x] || 0) + 1;
    });
    console.log(counts)
    var cartproductid=[];
    cartproductid.push(Object.keys(counts))
    var cartproductcount=[];
    cartproductcount.push(Object.values(counts))
    console.log(cartproductid)
    console.log(cartproductcount)
    var productList=response;
     var totamount=0
    for(var i=0;i<cartproductid[0].length;i++){
      createCard( productList[cartproductid[0][i]].name ,productList[cartproductid[0][i]].price , productList[cartproductid[0][i]].preview,cartproductcount[0][i])
    }
  
    function createCard(name,price,image,countss)
    {
      console.log(name,price,image,countss)
      var leftside=document.getElementById("leftside2")
      var listcard=document.createElement("div")
      listcard.className="listcard"
      var cimage = document.createElement("img");
    cimage.className = "cimage";
    cimage.src = image;
    var cardname=document.createElement("div")
    cardname.innerText=name+" "+"X"+countss+" "+" "+"Amount:"+" "+price*countss
    var cardwrap2=document.createElement("div")
    cardwrap2.className="cardwrap2"
    var productprice=document.createElement("span")
    productprice.innerText=price
    totamount=totamount+(price*countss)
    console.log(totamount)
    var tamt=document.getElementById("amt")
    tamt.innerText=totamount
    var totalitems=document.getElementById("Totalitems")
    Totalitems.innerText=cartproductid[0].length
     leftside.appendChild(cardwrap2)
      cardwrap2.append(listcard,cardname)
      listcard.appendChild(cimage)
      
    }
    
var cnt=0
    for(i=0;i<cartproductid[0].length;i++){
      var tcnt=cartproductcount[0][i]
      cnt=cnt+tcnt
      }
  localStorage.setItem("totalcount",JSON.stringify(cnt))
  })
  var totlcnt=JSON.parse(localStorage.getItem("totalcount"))
document.getElementById("cartlist").innerText=totlcnt

function placeorder(){
  location.assign("./shoplane-order-confirmation.html")
}