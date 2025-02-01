
import { Team, Member } from '../src/Team';

describe('Team', () => {
    let team;

    beforeEach(() => {
        team = new Team();
    });

    test('should add members to the team', () => {
        const member1 = new Member('Alice', 'Developer');
        const member2 = new Member('Bob', 'Designer');

        team.addMember(member1);
        team.addMember(member2);

        expect(team.getMembers()).toEqual([member1, member2]);
    });

    test('should start with no members', () => {
        expect(team.getMembers()).toEqual([]);
    });
});