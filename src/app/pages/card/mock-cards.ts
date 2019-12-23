import { v1 as uuid } from 'uuid';
import Faker from 'faker';

import { Card } from '../../models/card.model';

export const CARDS: Card[] = [
  { id: uuid(), title: Faker.internet.userName(), attack: Faker.random.number(4), defense: Faker.random.number(2), content: Faker.lorem.paragraph() },
  { id: uuid(), title: Faker.internet.userName(), attack: Faker.random.number(4), defense: Faker.random.number(2), content: Faker.lorem.paragraph() },
  { id: uuid(), title: Faker.internet.userName(), attack: Faker.random.number(4), defense: Faker.random.number(2), content: Faker.lorem.paragraph() },
  { id: uuid(), title: Faker.internet.userName(), attack: Faker.random.number(4), defense: Faker.random.number(2), content: Faker.lorem.paragraph() },
  { id: uuid(), title: Faker.internet.userName(), attack: Faker.random.number(4), defense: Faker.random.number(2), content: Faker.lorem.paragraph() },
  { id: uuid(), title: Faker.internet.userName(), attack: Faker.random.number(4), defense: Faker.random.number(2), content: Faker.lorem.paragraph() },
  { id: uuid(), title: Faker.internet.userName(), attack: Faker.random.number(4), defense: Faker.random.number(2), content: Faker.lorem.paragraph() },
  { id: uuid(), title: Faker.internet.userName(), attack: Faker.random.number(4), defense: Faker.random.number(2), content: Faker.lorem.paragraph() },
  { id: uuid(), title: Faker.internet.userName(), attack: Faker.random.number(4), defense: Faker.random.number(2), content: Faker.lorem.paragraph() },
  { id: uuid(), title: Faker.internet.userName(), attack: Faker.random.number(4), defense: Faker.random.number(2), content: Faker.lorem.paragraph() },
  { id: uuid(), title: Faker.internet.userName(), attack: Faker.random.number(4), defense: Faker.random.number(2), content: Faker.lorem.paragraph() },
  { id: uuid(), title: Faker.internet.userName(), attack: Faker.random.number(4), defense: Faker.random.number(2), content: Faker.lorem.paragraph() },
  { id: uuid(), title: Faker.internet.userName(), attack: Faker.random.number(4), defense: Faker.random.number(2), content: Faker.lorem.paragraph() },
  { id: uuid(), title: Faker.internet.userName(), attack: Faker.random.number(4), defense: Faker.random.number(2), content: Faker.lorem.paragraph() },
  { id: uuid(), title: Faker.internet.userName(), attack: Faker.random.number(4), defense: Faker.random.number(2), content: Faker.lorem.paragraph() },
  { id: uuid(), title: Faker.internet.userName(), attack: Faker.random.number(4), defense: Faker.random.number(2), content: Faker.lorem.paragraph() },
  { id: uuid(), title: Faker.internet.userName(), attack: Faker.random.number(4), defense: Faker.random.number(2), content: Faker.lorem.paragraph() },
  { id: uuid(), title: Faker.internet.userName(), attack: Faker.random.number(4), defense: Faker.random.number(2), content: Faker.lorem.paragraph() },
  { id: uuid(), title: Faker.internet.userName(), attack: Faker.random.number(4), defense: Faker.random.number(2), content: Faker.lorem.paragraph() },
  { id: uuid(), title: Faker.internet.userName(), attack: Faker.random.number(4), defense: Faker.random.number(2), content: Faker.lorem.paragraph() },
  { id: uuid(), title: Faker.internet.userName(), attack: Faker.random.number(4), defense: Faker.random.number(2), content: Faker.lorem.paragraph() },
  { id: uuid(), title: Faker.internet.userName(), attack: Faker.random.number(4), defense: Faker.random.number(2), content: Faker.lorem.paragraph() },
  { id: uuid(), title: Faker.internet.userName(), attack: Faker.random.number(4), defense: Faker.random.number(2), content: Faker.lorem.paragraph() },
  { id: uuid(), title: Faker.internet.userName(), attack: Faker.random.number(4), defense: Faker.random.number(2), content: Faker.lorem.paragraph() },
  { id: uuid(), title: Faker.internet.userName(), attack: Faker.random.number(4), defense: Faker.random.number(2), content: Faker.lorem.paragraph() },
  { id: uuid(), title: Faker.internet.userName(), attack: Faker.random.number(4), defense: Faker.random.number(2), content: Faker.lorem.paragraph() },
];
