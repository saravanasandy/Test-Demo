// //var con = (name)=>"hello" +name;
// //console.log(con("johndoe"));
// var request = new XMLHttpRequest();
// request.open("get","https://www.anapioficeandfire.com/api/books/1");
// request.send();
// request.onload = function(){
//     var data = JSON.parse(request.response);
//     console.log(`Author name : ${data.authors}
//                   ISBN : ${data.isbn}
//                   Publisher :${data.publisher}
//                   Number of pages : ${data.numberOfPages}`);
// }
var request = new XMLHttpRequest();
 request.open("get","https://raw.githubusercontent.com/rvsp/restcountries-json-data/master/res-countries.json");
 request.send();
 request.onload = function(){
   var data = JSON.parse(request.response);
   console.log(data);
   let res = data.filter((ele)=>ele.region ==="Asia");
//    console.log(res);
    let final = res.map((ele)=>ele.name);
    console.log(final);

    for(let i =0; i<res.length;i++){
        console.log(res[i].name);
    }
    
    var sum =0;
    for(let j=0; j<res.length;j++){
         sum = sum+res[j].population;
       
    }
    console.log(sum); 
 }