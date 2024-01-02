import { Answer } from "../entities/answer";

interface AnsewerQuestionUseCaseParams {
  instructorId: string;
  questionId: string;
  content: string;
}

export class AnsewerQuestionUseCase {
  public execute({
    instructorId,
    questionId,
    content,
  }: AnsewerQuestionUseCaseParams) {
    const answer = new Answer(content);

    return answer;
  }
}
