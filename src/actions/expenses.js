import uuid from 'uuid';

//AddExpense
export const addExpense=(
    {
        description='',
        note='',
        amount=0,
        createdAt=0
    }={}
    )=>({
    type:'ADD_EXPENSE',
    expense:{
        id:uuid(),
        description,
        note,
        createdAt,
        amount
    }
});
//RemoveExpense

export const removeExpense=({id}={})=>({
    type:'REMOVE_EXPENSE',
    id
});

//EditExpense
export const editExpense=(id,update={})=>({
    type:'EDIT_EXPENSE',
    id,
    update
});