let sinon = require("sinon");
let Choice = require("./choice");
let command = require("./command");
let readlineSync = require("cli-interact");
let dealData = require("./dealData");
function choice(){
    let s =command.menu;
    let input = readlineSync.question(s);
    let students =  [];
        let re = /([\u4e00-\u9fa5]{1,4}),([0-9]{10}),([\u4e00-\u9fa5]),((\d){1,10}),([\u4e00-\u9fa5]{1,10}):([0-9]{1,3}),([\u4e00-\u9fa5]{1,10}):([0-9]{1,3}),([\u4e00-\u9fa5]{1,10}):([0-9]{1,3}),([\u4e00-\u9fa5]{1,10}):([0-9]{1,3})/;
        let we = /((\d){10},)*/;
        while (true) {
            if (input === Choice.addStudentInfo) {
                let mes = readlineSync.question(command.add_student_info);
                while(true){
                    if (we.test(re)) {
                        //写入字符串的函数
                        students.push(dealData.getStudentInfo(mes));
                        break;
                    }
                    else {
                        mes = readlineSync.question(command.input_valid_student_info);
                    }
                }
            }

            if(input === Choice.scoreSheet){
                let mes = readlineSync.question(command.add_student_id);
                while(true){
                    if(we.test(mes)){
                        //写出表单的函数
                        let StudentScoreSheet = dealData.printStudentScoreSheet(mes,students);
                        //console.log(StudentScoreSheet)
                        break;
                    }
                    else {mes = readlineSync.question(command.input_valid_student_id);}
                }
            }
            if(input === Choice.exit){
                console.log("已退出")
               break;
            }
            input = readlineSync.question(command.menu);
        }
    }
module.exports = choice;