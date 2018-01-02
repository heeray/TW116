function compute_median(a) {
    a.sort((x,y)=>x-y);
    if(a.length %2 === 0){
        return  ((a[a.length/2]+a[a.length/2-1])/2);
    }
    if(a.length %2 !== 0){
        return  (a[parseInt(a.length/2)]);
    }
}
module.exports = {
      getStudentInfo(info){
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
         return studentMainInfo;
     },

     printStudentScoreSheet(id,students){
        let arr = id.split(/,/);
        let sums = [];
        for(let item of students){
            let sum = item["数学"]+item["语文"]+item["英语"]+item["编程"];
            item.sum = sum;
            sums.push(sum);
        }
        let s = "成绩单\n" +"姓名|数学|语文|英语|编程|平均分|总分 \n";
        s += "========================\n";
        for(let i of arr){
            for(let item of students){
                if(item.sno === i){
                    s += item.name+item["数学"]+'|'+item["语文"]+'|'+item["英语"]+'|'+item["编程"]+'|';
                    s += item.sum/4 + '|' + item.sum + '\n'
                }
            }
        }
        s += "========================\n";
        if(sums.length === 0){ return;}
        s += "全班总分平均数：" + (sums.reduce((x,y)=>x+y))/sums.length + '\n';
        s += "全班总分中位数：" + compute_median(sums);
        return s;
    }

};