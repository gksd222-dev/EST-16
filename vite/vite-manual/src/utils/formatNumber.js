// 숫자를 천 단위 콤마 문자열로 변환 (예: 1234567 → "1,234,567")
export const formatNumber = (num) => Number(num).toLocaleString('ko-KR');
