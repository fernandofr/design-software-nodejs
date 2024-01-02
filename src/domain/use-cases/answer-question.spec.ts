import { expect, test } from 'vitest';
import { AnsewerQuestionUseCase } from './answer-question';

test('create an answer', () => {
  const answerQuestion = new AnsewerQuestionUseCase();

  const answer = answerQuestion.execute({
    questionId: '1',
    instructorId: '1',
    content: 'new question'
  });

  expect(answer.content).toEqual('new question');
});
