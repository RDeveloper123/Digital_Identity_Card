let links=document.querySelectorAll("#link");
links.forEach((link)=>{
    //console.log(link);
    link.addEventListener('click',()=>{
        if(link.innerHTML==="Naukri.com")
        {
            window.location.href="https://www.naukri.com/mnjuser/homepage";
        }
        else if (link.innerHTML==="LinkedIn"){
            window.location.href="https://www.linkedin.com/feed/";

        }
        else if (link.innerHTML==="Indeed"){
            window.location.href="https://in.indeed.com/";

        }
        else if (link.innerHTML==="Instahyre"){
            window.location.href="https://www.instahyre.com/candidate/opportunities/?matching=true";

        }
       
    })
})