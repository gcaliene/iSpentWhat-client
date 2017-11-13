import React from 'react';

export default class ExpenseForm extends React.Component {
    //this state is only temporary because it will only be there until user submits form and sends it to redux
    constructor(props){
        super(props);
                        //we have to make sure that the page still works if there is an expense or not
                        //thisis why we have to bring in the props
        this.state = {
            description: props.expense ? props.expense.description : '',
            note: props.expense ? props.expense.note : '',
            amount: props.expense ? (props.expense.amount / 100).toString() : '',
            calendarFocused: false,
            createdAt: new Date(),
        };
    }

    onDescriptionChange = (e) => {
        const description = e.target.value;
        this.setState(() => ({ description })); // or use description:description
    }

    onNoteChange = (e) => {
        const note = e.target.value;// this const is NEEDED!!!!!!!!!!!!!!!! better than e.persist
        this.setState(() => ({ note })); //going to implivitly return an object
    }

    onAmountChange = (e) => {
        const amount = e.target.value;
        this.setState(() => ({ amount }))
        
    };

    onSubmit=(e) => {
        e.preventDefault();
        this.props.onSubmit({
            description: this.state.description,
            amount: parseFloat(this.state.amount, 10) * 100, //we are multiplying by 100 to wrok with pennies
            createdAt: this.state.createdAt.valueOf(),
            note:this.state.note
        })
    }


    render() {
        return(
            <div>
                <form onSubmit={this.onSubmit}>
                    <input 
                        type="text"
                        placeholder="Description"
                        autoFocus
                        value={this.state.description}
                        onChange={this.onDescriptionChange}
                    />
                    <input 
                        type="text"
                        value={this.state.amount}
                        onChange={this.onAmountChange}
                        placeholder="Amount"
                    />
                    <textarea 
                        name="" 
                        value={this.state.note}
                        placeholder="(optional)"
                        onChange={this.onNoteChange}
                    >
                    </textarea>
                    <button>Add Expense</button>
                </form>
            </div>
        )
    }
}
