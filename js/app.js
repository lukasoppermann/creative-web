/* click-event für menü icon in mobile view */
document.querySelector('.nav-icon').addEventListener("click", function(){
  document.querySelector('.navigation').classList.toggle('is-open');
});

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
