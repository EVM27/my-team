
class Member {
    constructor(name, role) {
        this.name = name;
        this.role = role;
    }
}

class Team {
    constructor() {
        this.members = [];
    }

    addMember(member) {
        this.members.push(member);
    }

    getMembers() {
        return this.members;
    }
}

module.exports = { Team, Member };