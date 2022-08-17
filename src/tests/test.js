import Team from "../js/app";

test('корректность добавления персонажа - перавичное', () => {

  const input = 'Popper';
  const expected = ['Popper'];
  const received = [];

  ((new Team).add(input)).forEach(
    element => received.push(element));

  expect(received).toStrictEqual(expected);
});

test('корректность добавления персонажа - повторное (дублирование)', () => {

  const testObj = new Team;
  const input = 'Popper';
  testObj.add(input);

  expect(() => {
    testObj.add(input);
  }).toThrowError(new Error('Добавление персонажа невозможно - он уже в команде.'));
});

test('корректность добавления нескольких персонажей', () => {

  const input = ['Bowerman', 'Daemon', 'Zombie', 'Bowerman'];
  const expected = ['Bowerman', 'Daemon', 'Zombie'];
  const received = [];

  ((new Team).addAll(...input)).forEach(
    element => received.push(element));

  expect(received).toEqual(expected);
});

test('получение массива из контейнера Set', () => {

  const input = ['Bowerman', 'Daemon', 'Zombie', 'Bowerman'];
  const expected = ['Bowerman', 'Daemon', 'Zombie'];

  const testObj = new Team;
  testObj.addAll(...input);

  const received = testObj.toArray();

  expect(received).toEqual(expected);
});

