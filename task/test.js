const sum = require("./getSum");

test("Сложение 1 и 2 дает 3", () => {
  expect(sum(1, 2)).toBe(3);
});

test("Сложение отрицательных чисел", () => {
  expect(sum(-1, -5)).toBe(-6);
});

test("Возвращает ноль, если пропущен аргумент", () => {
  expect(sum()).toBe(0);
});
