function csvArray(csv){
    // split csv data into separate lines
    var lines=csv.split("\n");
    // initiate result array
    var result = [];
    // identift header keys
    var headers=lines[0].split(",");
    // loop to matach keys with values
    for(var i=1;i<lines.length;i++){
        
        var obj = {};
        var currentline=lines[i].split(",");
        // for each value match with corresponding key
        for(var j=0;j<headers.length;j++){
            // Add to obj
            obj[headers[j]] = currentline[j];
        }
        // push obj to result
        result.push(obj);
  
    }
  
    //return result; //JavaScript object
    return result;
  }
  
  var csvData = `product, price, review, in_stock
  Gold Romeo Square Hoops, 85.00, Stunning! I love them., true,
  Gold Siren Hoops, 110.00, , false,
  Half Moon Pearl Earrings, 70.00, Delightful! Dressy without being garish., true`;
  
  console.log(csvArray(csvData));