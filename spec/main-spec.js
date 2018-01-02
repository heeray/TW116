let sinon = require("sinon");
let main = require("../lib/main");
let Choice = require("../lib/choice");
let command = require("../lib/command");
let readlineSync = require("cli-interact");
describe('main()', () => {

    beforeEach(() => {
        sinon.stub(readlineSync, 'question');
    });

    afterEach(() => {
        readlineSync.question.restore();
    });

    it('first write 3', () => {
        readlineSync.question.returns(Choice.exit);
        main();
        expect(readlineSync.question.args.join()).toBe(
            `1. 添加学生
2. 生成成绩单
3. 退出
请输入你的选择（1～3）：`);
    });

    it('first write 1 and write the right information',()=>{
        sinon.spy(console, 'log');
        readlineSync.question.onFirstCall().returns(Choice.addStudentInfo);
        readlineSync.question.onSecondCall().returns("张三,1505110027,汉,201502,数学:100,语文:90,英语:80,编程:70");
        readlineSync.question.onThirdCall().returns(Choice.exit);
        main();
        expect(console.log.args.join()).toBe("学生张三的成绩被添加,已退出");
    });

    it('should ask to retry when add student info failed', () => {
        let invalidStudentInfo = "3";
        readlineSync.question
            .onCall(0).returns(Choice.addStudentInfo)
            .onCall(1).returns(invalidStudentInfo)
            .onCall(2).returns("张三,1505110027,汉,201502,数学:100,语文:90,英语:80,编程:70")
            .onCall(3).returns(Choice.exit);
        main();
        expect(readlineSync.question.thirdCall.args.join()).toBe(`1. 添加学生
2. 生成成绩单
3. 退出
请输入你的选择（1～3）：`);
    });

    it('should ask to retry when input invalid menu', () => {
        let invalidMenuItem = 4;
        readlineSync.question
            .onCall(0).returns(invalidMenuItem)
            .onCall(1).returns(Choice.exit);
        main();
        expect(readlineSync.question.secondCall.args.join()).toBe(`1. 添加学生
2. 生成成绩单
3. 退出
请输入你的选择（1～3）：`);
    });
});