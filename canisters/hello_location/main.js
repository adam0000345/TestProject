import actorInterface from "ic:idl/hello_location";

export default icHttpAgent.makeActorFactory(actorInterface)({
  canisterId: "ic:7F35B0A36DD2ED8DF2",
});
