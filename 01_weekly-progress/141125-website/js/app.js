var queries = [
{
  context: 'mobile',
  match: function() {
    console.log('Mobile callback. Maybe hook up some tel: numbers?');
    // Your mobile specific logic can go here.
  },
  unmatch: function() {
    // We're leaving mobile.
  }
},
{
  context: 'tablet',
  match: function() {
    console.log('skinny callback! Swap the class on the body element.');
    // Your tablet specific logic can go here.
  },
  unmatch: function() {

  }

},
{
  context: 'wide-screen',
  match: function() {
    console.log('wide-screen callback woohoo! Load some heavy desktop JS badddness.');
    // your desktop specific logic can go here.
  }
}
];
// Go!
MQ.init(queries);
