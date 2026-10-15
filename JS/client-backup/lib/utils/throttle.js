


function throttle (f, limit=1000){
  let wait = false;

  return function (...args){
    if(!wait){
      f.apply(this,args)
      wait = true;
      setTimeout(() => wait = false, limit);
      //이러면 콜백함수가 무조건 한번만 실행
    }
  }
}
