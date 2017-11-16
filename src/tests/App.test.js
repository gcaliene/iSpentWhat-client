
import { addExpense, editExpense, removeExpense } from "../actions/action";
//when using objects and/or array we want to use toEqual
//when bool numbers or strings then use to be


it('should set up remove action object', () => {
    const action = removeExpense({ id: '123abc' });
    expect(action).toEqual({
        type:'REMOVE_EXPENSE',
        id: '123abc'
    });
});
