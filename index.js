function search(point) {
    var lst = []
    for (let i = 2;; i++) {
        let flag=1;
        for (let j = 2; (j <= i/2)&&(flag==1); j=j+1) {
            if (i%j==0) {
                flag=0}
        }       
        if (flag==1) {
            lst.push(i);
        }
        if (lst.length == point) {break}
    }
    return lst
}
console.log(search(process.argv[2]));