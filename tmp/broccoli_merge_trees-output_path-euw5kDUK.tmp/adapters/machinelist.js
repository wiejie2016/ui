import DS from 'ember-data';

export default DS.RESTAdapter.extend({
   crossDomain: true,
//   corsWithCredentials: true,
   host: "http://localhost:8181/api",
   //namespace: "",
   pathForType(){
       return "all";
   }, 
});
