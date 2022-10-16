// Mechanism Arena
let state = "Ishaan",
  history = state;
let setState = (value) => {
  state = value;
};

function useEffect(callback, dependency) {
  // In case of no dependency
  if (!dependency) {
    callback();
    setTimeout(() => {
      useEffect(callback, dependency);
    }, 1000);
  }

  // In case empty array
  if (state == history && dependency.length == 0) {
    callback();
    return;
  }

  // In case with dependency variable
  callback();
  if (state != history) {
    history = state;
    setTimeout(() => {
      useEffect(callback, dependency);
    }, 1000);
  }
}

export {useEffect, state, setState};