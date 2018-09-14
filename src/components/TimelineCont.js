import React, { Component } from 'react';
import TimelinePres from './TimelinePres';

const client = window.stitch.Stitch.initializeDefaultAppClient('sqbox-pool-fvwhb');
const db = client.getServiceClient(window.stitch.RemoteMongoClient.factory, 'mongodb-atlas').db('fifa-pool');

client.auth.loginWithCredential(new window.stitch.AnonymousCredential()).then(user => 
    db.collection('rank').updateOne({owner_id: client.auth.user.id}, {$set:{number:42}}, {upsert:true})
  ).then(() => 
    db.collection('rank').find({owner_id: client.auth.user.id}, { limit: 100}).asArray()
  ).then(docs => {
      console.log("Found docs", docs)
      console.log("[MongoDB Stitch] Connected to Stitch")
  }).catch(err => {
    console.error(err)
  });

class TimelineCont extends Component {
  
    render(){
        return(
            <TimelinePres />
        );
    }
}

export default TimelineCont;