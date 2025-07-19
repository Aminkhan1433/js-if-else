alert('sizda hozir random sonlar chiqishni boshlaydi')

let randomnum = Math.trunc(Math.random() *100);
alert("random natija:     " + randomnum)


console.log(randomnum)


let confrm = confirm("siz random sonni 2 ga ko'paytirmoqchi va bo'lmoqchimisiz!")


if(confrm == true) {
    let kopayish = (randomnum * 2);
    let bolish = (randomnum / 2);
    alert (
    "random orqali chiqqan son:   "  +  randomnum + '\n' + "random * 2 =   " + kopayish + '\n' + "random / 2 =    " + bolish 
    )
}
