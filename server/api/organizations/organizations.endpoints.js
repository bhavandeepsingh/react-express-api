const { Organizations, init } = require('@kinde/management-api-js');

init();

const fetchOrganizations = async () => {
  try{
    const  data = await Organizations.getOrganizations();
    if(data.code == "ok"){
      return data.organizations
    }
  }catch(err){
    console.log(err);
  }
}

const index = async (req, res) => {  
  res.send({
    status: "success",
    code: 200,
    message: "OK",
    data: {
      organizations: await fetchOrganizations(),
    },
  });
}

  module.exports = {
    index,
  };
