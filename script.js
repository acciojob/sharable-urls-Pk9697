// your code here
const submitBtn=document.getElementById('submit-btn');
const url=document.getElementById('url');
const name=document.getElementById('name');
const year=document.getElementById('year');

submitBtn.addEventListener('click',(e)=>{
	e.preventDefault();
	if(name.value!==''){
		url.textContent+=`?name=${name.value}`
		if(year.value!==''){
			url.textContent+=`&year=${year.value}`
		}
	}else if(year.value!==''){
		url.textContent+=`?year=${year.value}`
	}
})