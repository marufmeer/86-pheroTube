const all= document.getElementById('allButton')
// allButton
const allButton= async() =>{
  const res = await fetch('https://openapi.programming-hero.com/api/videos/categories');
  const datas = await res.json();
  const data = datas.data;
  const id = data[0].category_id;
if(id==='1000'){
    all.classList.add('bg-red-500','text-white')
  }
  allData1(id);
 
  
 


  
  




};
allButton()
const musicButton= async() =>{
  const res = await fetch('https://openapi.programming-hero.com/api/videos/categories');
  const datas = await res.json();
  const data = datas.data;
  
  
  const id = data[1].category_id;
  if(id==='1001'){
    all.classList.remove('bg-red-500','text-white')
  }
  allData1(id);
 
  

  

};
const comedyButton = async() =>{
  const res = await fetch('https://openapi.programming-hero.com/api/videos/categories');
  const datas = await res.json();
  const data = datas.data;
  const id = data[2].category_id;
  if(id==='1003'){
    all.classList.remove('bg-red-500','text-white')
  }
  allData1(id);


};
const drawingButton = async() =>{
  const res = await fetch('https://openapi.programming-hero.com/api/videos/categories');
  const datas = await res.json();
  const data = datas.data;
  const id = data[3].category_id;
  if(id==='1005'){
    all.classList.remove('bg-red-500','text-white')
  }
  allData1(id);


};


//   allData1();
const allData1 = async(id) =>{
  const res = await fetch(`https://openapi.programming-hero.com/api/videos/category/${id}`);
  const datas = await res.json();  
  const data= datas.data;

   displayElement(data,id)
     document.getElementById('sort').addEventListener('click',function(){
    // const maindata= data;
    data.sort((a,b)=>{
      const view1= parseInt(a.others?.views.replace('K',"000"))
      const view2= parseInt(b.others?.views.replace('K',"000"))
      return view2-view1;
    })
    displayElement(data,id)
  })
                                                                 



                 
  
};
  //  function for seconds to conver hours and miniutes
 
// second to hrs and min
function secondToHrMin(seconds){
  if(seconds>0){
   const hr= parseInt(seconds/3600)
   const min= parseInt(seconds%3600/60)
   
   return `${hr}hrs ${min} min ago`;
 
  }
  else{
    return '';
  }
 }                 

// display all element
const displayElement=(element,category_id)=>{

 
  
  if(category_id==="1005"){
    const container= document.getElementById('container');
   container.textContent=""
   
   container.classList=`flex flex-col items-center justify-center`
   const div= document.createElement("div");
   div.classList=`flex flex-col items-center justify-center mt-5`
   div.innerHTML=`
   <img src="Icon.png" alt="" >
   <h1 class="text-5xl font-bold">Oops!! Sorry, There is no content here</h1>`
   container.appendChild(div) 
   }
 

else{
  const container= document.getElementById('container');
  container.textContent="";
  container.classList=`grid lg:grid-cols-4 lg:gap-x-6 lg:gap-y-12  md:grid-cols-2 gap-x-6 lg:gap-y-12  sm:grid-cols-1 gap-y-14   mb-10`
  
 
element.forEach(data => {
  
   
  
  const time=  secondToHrMin(data.others?.posted_date)

  console.log(time)
  
  
  
  
  const div = document.createElement('div');
  div.classList = `card shadow-lg rounded-lg`;
  div.innerHTML = `
  <div>
      <img class=" h-52 w-full rounded-lg
      " src="${data.thumbnail}" alt="" />
     
      <p id="badge" style="font-size: 10px;"  class="badge badge-neutral absolute top-44 right-2.5  ">${time}</p
       </div>
     
      
    <div class="pt-4 pe-4">
      <div class="inline-flex  mr-3 text-sm text-gray-900 dark:text-white">
      <img class="mr-4 w-16 h-16 rounded-full" src="${data.authors[0].profile_picture}"alt="Jese Leos"/>
      <div>
        <a href="#" rel="author" class="text-xl font-bold text-gray-900 dark:text-white"
          >${data.title}</a>
        <p class="text-base text-gray-500 dark:text-gray-400 pt-1">
        ${data.authors[0].profile_name}
        </p>
        <p class="text-base text-gray-500 dark:text-gray-400 pt-1">
        ${data.others.views} views <span>${data.authors[0].verified == true? `<i class="fa fa-check-circle"></i>`  : ' '}</span>
        </p>
      </div>
    </div>
  `; 
  
  container.appendChild(div)
 
  
  

  
  
});
}

   

}

// seconds to hour and minute 


// blog side 

document.getElementById('blog').addEventListener('click',function(){
  window.location.href="blog.html"
})














// let data = newData

//     // sorting start 
//     shortByView = (checkSort) => {
        
//         if (checkSort) {
      
//             const sortBtn = document.getElementById('shorted-btn')
//             const btn = document.createElement('span')
//             sortBtn.textContent = ''
//             btn.innerHTML = <a class="btn normal-case bg-[#FF1F3D] text-white" onclick="shortByView(false)">Sort by view Ascending</a>
//             sortBtn.appendChild(btn)
//             console.log(sortBtn)
//             newData.sort((a, b) => {
//                 const viewA = parseInt(a.others.views.replace('K', '000'));
//                 const viewB = parseInt(b.others.views.replace('K', '000'));
//                 return viewB - viewA;
//             });

//             thumbnailDisplay(newData, category_id)
//             return newData
//         } else {
//             const sortBtn = document.getElementById('shorted-btn')
//             const btn = document.createElement('span')
//             sortBtn.textContent = ''
//             btn.innerHTML = <a class="btn normal-case text-black" onclick="shortByView(true)">Sort by view dissenting</a>
//             sortBtn.appendChild(btn)
        
//             newData.sort((a, b) => {
//                 console.log()
//                 const viewA = parseInt(a.others.views.replace('K'));
//                 const viewB = parseInt(b.others.views.replace('K'));
//                 console.log(viewA, viewB)
//                 return viewA - viewB;
//             });
            
//             thumbnailDisplay(newData, category_id)
//             return newData
//         }






//       }
