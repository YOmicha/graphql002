const farm = [
  { id:'farm001', name:'farm 101'},
            { id:'farm002', name:'farm 2'},
            { id:'farm003', name:'farm 34'}
];

// Imports: Axios
import axios from 'axios';
// GraphQL: Resolvers
  const RESOLVERS = {
    Query: {
    farm: //() => {
      //return farm;
    (parent, args) => {
      return axios.get('http://localhost:5000/api/farm/list')
      .then((response) => response.data)
      .catch((error) => console.log(error))
    },
    farms: (parent, args) =>{
      return axios.get('http://localhost:5000/api/farm/list')
      .then( (response) => response.data.find( farms.num == args.age ))
    }

    }
};
// Exports
export default RESOLVERS;