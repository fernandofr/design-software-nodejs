import { Answer } from '../entities/answer';

import { AnswerRepository } from '../repositories/answer-repository';

interface AnsewerQuestionUseCaseProps {
  instructorId: string;
  questionId: string;
  content: string;
}

export class AnsewerQuestionUseCase {
  constructor(private answerRepository: AnswerRepository) {}

  public async execute({
    instructorId,
    questionId,
    content
  }: AnsewerQuestionUseCaseProps) {
    const answer = new Answer({
      content,
      authorId: instructorId,
      questionId
    });

    await this.answerRepository.create(answer);

    return answer;
  }
}
