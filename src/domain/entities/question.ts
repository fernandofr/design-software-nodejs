import { Entity } from '../../core/entities/entity';
import { UniqueEntityID } from '../../core/entities/unique-entity-id';

import { Slug } from './value-objects/slug';

interface QuestionsProps {
  authorId: UniqueEntityID;
  title: string;
  content: string;
  slug: Slug;
  bestAnswerId?: UniqueEntityID;
  createdAt: Date;
  updatedAt?: Date;
}

export class Question extends Entity<QuestionsProps> {}
