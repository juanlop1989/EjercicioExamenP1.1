
function calcular() {
    let str1 = (document.getElementById("pro1").value)
    let str2 = (document.getElementById("pro2").value)
    let str3 = (document.getElementById("pro3").value)
    let str4 = (document.getElementById("pro4").value)
    let str5 = (document.getElementById("pro5").value)
    let des =   document.getElementById("descuento")

    
    if (str1===""){
        warning("Ha dejado el producto 1 en blanco");
    } else if(str2===""){
        warning("Ha dejado el producto 2 en blanco");
    }else if(str3===""){
        warning("Ha dejado el producto 3 en blanco");
    }else if(str4===""){
        warning("Ha dejado el producto 4 en blanco");
    }else if(str5===""){
        warning("Ha dejado el producto 5 en blanco");
    }else {
    

    let p1 = parseFloat(pro1.value)
    let p2 = parseFloat(pro2.value)
    let p3 = parseFloat(pro3.value)
    let p4 = parseFloat(pro4.value)
    let p5 = parseFloat(pro5.value)


    let subtotal
    subtotal = p1 + p2 + p3 + p4 + p5
    document.getElementById("subtotal").value = subtotal

    if (subtotal <1000) {
        des.innerHTML = "Descuento: 0%"
        total = subtotal
        document.getElementById("total").value = total
        check("Operación exitosa")

    } else if(subtotal <5000){
        des.innerHTML = "Descuento: 10%"        
        total = (subtotal -(subtotal * (10/100)))
        document.getElementById("total").value = total
        check("Operación exitosa")

    } else if(subtotal <9000){
        des.innerHTML = "Descuento: 20%"
        total = (subtotal -(subtotal * (20/100)))
        document.getElementById("total").value = total
        check("Operación exitosa")
        
    } else if(subtotal <13000){
        des.innerHTML = "Descuento: 30%"
        total = (subtotal -(subtotal * (30/100)))
        document.getElementById("total").value = total
        check("Operación exitosa")

    }else{
        des.innerHTML = "Descuento: 40%"
        total = (subtotal -(subtotal * (40/100)))
        document.getElementById("total").value = total 
        check("Operación exitosa")           

              
    }     
}

}

function limpiar(){
    let des =   document.getElementById("descuento")
    document.getElementById("pro1").value=""
    document.getElementById("pro2").value=""
    document.getElementById("pro3").value=""
    document.getElementById("pro4").value=""
    document.getElementById("pro5").value=""
    document.getElementById("subtotal").value=""
    des.innerHTML = "Descuento: 0%"
    document.getElementById("total").value=""
    check("Se han limpiado los campos")   
    
}

function warning(mensaje){
    Swal.fire({
        icon: "warning",
        title: "Oops...",
        text: mensaje,
      });
}

function check(mensaje2){
Swal.fire({
    position: "top-end",
    icon: "success",
    title: mensaje2,
    showConfirmButton: false,
    timer: 1500
  });
}

