import faker from 'faker';
import factory from 'factory-girl';
import User from '../../server/model/user';
import Taxi from '../../server/model/taxi';

factory.define('User', User, {
  firstName: faker.name.firstName(),
  lastName: faker.name.lastName(),
  password: 'password1234',
  role: '5ce6652fdd3ca11fe810270d',
  phoneNumber: faker.phone.phoneNumber(),
});

factory.define('Taxi', Taxi, {
  plateNumber: faker.name.firstName(),
  model: faker.name.lastName(),
  owner: '5ce6652fdd3ca11fe810270d',
  taxiImage: faker.image.imageUrl(),
});

export default factory;
