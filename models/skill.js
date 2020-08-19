const skills = [
  { id: 1, skill: "HTML/CSS", done: true },
  { id: 2, skill: "Javascript", done: true },
  { id: 3, skill: "Express", done: false },
  { id: 4, skill: "Python", done: false },
];

module.exports = {
  getAll,
  getOne,
  create,
  deleteOne,
};

function deleteOne(id) {
  const idx = skills.findIndex((skill) => skill.id === parseInt(id));
  skills.splice(idx, 1);
}

function create(skill) {
  skill.id = Date.now() % 100000;
  skill.done = false;
  skills.push(skill);
}

function getAll() {
  return skills;
}

function getOne(id) {
  // Use the Array.prototype.find iterator method
  return skills.find((skill) => skill.id === parseInt(id));
}
