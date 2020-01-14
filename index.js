var knex = require('knex')({
    client: 'pg',
    connection: {
      host : 'dp416311-003.dbaas.ovh.net',
      user : 'buzzz_io_strapi',
      password : '8gyzk42B',
      database : 'buzzz_io_strapi',
      connectTimeout: 90000
    },
    pool: {  //<- this is important
      min : 0 
    },
    // client: 'mssql',
    // connection: {
    //   host : '127.0.0.1',
    // //   user : 'sa',
    // //   password : '8gyzk42B',
    //   database : 'Sharepoint_19731',
    //   connectTimeout: 90000
    // }
  });

  // knex.raw("SELECT VERSION()")
  //     .then((version) => console.log((version[0][0])))
  //     .catch((err) => { console.log( err); throw err })
  //     .finally(() => {
  //         knex.destroy();
  //     });

// //   var test = knex.select().table('users-permissions_user')

// //   console.log(test);




// var knex = require('knex')({
//     client: 'mssql',
//     connection: {
//         server:'localhost',
//       connectionString: "Initial Catalog=SharePoint_19731;Data Source=.;Integrated Security=SSPI;"
//     }
//   });

//   knex.raw("SELECT VERSION()").then(
//     (version) => console.log((version[0][0]))
// ).catch((err) => { console.log( err); throw err });
//     // .finally(() => {
//     //     knex.destroy();
// //     // });

knex
  .from('users-permissions_user')
  .select('username')
  .then((test)=>{
    //console.log(test);    
  });


  // knex('buzzz_io_strapi').table('users-permissions_user')
  //   .select('Products.Price as Price')
  //   .then((product) => {
  //     // console.log('log product', product);
  //     // console.dir('dir product', product);
  //     // logger.info('Query Data: %j', product);
  //   })
  //   .finally(() => {
  //     knex.destroy();
  //   });