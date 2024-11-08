let bek1 = +prompt("birinshi san engiz");
let bek2 = +prompt("ekinshi sandy engiz")
let bek3 = +prompt("ushinshi sandy engiz")


switch (true) {
    case bek1 > bek2 && bek1 > bek3:
        alert("en uken san:" + bek1) 
        break;
case bek2 >bek1 && bek2 > bek3:
    alert("en ulken san:" + bek2)
    break;
    case  bek3 > bek2 && bek3 > bek1:
        alert("en ulken san" + bek3)
        break
    default:
        alert("siz qate zhazdynyz")
}