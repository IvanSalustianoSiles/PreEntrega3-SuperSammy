// let main = document.querySelector("main");
let intentar = `Por favor, inténtelo de nuevo.`;
// let i;
// main.classList.add("red-background");
let ok = document.querySelector("#ok-button");
let ok2 = document.querySelector("#ok2");
let ok3 = document.querySelector("#ok3");
let article1 = document.querySelector("#article-1");
let article2 = document.querySelector("#article-2");
let form = document.querySelector("#form-1");
let divcuantosamigos = document.querySelector("#div-cuantosamigos");
let cantAmigos = document.querySelector("#input-cuantosamigos");
let labelerror1 = document.querySelector("#labelerror-cuantosamigos");
let divtotal = document.querySelector("#div-total");
let total = document.querySelector("#input-total");
let labelerror2 = document.querySelector("#labelerror-total");
let article3 = document.querySelector("#article-tarjeta");
let calcular = document.querySelector("#calcular");
// let divnombre = document.querySelector("#div-quieneselamigo");
// let nombre = document.querySelector("#input-quieneselamigo");
// let labelnombre = document.querySelector("#label-quieneselamigo");
let labelcuantosamigos = document.querySelector("#label-cuantosamigos");
let labeltotal = document.querySelector("#label-total");
// let divcuantopago = document.querySelector("#div-cuantopago");
// let pagoReal = document.querySelector("#input-cuantopago");
// let labelpagoReal = document.querySelector("#label-cuantopago");
let aside = document.querySelector("aside");
let p1aside = document.querySelector("#p1-aside");
let p2aside = document.querySelector("#p2-aside");
let perroraside = document.querySelector("#perror-aside");
let perror2aside = document.querySelector("#perror2-aside");
let perrorarticle = document.querySelector("#perror-article");
// let labelerror3 = document.querySelector("#labelerror-cuantopago");
form.onsubmit = (event) => {
    event.preventDefault();
}
const Amigos = [];
class Amigo {
    // ("Amigo" es un objeto que contiene los atributos de cada amigo en particular, junto con un método.
    nombre;
    pagoReal;
    deuda;
    deudaPara;
    deudor;
    constructor (nombre, pagoReal, pagoIdeal, deudor) {
        this.nombre = nombre;
        this.pagoReal = pagoReal;
        this.deuda = sumador (pagoIdeal, -this.pagoReal);
        this.deudaPara = -this.deuda;
        // (Si su deuda es negativa, se multiplica por -1 y es lo que le deben, es decir, la deuda para con él, no de él. Eso es deudaPara.)
        this.deudor = deudor;
    }
    ifAcreedor1 (deudaTotal) {
        // (Si el usuario es acreedor, quiere decir que su deuda es negativa o vale cero, es decir, que le deben dinero o no pero no tiene deuda.)
        let resultado;
        if (this.deuda < 0 || this.deuda == 0) {
            resultado = sumador (deudaTotal, this.deudaPara);
            this.deudor = false;
            // (La variable deudor, por otro lado, es un booleano que define si la persona es deudora o no.)
         } else {
            this.deudor = true;
            resultado = deudaTotal;
        }
         return resultado;
    }
}
function sumador (n1, n2) {
    let resultado = n1 + n2;
    return resultado;
}
function ifSegundosCases (deudorX, deudaN, deudaParaX, nombreX, deudaTotal, uldeudas) {
    if (deudorX == false) {
        let deudaNAX = deudaN * deudaParaX / deudaTotal;
        if (deudaNAX > 0) {            
            let lidebe = document.createElement("li");
            lidebe.innerText = `- Debe ${Math.round(deudaNAX)} pesos a ${nombreX}.` 
            uldeudas.append(lidebe);         
        }
    }
}
function ifAcreedor2 (nombreY, deudaParaY, uldeudas) {
    let lideben = document.createElement("li");
    if (deudaParaY > 0) {
        lideben.innerText = `- A ${nombreY} le deben ${Math.round(deudaParaY)} pesos y no debe.` 
    } else if (deudaParaY == 0) {
        lideben.innerText = `- A ${nombreY} no le deben dinero y no debe.` 
    }
    uldeudas.append(lideben);         
}
ok.addEventListener("click", ()=>{
    article1.classList.add("display-none");
    article2.classList.remove("display-none");
    divcuantosamigos.classList.remove("display-none");
})
ok2.addEventListener("click", ()=>{
    if (cantAmigos.value <= 0) {
        labelcuantosamigos.classList.add("display-none");
        labelerror1.innerText = `Lo sentimos, "${cantAmigos.value}" no es una cantidad válida. Debe ser un número positivo. ${intentar}`
        cantAmigos.value = "";
        cantAmigos.disabled = true;
        labelerror1.classList.remove("display-none");
        let ok21 = document.createElement("button");
        ok21.innerText = `OK`;
        ok2.classList.add("display-none");
        divcuantosamigos.append(ok21);
        ok21.addEventListener("click", () =>{
            labelerror1.classList.add("display-none");            
            ok21.classList.add("display-none");
            labelcuantosamigos.classList.remove("display-none");
            ok2.classList.remove("display-none");
            cantAmigos.disabled = false;
        })
     } else {
         divcuantosamigos.classList.add("display-none");
         divtotal.classList.remove("display-none");
    }
})
ok3.addEventListener("click", ()=>{
    if (total.value <= 0) {
        labeltotal.classList.add("display-none");
        labelerror2.innerText = `Lo sentimos, pero "${total.value}" no es un número válido. Debe ser positivo. ${intentar}`;
        total.value = "";
        total.disabled = true;
        labelerror2.classList.remove("display-none");
        let ok31 = document.createElement("button");
        ok31.innerText = `OK`;
        ok3.classList.add("display-none");
        divtotal.append(ok31);
        ok31.addEventListener("click", () =>{
            labelerror2.classList.add("display-none");            
            ok31.classList.add("display-none");
            labeltotal.classList.remove("display-none");
            ok3.classList.remove("display-none");
            total.disabled = false;
        })
    } else {
        divtotal.classList.add("display-none");
        let pagoIdeal = total.value / cantAmigos.value;
        let deudaTotal = 0;            
        let totalReal = 0;
        aside.classList.remove("display-none");
        p1aside.innerText = `Total estipulado: ${total.value}`;
        p2aside.innerText = `Monto actual: ${totalReal}`;
        for (let i = 1; i <= cantAmigos.value; i++) {
            let tarjeta = document.createElement("form");
            tarjeta.classList.add("form-tarjetas");
            let inputNombre = document.createElement("input");
            inputNombre.classList.add("inputs-nombres");
            inputNombre.setAttribute("placeholder", `¿Quién es el amigo N°${i}`);
            inputNombre.setAttribute("id", `inp1${i}`);
            inputNombre.required = true;
            let inputPago = document.createElement("input");
            inputPago.classList.add("inputs-pagos");
            inputPago.required = true;
            inputPago.setAttribute("placeholder", `¿Cuánto pagó?`);
            inputPago.setAttribute("id", `inp2${i}`);
            let cargar = document.createElement("input");
            cargar.setAttribute("type", "submit");
            cargar.setAttribute("value", "CARGAR");
            cargar.setAttribute("id", `inp3${i}`);
            tarjeta.addEventListener("submit", (event) =>{
                event.preventDefault();
            })
            article3.append(tarjeta);
            tarjeta.append(inputNombre, inputPago, cargar);
        }
        let conjuntoTarjetas = document.querySelectorAll(".form-tarjetas");
        for (let j = 0; j < conjuntoTarjetas.length; j++) {
            let varTarjeta = conjuntoTarjetas[j];
            let varNombre = document.querySelector(`#inp1${j+1}`);
            let varPago = document.querySelector(`#inp2${j+1}`);
            let varCargar = document.querySelector(`#inp3${j+1}`);
            varTarjeta.addEventListener("submit", () =>{
                totalReal = sumador(totalReal, parseFloat(varPago.value));
                if (totalReal <= total.value) {
                    p2aside.innerText = `Monto actual: ${totalReal}`;
                    if (totalReal == total.value) {
                        p2aside.innerText = `Monto actual: ${totalReal} (límite alcanzado)`;       
                    }
                    if (parseFloat(varPago.value) < 0) {
                        perror2aside.innerText = `ATENCIÓN: El pago de ${varNombre.value} es menor a cero. Ten en cuenta que pagará una deuda extra a los acreedores del grupo de ${-varPago.value}.`
                        perror2aside.classList.remove("display-none");
                        let oknegative = document.createElement("button");
                        oknegative.innerText = `OK`;
                        perror2aside.append(oknegative);
                        oknegative.addEventListener("click", () =>{
                            perror2aside.classList.add("display-none");
                            oknegative.classList.add("display-none");
                        })
                    }
                    varNombre.disabled = true;
                    varPago.disabled = true;                    
                    varCargar.disabled = true;
                    let amigoVar = new Amigo (varNombre.value, varPago.value, pagoIdeal, true);
                    deudaTotal = amigoVar.ifAcreedor1 (deudaTotal);
                    Amigos.push (amigoVar);
                    if (Amigos.length == cantAmigos.value){                       
                        calcular.classList.remove("display-none");
                        aside.classList.add("display-none");
                        article3.append(calcular);                
                    }
                } else if (totalReal > total.value) {
                    totalReal = sumador(totalReal, -parseFloat(varPago.value));
                    perroraside.innerText = `ERROR. Ha sobrepasado el total estipulado. ${intentar}`;
                    perroraside.classList.remove("display-none");
                    varPago.value = "";
                    let oksobrepas = document.createElement("button");
                    oksobrepas.innerText = `OK`;
                    perroraside.append(oksobrepas);
                    oksobrepas.addEventListener("click", () =>{
                        perroraside.classList.add("display-none");
                        oksobrepas.classList.add("display-none");
                    })
                }
            })
        }
        calcular.addEventListener("click", () =>{
            if (totalReal == parseFloat(total.value)) {
                for (let m = 0; m <= Amigos.length-1; m++) {
                    conjuntoTarjetas[m].innerHTML = "";
                    let objetoM = Amigos[m];
                    let uldeudas = document.createElement("ul");
                    let amigocartel = document.createElement("h2");
                    amigocartel.innerText = `Amigo N°${m+1}: ${objetoM.nombre}`
                    conjuntoTarjetas[m].append(amigocartel);
                    conjuntoTarjetas[m].append(uldeudas);       
                    if (objetoM.deudor == false) {
                        ifAcreedor2 (objetoM.nombre, objetoM.deudaPara, uldeudas);
                    } else {       
                        for (let n = 0; n < Amigos.length; n++) {
                            while (n != m && n < Amigos.length) {
                                let objetoN = Amigos[n];
                                 ifSegundosCases (objetoN.deudor, objetoM.deuda, objetoN.deudaPara, objetoN.nombre, deudaTotal, uldeudas);
                                 // (He cargado dos variables distintas que contienen los objetos originarios del array "Amigos", para separar en parámetros
                                 // a las propiedades pertenecientes al deudor (con objetoM) de las pertenecientes a los acreedores (con objetoN). Esto gracias, además, a las condiciones del while contenedor.)
                                n++;
                            }
                        }
                    }
                }
                calcular.classList.add("display-none");
            } else {
                perrorarticle.innerText = `El total original estipulado (${total.value}) difiere del monto sumado entre sus compañeros (${totalReal}). ${intentar}`;
                perrorarticle.classList.remove("display-none");
                article3.append(perrorarticle);
                let okdifiere = document.createElement("button");
                okdifiere.innerText = `OK`;
                article3.append(okdifiere);
                okdifiere.addEventListener("click", () => {
                    perrorarticle.classList.add("display-none");
                    okdifiere.classList.add("display-none");
                    totalReal = 0;
                    p2aside.innerText = `Monto actual: ${totalReal}`;
                    Amigos.splice(0, Amigos.length);
                    calcular.classList.add("display-none");
                    aside.classList.remove("display-none");
                    for (let l = 0; l < conjuntoTarjetas.length; l++) {
                        varPago = document.querySelector(`#inp2${l+1}`);
                        varPago.value = "";
                        varPago.disabled = false;
                        varCargar = document.querySelector(`#inp3${l+1}`);
                        varCargar.disabled = false;
                    }
                })                
            }
        })
    }
})