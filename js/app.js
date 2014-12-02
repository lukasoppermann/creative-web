//  document.body.classList.remove("foo");
//  document.body.classList.add("anotherclass");

var queries = [
{
  context: 'mobile',
  match: function() {
    document.body.classList.add('mobile');
  },
  unmatch: function() {
    document.body.classList.remove('mobile');
  }
},
{
  context: 'tablet',
  match: function() {
    document.body.classList.add('tablet');
  },
  unmatch: function() {
    document.body.classList.remove('tablet');
  }
},
{
  context: 'wide-screen',
  match: function() {
    document.body.classList.add('wide-screen');
  },
  unmatch: function() {
    document.body.classList.remove('wide-screen');
  }
}
];
// Go!
MQ.init(queries);
