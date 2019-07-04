import _ from 'lodash';
// import { get } from 'lodash';

const myObject = {
  users: [
    {
      name: 'Cesar',
      skills: [
        {
          name: 'Javascript'
        }
      ]
    }
  ]
};

const firstAptitude = _.get(myObject, 'users.0.skills.0.name');

document.getElementById('app').innerHTML = firstAptitude;
