var form=document.getElementById("f"),status=document.getElementById("status");
form.addEventListener("submit",function(e){
e.preventDefault();
var btn=form.querySelector("button");
btn.disabled=true;btn.textContent="Sending...";status.className="msg";status.textContent="";
fetch("https://api.web3forms.com/submit",{method:"POST",headers:{"Content-Type":"application/json",Accept:"application/json"},body:JSON.stringify(Object.fromEntries(new FormData(form)))})
.then(function(r){return r.json()})
.then(function(d){
if(d.success){form.reset();status.className="msg ok";status.textContent="Thanks, we got your request and will call you back soon."}
else{throw new Error("fail")}
})
.catch(function(){status.className="msg err";status.textContent="Something went wrong. Please call (443) 995-4228."})
.finally(function(){btn.disabled=false;btn.textContent="Send request"});
});
