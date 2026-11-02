// 선택자로 요소 찾기 (없으면 null)
export const $ = (selector, context = document) => context.querySelector(selector);
