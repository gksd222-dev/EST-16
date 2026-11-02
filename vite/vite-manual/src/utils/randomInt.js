// min ~ max 사이의 정수 난수 생성 (max 포함)
export const randomInt = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
