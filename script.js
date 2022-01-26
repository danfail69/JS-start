let buttonn = document.querySelector('button')
function main1case(){
let a = +prompt("Введите число")
    switch(a){
        case 1:
           alert("Понедельник") 
                break;
           case 2:
           alert("Вторник") 
                break;
           case 3:
           alert("Среда") 
                break;
           case 4:
           alert("Четверп") 
                break;
           case 5:
           alert("Пятница") 
                break;
           case 6:
           alert("Суббота") 
                break;
           case 7:
           alert("Воскресенье") 
                break;
            default:
                alert("Error")
                break;
    }
}
function main2case(){
    let a = +prompt("Введите оценку")
    switch (a){
        case 1:
           alert("Плохо") 
                break;
           case 2:
           alert("Неудовлетворительно") 
                break;
           case 3:
           alert("Удовлетворительно") 
                break;
           case 4:
           alert("Хорошо") 
                break;
           case 5:
           alert("Отлично") 
                break;
           default:
           alert("Ошибка") 
                break;
    }
}
function main3case(){
    let a = +prompt("Введите")
    switch (a) {
        case 1:
             alert("Зима " + "Январь " + "31") 
             break;
        case 2:
            alert("Зима " + "Февраль " + "28") 
            break;
        case 3:
             alert("Весна " + "Март " + "31") 
             break;
        case 4:
            alert("Весна " + "Апрель " + "30") 
            break;
        case 5:
            alert("Весна " + "Май " + "31") 
            break;
        case 6:
            alert("Лето " + "Июнь " + "30") 
            break;
        case 7:
            alert("Лето "+ "Июль " + "31") 
            break;
        case 8:
            alert("Лето " + "Август " + "29") 
            break;
        case 9:
            alert("Осень "+ "Сентябрь " + "30") 
            break;
        case 10:
            alert("Осень " + "Октябрь " + "31") 
            break;
        case 11:
            alert("Осень " + "Ноябрь " + "30") 
            break;
        case 12: 
            alert("Зима " + "Декабрь " + "31") 
            break;
        default:
            alert("Error")
            break;
    }
}
function main5case(){
    let a, b, z
    a = +prompt("Введите первое число")
    b = +prompt("Введите второе число")
    z = +prompt("Выберите способ")
        switch (z){
            case 1:
                alert(a+b)
                break;
            case 2:
                alert(a-b)
                break;
            case 3:
                alert(a*b)
                break;
            case 4: 
                alert(a/b)
                break;
            default:
                alert("Error")
                break;
        }

}
function main6case(){
    let a, b 
    a = +prompt("Введите единицу длины")
    b = +prompt("Введите число")
        switch (a){
            case 1:
                alert(b/10 + "м")
                break;
            case 2:
                alert(b*1000 + "м")
                break;
            case 3:
                alert(b + "м")
                break;
            case 4: 
                alert(b/1000 + "м")
                break;
            case 5:
                alert(b/100 + "м")
                break;
            default:
                alert("Error")
                break;
            }
}
function main7case(){
    let a, b
    a = +prompt("Введите единицу массы")
    b = +prompt("Введите число")
        switch (a){
            case 1:
                alert(b + "кг")
                break;
            case 2:
                alert(b*1000000 + "кг")
                break;
            case 3:
                alert(b/1000 + "кг")
                break;
            case 4: 
                alert(b*1000 + "кг")
                break;
            case 5:
                alert(b*100 + "кг")
                break;
            default:
                alert("Error")
                break;
            }
}
function main1for(){
    let k, n 
    k = +prompt("Число")
    n = +prompt("Кол-во")

    let i;
    for (i = 0; i < n;  ++i)
        alert(k)
}
function main2for(){
    let a, b
    a = +prompt("Число")
    b = +prompt("Число")
    let i;
    for (i = 0; i<=b;  ++i)
        alert(i)
        alert(b-a+1)
}

function main1if(){
    let a, b, c;
        a = prompt("Введите число 1");
        b = prompt("Введите число 2");
        c = prompt("Введите число 3");
        if ((a<b<c) && (a<c<b)) {
            alert(a)
        }
        if ((b<a<c) && (b<c<a)){
            alert(b)
        }
        if ((c<a<b) && (c<b<a)){
            alert(c)
        }
    }
    function main2if(){
        let a, b, c;
        a = prompt("Введите число 1"); 
        b = prompt("Введите число 2"); 
        c = prompt("Введите число 3"); 
        if ((b <= a) && (a <= c) || (b >= a) && (a >= c)) {
            alert(a)
        }
        if ((a <= b) && (b <= c) || (a >= b) & (b >= c)){
            alert(b)
        }
        if ((a <= c) && (c <= b) || (a >= c) & (c >= b)){
            alert(c)
        }
    }
    function main3if(){
        let a, b, c, Min, Max;
        a = prompt("Введите число 1"); 
        b = prompt("Введите число 2"); 
        c = prompt("Введите число 3"); 
        if (a >= b && a >= c) Max = a;
        else if (b >= a && b >= c) Max = b;
        else  Max = c;
        
        if (a <= b && a <= c) Min = a;
        else if (b <= a && b <= c) Min = b;
        else Min = c;
        alert(Min)
        alert(Max)
    }
    function main4if(){
        let a, b, c
        a = prompt("Введите число 1"); 
        b = prompt("Введите число 2"); 
        c = prompt("Введите число 3"); 
        if (b<=c&&b<=a) {
            alert(a+c);
            }
            else {
            if (a <= c && a <= b) {
            alert (b + c);
            }
            else {
            alert(b + a);
            }
            }
           }
    function main5if(){
        let a, b, c
        a = prompt("Введите число 1"); 
        b = prompt("Введите число 2"); 
        c = prompt("Введите число 3"); 
        if ((a <= b) & (b <= c)) {
            a = a * 2;
            b = b * 2;
            c = c * 2;
            alert(a)
            alert(b)
            alert(c)
        } else {
            a = a * (-1)
            b = b * (-1)
            c = c * (-1)
        alert(a)
        alert(b)
        alert(c)
        }
            
    }
    function main6if(){
        let a, b, c
        a = prompt("Введите число 1"); 
        b = prompt("Введите число 2"); 
        c = prompt("Введите число 3"); 
        if( ((a<=b) & (b<=c))|((a>=b) & (b>=c))){
            a=a*2;
            b=b*2;
            c=c*2;
        } else {
            a=a*(-1);
            b=b*(-1);
            c=c*(-1);
        }
        alert(a)
        alert(b)
        alert(c)
    }
    function main7if(){
        let a, b, c
        a = prompt("Введите число 1"); 
        b = prompt("Введите число 2"); 
        c = prompt("Введите число 3"); 
        if (a == b)
        alert (3)
        else if (a == c)
        alert(2)
        else
        alert(1)
    }
    function main12for(){
        let N, p=1, a=1.1
        N = +prompt("Введите кол-во")
        for(let i = 1; i<=N; ++i){
            p=p*a;
            a=a+0.1
        }
        alert(p)

    }
    function main13for(){
        let N, y, i, s
        s = 1.1
        y = 1.1
        N = prompt("введите число")
        for (i=1; i<N; i++)
        {
            y=y+0.1
            s = s+((-1)**1)*y
            console.log(y)
        }
        alert(s)
    }
    function main14for(){
        let t, N
        N = +prompt("Vvediti +chislo")
        for(let i=2; i<=N; i++){
            t=(2*N-1)
        }
        alert(t)
        }
       
    function main15for(){
        let a, n, rez=1
        a = +prompt("Число")
        n = +prompt("Степень")

        for(i=1; i<=n; i++){
            rez=rez*a;
        }
        alert(rez)
    }
    function main16for(){
        let a, n, rez=1
        a = +prompt("Число")
        n = +prompt("Степень")

        for(i=1; i<=n; i++){
            rez=rez*a;
            alert(rez)
        }
    }
    function main17for(){
        let a, n, a2=1, rez=1
        a = +prompt("Число")
        n = +prompt("Степень")
        for(let i=2; i<=n; ++i){
            a2=a2*a
            rez=rez+a2
        }
            alert(rez)
    }