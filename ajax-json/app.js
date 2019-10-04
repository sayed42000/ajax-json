document.getElementById('button1').addEventListener('click',loadEmployee);

function loadEmployee(){
     var xhr=new XMLHttpRequest();

     xhr.open('GET','employee.json',true);

     xhr.onload=function(){
          if(xhr.status === 200){
              // var data1 = this.responseText;
               //console.log(typeof data1);
               //console.log(data1);
               var data=JSON.parse( this.responseText );
               //console.log(typeof data);
               //console.log(data);
               //var data2 = JSON.stringify( this.responseText );
               //console.log(typeof data2);
               //console.log(data2);
               const output= `
                <ul>
                <li>${data.id}</li>
                <li>${data.name}</li>
                <li>${data.company}</li>
                <li>${data.job}</li>
                </ul>              
               `;
               document.getElementById('employee').innerHTML=output;
          }
     }
     xhr.send();
}