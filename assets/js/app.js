
    var tablins = document.getElementsByClassName("tabl");
    var tabcs = document.getElementsByClassName("tcontent");

    function opentab(tabname){
        for(tablin of tablins){
            tablin.classList.remove("active-link");
        }
        for(tabc of tabcs){
            tabc.classList.remove("t-act");
    }
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("t-act");
}



