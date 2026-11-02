// 디바운스: 마지막 호출 후 delay(ms)가 지나야 실행 (검색 입력, 리사이즈 등)
export const debounce = (fn, delay = 300) => {
  let timer;
  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => fn(...args), delay);
  };
};
