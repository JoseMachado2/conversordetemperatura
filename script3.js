function temp () {
    var res = window.document.getElementById('resul')
    var temp = window.document.getElementById('grau').value
    res.innerText = `A temperatura em Fahrenheit é ${temp*1.8 + 32 } `

    if (temp <= -30) {
        
        document.body.style.backgroundImage = "url(https://mobimg.b-cdn.net/v3/fetch/3e/3e1c3b99af608614bbea970cb6f680f8.jpeg)"

 

    } else 
    if (temp > -30 && temp <=0){
        document.body.style.backgroundImage = "url(https://cdn.britannica.com/71/73371-050-9DFAEC1E/Reykjavik-Iceland.jpg)"   
    }

    
    
    
    
    
    else if (temp > 0 & temp <= 14  ) {
document.body.style.backgroundImage = "url(https://assistentedeviagem.com.br/blog/wp-content/uploads/2021/04/canada-ilha.jpg)"

    }
    else if (temp > 14 && temp <= 26) {
        document.body.style.backgroundImage = "url(https://www.laboratoriocoffers.com.br/wp-content/uploads/2019/11/outono4.jpg)"
        document.body.style.backgroundSize ="cover"

    }

    else if (temp > 26 && temp <= 35 ) {
        document.body.style.backgroundImage = "url(https://www.blog.nacionalinn.com.br/wp-content/uploads/2016/08/recife.jpg)"
        document.body.style.backgroundSize ="cover"
    }

   




    else if (temp > 35 && temp <= 66){
        document.body.style.backgroundImage = "url(https://upload.wikimedia.org/wikipedia/commons/c/cb/Libya_4985_Tadrart_Acacus_Luca_Galuzzi_2007.jpg)"

    } else {
        document.body.style.backgroundImage = "url(https://imagens.ebc.com.br/qAu3Yr53Aa8ibCz9-tdYA3o4TNU=/1600x800/https://agenciabrasil.ebc.com.br/sites/default/files/thumbnails/image/2021-01-19t090337z_307947196_rc2xal93sswq_rtrmadp_3_italy-etna.jpg?itok=8E4XtsQz)"
        document.body.style.backgroundPositionY = "-22px"
        document.body.style.backgroundSize ="cover"

    }
}