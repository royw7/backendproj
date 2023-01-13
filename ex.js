const express = require('express');
const app = express();
app.use(express.json());

app.get('/', (req,res)=>{
    res.send('Hello there');
});

const courses = [
    {id: 1, name:'Web Development'},
    {id:2, name: 'IT'},
    {id:3, name: 'Cybersecurity'},
];

app.get('/api/courses', (req, res)=>{
    res.send(courses);
})
//http post request

app.post('api/courses', (req,res) => {
    // you write the if code here
    //add an if statement so that the name of the course you post is .min(3) characters 
    if(req.name.length >= 3){
        const course ={
            //we assign an ID and a name property
            id: course.length +1,
            name:req.body.name
    }
    courses.push(course)
    res.send(course)
}
            //YOU WRITE THE NEXT LINES OF code
          //next step: push it to the array
            //next step: the server should return the new resource to the client in the body of the response
    
      
    });
    
app.get('/api/courses/:id', (req,res)=>{
    const course = courses.find(c=>c.id === parseInt(req.params.id));
    if(!course){
        res.status(404).send("The course with the given ID was not found")
        return
    }
    res.send(course)
})
app.listen(3000, () => {
    console.log('Listening on port 3000...')
})
