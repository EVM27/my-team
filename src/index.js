

import { Team, Member } from './Team';

const team = new Team();
team.addMember(new Member('Alice', 'Developer'));
team.addMember(new Member('Bob', 'Designer'));

console.log('Team Members:', team.getMembers());