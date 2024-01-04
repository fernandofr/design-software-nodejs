import { Entity } from '../../core/entities/entity';
import { UniqueEntityID } from '../../core/entities/unique-entity-id';
import { Optional } from '../../core/types/optional';

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

export class Question extends Entity<QuestionsProps> {
  static create(props: Optional<QuestionsProps, 'createdAt'>, id?: string) {
    const question = new Question({
      ...props,
      createdAt: new Date()
    });

    return question;
  }
}
