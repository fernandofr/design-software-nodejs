import { Answer } from '../entities/answer';

interface AnsewerQuestionUseCaseProps {
  instructorId: string;
  questionId: string;
  content: string;
}

export class AnsewerQuestionUseCase {
  public execute({
    instructorId,
    questionId,
    content
  }: AnsewerQuestionUseCaseProps) {
    const answer = new Answer({
      content,
      authorId: instructorId,
      questionId
    });

    return answer;
  }
}
