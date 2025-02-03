
import Team from '../src/Team';
import Character from '../src/Character';

test('добавление персонажа в команду', () => {
    const team = new Team();
    const character = new Character('Hero');

    team.add(character);
    expect(team.toArray()).toContain(character);
});

test('добавление дублирующего персонажа вызывает ошибку', () => {
    const team = new Team();
    const character = new Character('Hero');

    team.add(character);
    expect(() => team.add(character)).toThrow('Этот персонаж уже добавлен в команду.');
});

test('добавление нескольких персонажей', () => {
    const team = new Team();
    const character1 = new Character('Hero');
    const character2 = new Character('Villain');

    team.addAll(character1, character2);
    expect(team.toArray()).toEqual(expect.arrayContaining([character1, character2]));
});