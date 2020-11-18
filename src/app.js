const express = require('express');


const app = express();
app.use(express.json());
app.get('/ifconfig', async (req,res)=>{
    res.status(200).json({
        remote: req.ip
    });
});
app.get('/',(req,res)=>{
    res.send('ok');
})


const port = process.env.PORT||3000;
app.listen(port, () => {
  console.log(`Application is running on port ${port}`);
});