test('2 더하기 2는 4', () => {
  expect(2 + 2).toBe(4);
});

test('객체 속성 검증', () => {
  const data = {one: 1};
  data['two'] = 2;
  expect(data).toEqual({one: 1, two: 2});
});

test('이중 for문을 돌면서 a + b가 0이 되는 순간은 없는지', () => {
  for (let a = 1; a < 10; a++) {
    for (let b = 1; b < 10; b++) {
      expect(a + b).not.toBe(0);
    }
  }
});

test('null 값에 대한 진위 판별', () => {
  const n = null;
  expect(n).toBeNull();
  expect(n).not.toBeTruthy();
  expect(n).toBeFalsy();
});

test('0에 대한 진위 판별', () => {
  const z = 0;
  expect(z).not.toBeNull();
  expect(z).toBeDefined();
  expect(z).not.toBeUndefined();
  expect(z).not.toBeTruthy();
  expect(z).toBeFalsy();
});

test('two plus two', () => {
  const value = 2 + 2;
  expect(value).toBeGreaterThan(3);
  expect(value).toBeGreaterThanOrEqual(3.5);
  expect(value).toBeLessThan(3);
  expect(value).toBeLessThanOrEqual(3);
});
const shoppingList = [
  'diapers',
  'kleenex',
  'trash bags',
  'paper towels',
  'milk',
];

test('shoppingList에 milk가 있는지?', () => {
  expect(shoppingList).toContain('milk');
  expect(new Set(shoppingList)).toContain('milk');
});

test('shoppingList에 chocolate가 있는지?', () => {
  expect(shoppingList).toContain('chocolate');
  expect(new Set(shoppingList)).toContain('chocolate');
});

const fetchData = require("./fetchData")
test('Async/Await로 받아온 데이터가 peanut butter인지', async () => {
  const data = await fetchData();
  expect(data).toBe('peanut butter');
});

test('Promise로 받아온 데이터가 peanut butter인지', () => {
  return fetchData().then(data => {
    expect(data).toBe('peanut butter');
  });
});
