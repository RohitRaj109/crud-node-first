import { v4 as uuidv4 } from 'uuid';

 var users = [
    {
        firstName:"Rohit",
        lastName:"Singh",
        jobTitle:"Developer",
        racingTeam:"team1",
        status:"Win"
    }
 ];

export const basicGet = (req,res)=>{
  //  res.send('Welcome,  node is runing, show! data from controller');
  let hostname = "127.0.0.1";
  let PORT = '8080';
res.send(`Welcome, running at <a href="http://127.0.0.1:8080/">http://${hostname}:${PORT}/</a>`)
}

/*
C --Create Record
R -- Read Data
U -- Update Record
D-- Delete Existing record
*/

export const createUser = (req,res)=>{ 
    const newUser= req.body;
   users.push({...newUser, id:uuidv4()});
   res.status(200).send({...users, message:`user with ${newUser.firstName} has been  created successfully`})
}
export const getUser = (req,res)=>{
    let resData = {
        status: 200,
        data:users,
        message: 'Application is up'
    };
    res.send(resData);
}
export const updateUser = (req,res)=>{
    const id = req.params;
    var data = req.body;
    var objIndex = users.findIndex((obj)=>obj.id ==id.id);
    users[objIndex].firstName = data.firstName;
   users[objIndex].lastName = data.lastName;
  // users[objIndex].age = data.age;
   users[objIndex].jobTitle= data.jobTitle;
   users[objIndex].racingTeam = data.racingTeam;
   users[objIndex].status = data.status;

   res.send({...users,message:`user details with ${id.id} updated successfully`})
}
export const deleteUser = (req,res)=>{
    const {id} = req.params;
    users = users.filter((user)=>{
        if(user.id !=id){return true;}
    })
    res.send({...users,message:`items for ${id} deleted successfully`})
}
