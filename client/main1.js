document.getElementById("btn1").addEventListener('click',(e)=>{
    e.preventDefault()
    
    const email=document.getElementById("email").value
    const password=document.getElementById("password").value

    if(email=='' || password==''){
        alert('Incorrect Format')
    }
    else{
        const user={
            email:email,
            password:password
        }
    
    const url="http://localhost:8080/Login"
    const xhr=new XMLHttpRequest();
    xhr.open('POST',url);
     
    xhr.setRequestHeader('Access-Control-Allow-Origin','http://localhost:8080/')
    xhr.setRequestHeader('Content-Type','application/json')
   //
    // window.localStorage.setItem("myemail" , email);
    xhr.onreadystatechange=()=>{
        if (xhr.status==200 && xhr.readyState==4) {

            
            const response=JSON.parse(xhr.responseText);
            console.log(response);
            if(response==null){
                alert("Bad Response")
            }
            else{
                window.location.href="http://localhost:5501/final.html"
    
            }            
     }
    }
    //used to convert json into array 
    xhr.send(JSON.stringify(user));
}
})

// document.getElementById("btn1").addEventListener("click", (e) => {
//     e.preventDefault()

//     // const user_name = document.getElementById("name").style.display ="none"
//     const email = document.getElementById("email").value
//     const password = document.getElementById("password").value
//     console.log(email)
//     console.log(password)
//     if(email == '' || password == '')
//     {
//         alert('Invlaid Format')
//     }
//     else
//     {
//         const user ={
//             email:email,
//             password:password
//         }
//     const url = 'http://localhost:8081/Login'
//     const xhr = new XMLHttpRequest()
//     xhr.open('POST' , url)
//     xhr.setRequestHeader('Access-Control-Allow-Origin' , '*')
//     xhr.setRequestHeader('Content-Type' , 'application/json')

//     xhr.onreadystatechange = () =>
//     {
//         if(xhr.status == 200 && xhr.readyState ==4)
//         {
//            const response = JSON.parse(xhr.responseText);
//            console.log(response)
//            if(response==null)
//            {
//             alert("Bad response")
//            }
//            else
//            {
//             window.location.href = "http://localhost:5501/final.html";
//            }
//         }
//     }
//     xhr.send(JSON.stringify(user))
// }
//   })


