import ExpenseItem from "./ExpenseItem";
import "./AllExpenses.css";
import Card from "../UI/Card";

const AllExpenses = (props) => {
  return (
    <Card className="expenses">
      <h1>Let's get started!</h1>
      <ExpenseItem
        title={props.item[0].title}
        amount={props.item[0].amount}
        date={props.item[0].date}
      ></ExpenseItem>

      <ExpenseItem
        title={props.item[1].title}
        amount={props.item[1].amount}
        date={props.item[1].date}
      ></ExpenseItem>
      <ExpenseItem
        title={props.item[2].title}
        amount={props.item[2].amount}
        date={props.item[2].date}
      ></ExpenseItem>
      <ExpenseItem
        title={props.item[3].title}
        amount={props.item[3].amount}
        date={props.item[3].date}
      ></ExpenseItem>
    </Card>
  );
};

export default AllExpenses;
