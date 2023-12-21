let isAnimating = false;

function start() {
    let run = document.getElementById("start");
    run.addEventListener("click", calculate, false);

    // Linking to other pages
    document.getElementById("fitness_calculator").addEventListener("click", function () {
        window.location.href = "../fitness_calculator/calculator_page.html";
    });

    document.getElementById("home").addEventListener("click", function () {
        window.location.href = "../main_page/main_page.html";
    });

    document.getElementById("fitness_equipment").addEventListener("click", function () {
        window.location.href = "../tool_introduction/introduction.html";
    });

    document.getElementById("fitness_tutorial").addEventListener("click", function () {
        window.location.href = "../tutorial_page/tutorial_page.html";
    });

    document.getElementById("fitness_demonstration").addEventListener("click", function () {
        window.location.href = "../fitness_demonstration/fitness_demonstration.html";
    });
}

function calculate() {
    let age = parseFloat(document.getElementById("age").value);
    let height = parseFloat(document.getElementById("height").value);
    let weight = parseFloat(document.getElementById("weight").value);

    if ((!document.getElementById("boy").checked && !document.getElementById("girl").checked) || !age || !height || !weight) {
        window.alert("請填寫完整");
    } else {
        let BMR;
        if (document.getElementById("boy").checked) {
            BMR = 88.362 + 13.397 * weight + 4.799 * height - 5.677 * age;
        } else if (document.getElementById("girl").checked) {
            BMR = 447.593 + 9.247 * weight + 3.098 * height - 4.330 * age;
        }
        BMR = BMR.toFixed(1);
        document.getElementById("BMR").textContent = "您的BMR = " + BMR;

        calculateAllTEDDs(parseFloat(BMR), weight);
    }
}

function calculateAllTEDDs(BMR, weight) {
    // Calculate TEDDs using the provided formulas
    let type1 = BMR * 1.2;
    let type2 = BMR * 1.375;
    let type3 = BMR * 1.55;
    let type4 = BMR * 1.725;
    let type5 = BMR * 1.9;

    displayTEDD("type1", type1);
    displayTEDD("type2", type2);
    displayTEDD("type3", type3);
    displayTEDD("type4", type4);
    displayTEDD("type5", type5);

    // Calculate nutrient intake based on weight
    let protine = weight * 1.975;
    let protine_kcal = protine * 4;
    protine = protine.toFixed(1);
    document.getElementById("protine").textContent = "蛋白攝取 = " + protine + "g";

    let fat = (BMR * 1.9) * 0.4 / 9;
    let fat_kcal = fat * 9;
    fat = fat.toFixed(1);
    document.getElementById("fat").textContent = "脂肪攝取 = " + fat + "g";

    let carbon = (BMR * 1.9 - protine_kcal - fat_kcal) / 4;
    carbon = carbon.toFixed(1);
    document.getElementById("carbon").textContent = "碳水攝取 = " + carbon + "g";

    displayNutrientValues(protine_kcal, fat_kcal, BMR);
}

function displayTEDD(elementId, value) {
    if (isAnimating) return; // 如果动画正在进行，则不执行

    const indicators = ['|', '/', '-', '\\'];
    let currentElement = document.getElementById(elementId);
    let currentText = currentElement.textContent;

    let innerIndex = 0;
    let innerIndicatorInterval = setInterval(() => {
        if (innerIndex < indicators.length) {
            currentElement.textContent = currentText + indicators[innerIndex] + ' ';
            innerIndex++;
        } else {
            clearInterval(innerIndicatorInterval);
            let teddValue = parseFloat(value).toFixed(1); // 修正这里
            let text = "";
            switch (elementId) {
                case 'type1':
                    text = "生活型態偏向座式(例如久坐、臥床、看電視) TEDD = " + teddValue + " Kcal";
                    break;
                case 'type2':
                    text = "從事不太費力的運動(例如散步、開車、烹飪) TEDD = " + teddValue + " Kcal";
                    break;
                case 'type3':
                    text = "有規律運動的習慣(例如腳踏車、健走、慢跑) TEDD = " + teddValue + " Kcal";
                    break;
                case 'type4':
                    text = "平時活動程度較高(例如打籃球、游泳、登山) TEDD = " + teddValue + " Kcal";
                    break;
                case 'type5':
                    text = "會進行高強度的訓練(例如長跑、健身、格鬥) TEDD = " + teddValue + " Kcal";
                    break;
                default:
                    break;
            }
            document.getElementById(elementId).textContent = text;
            if (elementId !== 'type5') {
                const nextType = "type" + (parseInt(elementId.slice(-1)) + 1);
                let nextValue = value;
                isAnimating = true; // 开始动画
                displayTEDD(nextType, nextValue);
            } else {
                isAnimating = false; // 结束动画
                displayNutrientValues(protine_kcal, fat_kcal, BMR);
            }
        }
    }, 100);
}

function displayNutrientValues(protine_kcal, fat_kcal, BMR) {
    let protine = protine_kcal / 4;
    let fat = fat_kcal / 9;
    let carbon = (BMR * 1.9 - protine_kcal - fat_kcal) / 4;

    document.getElementById("protine").textContent = "蛋白攝取 = " + protine.toFixed(1) + "g";
    document.getElementById("fat").textContent = "脂肪攝取 = " + fat.toFixed(1) + "g";
    document.getElementById("carbon").textContent = "碳水攝取 = " + carbon.toFixed(1) + "g";
}

window.addEventListener("load", start, false);
