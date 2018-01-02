let info = "王二小, 001, 汉, 201701, 数学: 100, 语文: 90, 英语: 80, 编程: 70";
function getStudentInfo(info){
    let infoSplit = info.split(/,/);
    let studentMainInfo = {name:infoSplit[0],sno:infoSplit[1],nation:infoSplit[2],class:infoSplit[3]}
    infoSplit.shift(studentMainInfo.name);
    infoSplit.shift(studentMainInfo.sno);
    infoSplit.shift(studentMainInfo.nation);
    infoSplit.shift(studentMainInfo.class);
    let studentscore = infoSplit;
    for(let i = 0;i<studentscore.length;i++){
        let a = studentscore[i].split(/:/);
        studentMainInfo[a[0]] = Number(a[1]);
    }
    console.log("学生"+studentMainInfo.name+"的成绩被添加");
    console.log(studentMainInfo)

}
getStudentInfo(info);