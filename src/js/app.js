class Team {
  constructor() {
    this.members = new Set();
  }

  add(member) {
    if (!this.members.has(member)) {
      return this.members.add(member);
    } else {
      throw new Error('Добавление персонажа невозможно - он уже в команде.';
    }
  }

  addAll(...members) {
    for (const member of members) this.members.add(member);
    	return this.members;
  }

  toArray() {
    return Array.from(this.members);
  }
}

export default Team;