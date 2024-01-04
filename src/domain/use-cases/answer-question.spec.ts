import { AnsewerQuestionUseCase } from './answer-question';
import { AnswerRepository } from '../repositories/answer-repository';
import { Answer } from '../entities/answer';

const fakeAnswerRepository: AnswerRepository = {
  create: async (answer: Answer) => {
    return;
  }
};

test('create an answer', async () => {
  const answerQuestion = new AnsewerQuestionUseCase(fakeAnswerRepository);

  const answer = await answerQuestion.execute({
    questionId: '1',
    instructorId: '1',
    content: 'new question'
  });

  expect(answer.content).toEqual('new question');
});
