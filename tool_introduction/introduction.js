/*
ex:

document.getElementById("fitness_calculator").addEventListener("click",function(){//點擊button頁面會導到calculator_page.html
    window.location.href = "../fitness_calculator/calculator_page.html";
    
}); 

*/

document.getElementById("fitness_calculator").addEventListener("click",function(){//點擊button頁面會導到calculator_page.html
    window.location.href = "../fitness_calculator/calculator_page.html"});

document.getElementById("home").addEventListener("click",function(){//點擊button頁面會導到calculator_page.html
    window.location.href = "../main_page/main_page.html"});
    
document.getElementById("Tools").addEventListener("change", function() {//點擊button會將頁面下滑到指定區域
    var selectedValue = document.getElementById("Tools").value;
    var targetElement;
    
    if (selectedValue === "Cable") {
        targetElement = document.getElementById("Cable_single");
    } else if (selectedValue === "Bell") {
        targetElement = document.getElementById("Bell_multi");
    }
    
    if (targetElement) {
        targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }});