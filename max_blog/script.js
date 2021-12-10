// var blogs= []
function add(){
    var b = []
    var c = document.getElementById('Article').value
    var d = document.getElementById('Author').value
    var f = document.getElementById('text1').value
    b.push(c)
    b.push(d)
    b.push(f)
    localStorage.setItem("Article_name", JSON.stringify(b[0]));
    localStorage.setItem("Author_name", JSON.stringify(b[1]));
    localStorage.setItem("details", JSON.stringify(b[2]));
}

function display(){
    let new_blog;
    const con = document.getElementById("main")
    var result = JSON.parse(localStorage.getItem("Article_name"));
    var result2 = JSON.parse(localStorage.getItem("Author_name"));
    var result3 = JSON.parse(localStorage.getItem("details"));
    localStorage.clear()
    if (result !="null"){
        new_blog = `<div class='text center bg-success'><h2>Article name : ${result}</h2><H4>Discription : ${result2}</h4><p><h3>Author : ${result3}<h3</p>`
        con.innerHTML += new_blog
        
    }
    else{
        const myform = document.getElementById("ra")
        myform.addEventListener("display",(e)=>{e.preventDefault();});
    }   
}


