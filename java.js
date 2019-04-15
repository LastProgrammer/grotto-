
//начальное создание элементов
function init() { 
    let canvas = $("#pazle")[0];
    canvas.width = 320;
    canvas.height = 320;
    let context = canvas.getContext("2d");
    context.fillStyle = "grey";
    context.fillRect(0,0,canvas.width,canvas.height);
}

//класс пятнашек
class Game {
    constructor () {
        let arrOfCordinate = [[1,2,3,4],[5,6,7,8],[9,10,11,12],[13,14,15,0]];
        let click = 0;
    }

    //функция возвращяет кординаты пустого поля;
    getNooleSelsCordinate(){
        for (let i = 0; i < arrOfCordinate.length; i++) {
            for (let j = 0; j < arrOfCordinate[i].length; j++) {
                if (arrOfCordinate[i][j] == 0) {
                    return {"x":i,"y":j}
                }
            }
        }
    }


}


window.onload = function () {
    init();
}