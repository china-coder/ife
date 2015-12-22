/**
 * 石头剪刀布
 * 作者：男爵
 * 实现思路
 *  1.初始化选择
 *  2.用户输入选择
 *  3.电脑随机选择
 *  4.判断输赢
 */

var Choice=new Array();
Choice[0]='石头';
Choice[1]='剪刀';
Choice[2]='布';
function init(){


}
/**
 *获取用户选择
 *
 *
 * */

function getInput(){
    return document.getElementById("user").value;
}
/**
 * 产生电脑选择
 */
function createChoice(){
    return Choice[rand.get(0,3)];
}

/**
 * 判断谁胜利
 * @param choice1 代表电脑的选择
 * @param choice2 代表人的选择
 */
function whoWin(choice1,choice2){
    if(choice1==choice2){
        return 3;
    }

    if(choice1=='石头'&&choice2=="剪刀"){
        return 0;
    }
    else if(choice1=='剪刀'&&choice2=="布"){
        return 0;
    }
    else if(choice1=='布'&&choice2=="石头"){
        return 0;
    }else{
        return 1;
    }

}
var rand = {};
rand.get = function (begin,end){
    return Math.floor(Math.random()*(end-begin))+begin;
}


function start(){
    var choice1=getInput();
    var choice2=createChoice();
    console.log(choice1+choice2);
    var result=whoWin(choice1,choice2);
    console.log(result);
    if(result==1){
        document.getElementById("result").innerHTML="你赢了";
    }else if(result==0){
        document.getElementById("result").innerHTML="再来一次";
    }else{
        document.getElementById("result").innerHTML="居然平了";
    }
}