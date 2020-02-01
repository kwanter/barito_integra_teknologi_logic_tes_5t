function stocks(){
    var price = document.forms[0].elements['text[]'];
    var result = process(price);
    alert(result);
}

function process(day){   
    var tmp_profit;
    var profit = 0;

    for(var i=0;i<day.length;i++){  
        for(var j=i;j<day.length;j++){
            if(j+1 == day.length)
                break;

            tmp_profit = day[j+1].value - day[i].value;

            if(tmp_profit > profit){
                profit = tmp_profit;
            }
        }
    }
    
    if(profit == 0)
        profit = "Harga Selalu Turun";
    else
        profit = "Best Profit : "+profit;

    return profit;
}