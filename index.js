lst = []

function search(point) {
    for (let i = 2;; i++) {
        let flag=1;
        for (let j = 2; (j <= i/2)&&(flag==1); j=j+1) {
            if (i%j==0) {
                flag=0}
        }       
        if (flag==1) {
            console.log(i);
            lst.push(i);
        }
        if (lst.length == point) {break}
    }
}
console.log(search(process.argv[2]));