export default (expenses)=>{
    return expenses.map((expense)=> expense.amount).reduce((sum,a)=>sum+a,0);
  };
