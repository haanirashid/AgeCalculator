console.log("testing");

function ageCal(){

    // user Date Month and Year Values 
    var date = document.getElementById("date").value;
    var month = document.getElementById("month").value;
    var year = document.getElementById("year").value;

    //Present Date
    var newPresentDate = new Date();
    var presentYear = newPresentDate.getFullYear();
    var presentMonth = newPresentDate.getMonth() + 1;
    var presentDate = newPresentDate.getDate();
    console.log("Present Year",presentYear);
    console.log("Present Month", presentMonth);
    console.log("Presenr Date",presentDate);
    

    // User Date Of birth
    var birthDate = new Date(`${date} ${month} , ${year}`);
    console.log(birthDate);

    //User Year Of birth
    var userYear = birthDate.getFullYear();
    var userMonth = birthDate.getMonth()+1;
    console.log("User Year",userYear);
    console.log("User Month",userMonth);
    
    //Age Calculation
    var yearCal = presentYear - userYear;
    var monthCal = presentMonth - userMonth;
    console.log("Year Calcution" , yearCal);
    console.log("Month Calculation" , monthCal);
    
     //displaying on innerHTML
     var target = document.getElementById("main_target");
     target.innerHTML = `<h3>${presentDate} Days ${monthCal} Months and ${yearCal} Years</h3>`;
};

var birth = new Date("14 August , 1947");
