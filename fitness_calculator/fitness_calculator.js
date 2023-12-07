function start()
{
    let run = document.getElementById("start");
    run.addEventListener("click",calculate,false);
    document.getElementById("fitness_calculator").addEventListener("click",function(){//點擊button頁面會導到calculator_page.html
        window.location.href = "calculator_page.html";
    });
    document.getElementById("home").addEventListener("click",function(){//點擊button頁面會導到main_page.html
        window.location.href = "../main_page/main_page.html";
    });
}

function calculate()
{
    let ageblock = document.getElementById("age");
    let age = ageblock.value;
    console.log(" age = " + age);
    let heightblock = document.getElementById("height");
    let height = heightblock.value;
    console.log(" height = " + height);
    let weightblock = document.getElementById("weight");
    let weight = weightblock.value;
    console.log(" weight = " + weight);
    //獲得必要參數(有很多空間可以優化)
    //變數代表甚麼如果有問題可以再問我

    if((!document.getElementById("boy").checked && !document.getElementById("girl").checked) || !age || !height || !weight )
    {
        window.alert("請填寫完整");
    }

    else if(document.getElementById("boy").checked)
    {
        //上方BMR計算
        let BMR = 88.362 + 13.397 * weight + 4.799 * height - 5.677 * age;
        BMR = BMR.toFixed(1); //四捨五入到小數點第一位
        document.getElementById("BMR").textContent= "您的BMR = " + BMR;

        let type1 = BMR *1.2;
        type1 = type1.toFixed(1)//四捨五入到小數點第一位
        document.getElementById("type1").textContent= "生活型態偏向座式(例如久坐、臥床、看電視) TEDD = " + type1 + " kcal";
        //type1(BMR*1.2);

        let type2 = BMR *1.375;
        type2 = type2.toFixed(1)//四捨五入到小數點第一位
        document.getElementById("type2").textContent= "從事不太費力的運動(例如散步、開車、烹飪) TEDD = "+ type2 + " kcal";
        //type2(BMR*1.375);

        let type3 = BMR *1.55;
        type3 = type3.toFixed(1)//四捨五入到小數點第一位
        document.getElementById("type3").textContent= "有規律運動的習慣(例如腳踏車、健走、慢跑) TEDD = "+ type3 + " kcal";
        //type3(BMR*1.55);

        let type4 = BMR *1.72;
        type4 = type4.toFixed(1)//四捨五入到小數點第一位
        document.getElementById("type4").textContent= "平時活動程度較高(例如打籃球、游泳、登山) TEDD = "+ type4 + " kcal";
        //type4(BMR*1.72);

        let type5 = BMR *1.9;
        type5 = type5.toFixed(1)//四捨五入到小數點第一位
        document.getElementById("type5").textContent= "會進行高強度的訓練(例如長跑、健身、格鬥) TEDD = "+ type5 + " kcal";
        //type5(BMR*1.9);
        console.log("BMR = " + BMR);

        //下方div計算==================================================================================================

        let protine = weight * 1.975 ;
        let protine_kcal = protine*4;
        protine = protine.toFixed(1);
        document.getElementById("protine").textContent = "蛋白攝取 = " + protine +"g";
        console.log("protine = " + protine);
        //蛋白質攝取 

        let fat =  (BMR * 1.9) * 0.4 / 9 ;
        let fat_kcal = fat*9;
        fat = fat.toFixed(1)
        document.getElementById("fat").textContent = "脂肪攝取 = " + fat +"g";
        console.log("fat = " + protine);
        //脂肪攝取

        let carbon = (BMR*1.9 - protine_kcal - fat_kcal) / 4;
        carbon = carbon.toFixed(1);
        document.getElementById("carbon").textContent = "碳水攝取 = " + carbon +"g";
        console.log("carbon = " + carbon);
        //碳水攝取
    }
    else if((document.getElementById("girl").checked))
    {
        //上方BMR計算
        let BMR = 447.593 + 9.247 * weight + 3.098 * height - 4.330 * age;
        BMR = BMR.toFixed(1); //四捨五入到小數點第一位
        document.getElementById("BMR").textContent= "您的BMR = " + BMR;

        let type1 = BMR *1.2;
        type1 = type1.toFixed(1)//四捨五入到小數點第一位
        document.getElementById("type1").textContent= "生活型態偏向座式(例如久坐、臥床、看電視) TEDD= " + type1 + " kcal";
        //type1(BMR*1.2);   

        let type2 = BMR *1.375;
        type2 = type2.toFixed(1)//四捨五入到小數點第一位
        document.getElementById("type2").textContent= "從事不太費力的運動(例如散步、開車、烹飪) TEDD= "+ type2 + " kcal";
        //type2(BMR*1.375);

        let type3 = BMR *1.55;
        type3 = type3.toFixed(1)//四捨五入到小數點第一位
        document.getElementById("type3").textContent= "有規律運動的習慣(例如腳踏車、健走、慢跑) TEDD= "+ type3 + " kcal";
        //type3(BMR*1.55);

        let type4 = BMR *1.72;
        type4 = type4.toFixed(1)//四捨五入到小數點第一位
        document.getElementById("type4").textContent= "平時活動程度較高(例如打籃球、游泳、登山) TEDD= "+ type4 + " kcal";
        //type4(BMR*1.72);

        let type5 = BMR *1.9;
        type5 = type5.toFixed(1)//四捨五入到小數點第一位
        document.getElementById("type5").textContent= "會進行高強度的訓練(例如長跑、健身、格鬥) TEDD= "+ type5 + " kcal";
        //type5(BMR*1.9);

        console.log("BMR = " + BMR);

        //下方div計算==================================================================================================

        let protine = weight * 1.975 ;
        let protine_kcal = protine * 4;
        protine = protine.toFixed(1);
        document.getElementById("protine").textContent = "蛋白攝取" + protine +"g";
        console.log("protine = " + protine);
        //蛋白質攝取 

        let fat =  (BMR * 1.9) * 0.4 / 9 ;
        let fat_kcal = fat * 9;
        fat = fat.toFixed(1)
        document.getElementById("fat").textContent = "脂肪攝取" + fat +"g";
        console.log("fat = " + protine);
        //脂肪攝取

        let carbon = (BMR*1.9 - protine_kcal - fat_kcal) / 4;
        carbon = carbon.toFixed(1);
        document.getElementById("carbon").textContent = "碳水攝取" + carbon +"g";
        console.log("carbon = " + carbon);
        //碳水攝取
    }
    
}

window.addEventListener("load",start,false);

/*    2023/12/2 第一版本    */ 
/*    可優化地方:load的效率可提高*/
