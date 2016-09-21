module.exports = {
  name: 'Test test',
  html: __dirname + '/env.html',
  test: fillArray(createTest(), 50)
}

function createTest(index){
  return {
    name: 'test',
    init: function(){
      var y = fillArray('Y', 1000000);
    },
    test: function(){
      assert(true, true);
    }
  }
}

function fillArray(value, len) {
  var arr = [];
  for (var i = 0; i < len; i++)
    arr.push(value);
  return arr;
}