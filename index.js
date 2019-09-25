var app = require('express')(),
    port = process.env.PORT || 3000,
    mockData = {
    "name":"harshit",
    "work":"harshit"
            }
app.get('/', (req,res)=>{
    res.send('This is Api End-point for Mock Service');
});
app.get('/data' , (req,res)=>{
    res.send(mockData);
})
app.listen(port,()=>{
    console.log('Listening to Port ' + port);
});