"use strict";
let sinon = require("sinon");
let dealData = require("../lib/dealData");
describe("dealData",() => {
   it("添加张三的信息",()=>{
      let input = "张三,1505110027,汉,201502,数学:100,语文:90,英语:80,编程:70";
      let result = dealData.getStudentInfo(input);
      let answer = {name:"张三",sno:"1505110027",nation:"汉",class:"201502","数学":100,"语文":90,"英语":80,"编程":70}
      expect(result).toEqual(answer);
   });

    it("添加李四的信息",()=>{
        let input = "李四,1505110028,汉,201501,数学:90,语文:90,英语:80,编程:100";
        let result = dealData.getStudentInfo(input);
        let answer = {name:"李四",sno:"1505110028",nation:"汉",class:"201501","数学":90,"语文":90,"英语":80,"编程":100}
        expect(result).toEqual(answer);
    });

    it("dealData.printStudentScoreSheet()",()=>{
        let students = [{name:"张三",sno:"1505110027",nation:"汉",class:"201502","数学":100,"语文":90,"英语":80,"编程":70},
            {name:"李四",sno:"1505110028",nation:"汉",class:"201501","数学":90,"语文":90,"英语":80,"编程":100}];
        let id = "1505110027,1505110028";
        let result = dealData.printStudentScoreSheet(id,students);
        let answer = "成绩单\n" +
            "姓名|数学|语文|英语|编程|平均分|总分 \n" +
            "========================\n" +
            "张三100|90|80|70|85|340\n" +
            "李四90|90|80|100|90|360\n" +
            "========================\n" +
            "全班总分平均数：350\n" +
            "全班总分中位数：350";
        expect(result).toBe(answer);
    });
});