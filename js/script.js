var firstContent = document.getElementById("first-content");    // Get the dom of the first card(About Me)
var secondContent = document.getElementById("second-content");  // Get the dom of the second card(Documentation & Assessment)
var thirdContent = document.getElementById("third-content");    // Get the dom of the third card(Course Reflection)
var forthContent = document.getElementById("forth-content");    // Get the dom of the forth card(Other Work)

/**
 * Logical function of switching tabs in the course reflection window
 */
function switchCourseTabs(){
    let courseTabs = document.getElementsByClassName("c-tab");
    for (let i = 0; i < courseTabs.length; i++) {
        courseTabs[i].addEventListener("click", function() {
        if (this.getAttribute("id") == "c-tab1"){
            let expection = document.getElementById("expection");
            document.getElementById("learning").style.display = "none";
            document.getElementById("improve").style.display = "none";
            expection.style.display = "block";
        }else if (this.getAttribute("id") == "c-tab2"){
            let expection = document.getElementById("learning");
            document.getElementById("expection").style.display = "none";
            document.getElementById("improve").style.display = "none";
            expection.style.display = "block";
        }else{
            let expection = document.getElementById("improve");
            document.getElementById("learning").style.display = "none";
            document.getElementById("expection").style.display = "none";
            expection.style.display = "block";
        }
        let current = document.getElementsByClassName("c-active");
        current[0].className = current[0].className.replace(" c-active", "");
        this.className += " c-active";
        });
    }
}


/**
 * Logical function of switching tabs in the assessment reflection window
 */
function switchAssessmentTabs(){
    let courseTabs = document.getElementsByClassName("a-tab");
    for (let i = 0; i < courseTabs.length; i++) {
        courseTabs[i].addEventListener("click", function() {
        if (this.getAttribute("id") == "a-tab1"){
            let expection = document.getElementById("exploration");
            document.getElementById("project").style.display = "none";
            document.getElementById("portfolio").style.display = "none";
            expection.style.display = "block";
        }else if (this.getAttribute("id") == "a-tab2"){
            let expection = document.getElementById("project");
            document.getElementById("exploration").style.display = "none";
            document.getElementById("portfolio").style.display = "none";
            expection.style.display = "block";
        }else{
            let expection = document.getElementById("portfolio");
            document.getElementById("exploration").style.display = "none";
            document.getElementById("project").style.display = "none";
            expection.style.display = "block";
        }
        let current = document.getElementsByClassName("a-active");
        current[0].className = current[0].className.replace(" a-active", "");
        this.className += " a-active";
        });
    }
}

switchCourseTabs();
switchAssessmentTabs();

/**
 * Pop up event of the first card
 */
function firstPopUp(){
    popUp(firstContent);
}
function firstCancelPopUp(){
    cancelPopUp(firstContent);
}

/**
 * Pop up event of the second card
 */
function secondPopUp(){
    let expection = document.getElementById("exploration");
    document.getElementById("project").style.display = "none";
    document.getElementById("portfolio").style.display = "none";
    expection.style.display = "block";
    popUp(secondContent);
}
function secondCancelPopUp(){
    let assessmentTabs = document.getElementsByClassName("a-tab");
    assessmentTabs[0].className = "a-tab a-active";
    for(let i = 1; i < assessmentTabs.length; i++) {
        assessmentTabs[i].className = "a-tab";
    }
    cancelPopUp(secondContent);
}

/**
 * Pop up event of the third card
 */
function thirdPopUp(){
    let expection = document.getElementById("expection");
    document.getElementById("learning").style.display = "none";
    document.getElementById("improve").style.display = "none";
    expection.style.display = "block";
    popUp(thirdContent);
}
function thirdCancelPopUp(){
    let courseTabs = document.getElementsByClassName("c-tab");
    courseTabs[0].className = "c-tab c-active";
    for(let i = 1; i < courseTabs.length; i++) {
        courseTabs[i].className = "c-tab";
    }
    cancelPopUp(thirdContent);
}

/**
 * Pop up event of the forth card
 */
function forthPopUp(){
    popUp(forthContent);
}
function forthCancelPopUp(){
    cancelPopUp(forthContent);
}

/**
 * Scale up the pop up window dynamically
 */
function popUp(domValue){
    let start = Date.now();
    let timer = setInterval(function(){
        let timePassed = Date.now() - start;
        let scaleValue = timePassed / 200;
        domValue.style.transform = "scale(" + scaleValue + ")";
        if (scaleValue >= 1) {
            clearInterval(timer);
        }
    }, 20);
}

/**
 * Scale down the pop up window dynamically after closing it
 */
function cancelPopUp(domValue){
    let start = Date.now();
    let timer = setInterval(function(){
        let timePassed = Date.now() - start;
        let scaleValue = 1 - timePassed / 200;
        domValue.style.transform = "scale(" + scaleValue + ")";
        if (scaleValue <= 0) {
            domValue.style.transform = "scale(0)";
            clearInterval(timer);
        }
    }, 20);
}