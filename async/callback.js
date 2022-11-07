function doStep1(init, otherFun) {
  const result = init + 1;
  otherFun(result, doStep3);
}

function doStep2(init, otherFun) {
  const result = init + 2;
  otherFun(result);
}
function doStep3(init) {
  const result = init + 3;
  // console.log(result);
}
doStep1(0, doStep2);

// using the callback

function step1(init, callback) {
  const result = init + 1;
  callback(result);
}
function step2(init, callback) {
  const result = init + 2;
  callback(result);
}
function step3(init, callback) {
  const result = init + 3;
  callback(result);
}

function doSteps() {
  step1(0, (result) => {
    step2(result, (result) => {
      step3(result, (result) => {
        console.log(`Result : ${result}`);
      });
    });
  });
}

doSteps();
