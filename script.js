// your code here
const urlDefaultText='https://localhost:8080/';
// const form=document.getElementById('form');
const formBtn=document.getElementById('button');
const url=document.getElementById('url');
const name=document.getElementById('name');
const year=document.getElementById('year');

formBtn.addEventListener('click',(e)=>{
	e.preventDefault();
	// const {name,year}=e.target
	url.textContent=urlDefaultText;
	if(name.value.trim()!==''){
		url.textContent+=`?name=${name.value}`
		if(year.value.trim()!==''){
			url.textContent+=`&year=${year.value}`
		}
	}else if(year.value.trim()!==''){
		url.textContent+=`?year=${year.value}`
	}

	name.value = "";
    year.value = "";
})