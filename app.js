document.addEventListener("submit" , (event)=>{
    console.log("Submitted")
    user = document.getElementById("user").value
    password = document.getElementById("password").value
    
    const headers = new Headers()
    headers.append("Accept" , "application/json")
    headers.append("Authorization", btoa(user + ":" + password))

    event.preventDefault()
})


function validate(){
    console.log("Validating")
    let user = document.getElementById("user").value
    let password = document.getElementById("password").value
    console.log(`User = ${user} Password  = ${password}`)

    const XHR = new XMLHttpRequest(), FD  = new FormData();
    FD.append( "user", user);
    FD.append( "password", password );    
    XHR.open( 'POST', 'http://localhost:3000/authorize' );
    XHR.send( FD );
    console.log("Validated")
}
