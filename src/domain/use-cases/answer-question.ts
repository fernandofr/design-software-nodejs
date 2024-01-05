import { UniqueEntityID } from '@/core/entities/unique-entity-id'
import { Answer } from '../entities/answer'

import { AnswersRepository } from '../repositories/answer-repository'

interface AnswerQuestionUseCaseProps {
  instructorId: string
  questionId: string
  content: string
}

export class AnswerQuestionUseCase {
  constructor(private answerRepository: AnswersRepository) {}

  public async execute({
    instructorId,
    questionId,
    content,
  }: AnswerQuestionUseCaseProps) {
    const answer = Answer.create({
      content,
      authorId: new UniqueEntityID(instructorId),
      questionId: new UniqueEntityID(questionId),
    })

    await this.answerRepository.create(answer)

    return answer
  }
}
