/**
 * Written for UTSC New Media in Theory
 * Parts of this code is adapted from Nick Puckett & Kate Hartman's Creation & Computation PubNub Code
 * 
 * This file sets up the publish and subscribe events for the all of the pubnub pages on this website.  
*/

let dataServer;
let pubKey = "pub-c-6493abc9-741f-4c44-bf53-01fbd9fc494d";
let subKey = "sub-c-2081cae9-8f73-45e7-8644-694fdb95eb79";
let secretKey = "sec-c-YjBmNGI3NmItYTZhOS00ZjcxLWIyNDAtMmFlNjQzYWQ4Njg0";

dataServer = new PubNub({
    subscribeKey: subKey,
    publishKey: pubKey,
    uuid: "Xiaoyu",
    secretKey: secretKey,
    heartbeatInterval: 0,
  });

  

