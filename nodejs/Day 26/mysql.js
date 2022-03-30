let mysql=require('mysql');
let express=require('express');
let app=express();
let parser=require('body-parser');

let con=mysql.createConnection({
    host:"localhost",
    user:"root",
    password: "1234",
    database: "rigved"
});
let port=3000;

app.listen(port,()=>console.log(`Server is running at port ${port}`));

con.connect((error)=>{
    if(error)
        throw error;
    console.log('Connected!')
});

app.use(parser.json());
app.post('/emp',(request,response)=>{
   let object=request.body;
   console.log(object);
   con.query('insert into employee values('+mysql.escape(object.id)+','+mysql.escape(object.name)+','+mysql.escape(object.salary)+');',(err,result)=>{
       if(err) throw err;
       response.json(result);
   }); 
});

app.get('/emp',(request,response)=>{  
        con.query(("select * from employee"),(err,result)=>{
            if(err)
                throw err;
            console.log(result);
            response.json(result);
        })
    })

app.get('/emp/:id',(request,response)=>{
    let id=request.params.id;
        con.query("select * from employee where id="+mysql.escape(id),(err,result)=>{
            if (err)
                throw err;
            response.json(result);
        })
});

app.delete('/emp/:id',(request,response)=>{
    let id=request.params.id;
    con.query('delete from employee where id='+mysql.escape(id),(err,result)=>{
        if(err)
            throw err;
        response.json(result);
    });
});

app.put('/emp/:id/:name',(request,response)=>{
    let id=request.params.id;
    let name=request.params.name;
    con.query('update employee set name='+mysql.escape(name)+' where id='+mysql.escape(id),(err,result)=>{
        if(err)
            throw err;
        response.json(result);
    });
});

