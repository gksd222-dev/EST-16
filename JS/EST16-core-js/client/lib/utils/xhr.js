//[readyState]
// 0 : uninitialized
// 1 : loading
// 2 : loaded
// 3 : interactive
// 4 : complete     성공 / 실패

//import { message } from "statuses";

//const xhr = new XMLHttpRequest();

// xhr.open('GET','https://jsonplaceholder.typicode.com/users');

// xhr.addEventListener('readystatechange', ()=>{

//   if(xhr.readyState === 4){

//     if(xhr.status >= 200 && xhr.status < 400){

//       console.log( xhr.response );

//     }else{

//       console.log( {message: '알 수 없는 오류가 발생했습니다.'} );

//     }

//   }

// })

// xhr.send();




function xhr({
  method = 'GET', 
  url = '', 
  success = null, 
  fail = null,
  body = null,
  headers = {
    'Content-Type':'application/json',
    'Access-Control-Allow-Origin':'*',
  }
}){


  // const {method = 'GET', url = '', success, fail} = obj

  const xhr = new XMLHttpRequest();

  xhr.open(method,url);

  if(!(method === 'DELETE')) {
    Object.entries(headers).forEach(([k,v])=>{
      xhr.setRequestHeader(k,v);
    })
  }

  xhr.addEventListener('readystatechange',()=>{
    
    if(xhr.readyState === 4){

      if(xhr.status >= 200 && xhr.status < 400){
        success(xhr.response)
      }else{
        fail({message:'알 수 없는 오류가 발생했습니다.'})
      }
    }
  })

  xhr.send(JSON.stringify(body));

}


xhr.get = (url,success,fail) => {
  xhr({url,success,fail})
}


xhr.post = (url,success,fail,body) => {
  xhr({
    method:'POST',
    url,
    success,
    fail,
    body
  })
}



xhr.put = (url,success,fail,body) => {
  xhr({
    method:'PUT',
    url,
    success,
    fail,
    body
  })
}



xhr.delete = (url,success,fail) => {
  xhr({
    method:'DELETE',
    url,
    success,
    fail,
  })
}



xhr.post('https://jsonplaceholder.typicode.com/users',
  (res)=>{
    //console.log( res );
  },
  ()=>{

  },
  {name:'tiger'}
)


//console.dir(xhr);
