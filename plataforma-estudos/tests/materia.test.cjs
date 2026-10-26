const {test} = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');

const html = fs.readFileSync(path.join(__dirname, '..', 'materia.html'), 'utf8');
const source = fs.readFileSync(path.join(__dirname, '..', 'materia-deep.js'), 'utf8');

// A small DOM adapter runs initialization without installing browser dependencies.
// Full interaction checks are performed in the local browser.
function load(subjectId, storageValue) {
  const nodes = new Map([...html.matchAll(/id="([^"]+)"/g)].map(match => [
    '#' + match[1], {innerHTML: '', textContent: '', value: ''}
  ]));
  const document = {
    querySelector: selector => {
      assert.ok(nodes.has(selector), 'Missing HTML element: ' + selector);
      return nodes.get(selector);
    },
    querySelectorAll: () => []
  };
  const context = vm.createContext({
    URLSearchParams,
    location: {search: '?materia=' + subjectId},
    document,
    localStorage: {getItem: () => storageValue ?? null, setItem: () => {}}
  });
  vm.runInContext(source, context);
  return {nodes, context};
}

for (const subjectId of ['portugues','producao','historia','ciencias','geografia','ingles','matematica']) {
  test(subjectId + ': initializes both reviews and all ten activities', () => {
    const {nodes} = load(subjectId);
    const lessons = nodes.get('#lessons').innerHTML;
    const quiz = nodes.get('#quiz').innerHTML;
    assert.equal((lessons.match(/class="lesson /g) || []).length, 2);
    assert.equal((lessons.match(/<li>/g) || []).length, 20);
    assert.equal((quiz.match(/class="quiz-card"/g) || []).length, 10);
    assert.equal((quiz.match(/<input /g) || []).length, 1);
    assert.doesNotMatch(lessons, /undefined/);
    assert.match(nodes.get('#finish').textContent, /0 de 10/);
  });
}

test('unknown subject falls back to Portuguese', () => {
  assert.equal(load('inexistente').nodes.get('#title').textContent, 'Língua Portuguesa');
});

test('malformed browser storage does not hide content', () => {
  assert.match(load('geografia', '{broken').nodes.get('#finish').textContent, /0 de 10/);
});

test('math accepts 50 without incorrectly accepting 150', () => {
  const {context} = load('matematica');
  assert.equal(vm.runInContext("evaluateWritten(s.questions[9], '50')", context), true);
  assert.equal(vm.runInContext("evaluateWritten(s.questions[9], '150')", context), false);
});

test('written answers accept accents and plural forms', () => {
  assert.equal(vm.runInContext("evaluateWritten(s.questions[9], 'alvéolos')", load('ciencias').context), true);
  assert.equal(vm.runInContext("evaluateWritten(s.questions[9], 'fugas')", load('historia').context), true);
});
