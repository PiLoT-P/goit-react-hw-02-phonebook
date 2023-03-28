import { Component } from "react";

import TodoForm from "components/TodoForm/TodoForm";
import TodoList from "components/TodoList/TodoList";
import TodoFilter from "components/TodoFilter/TodoFilter";

import css from "./TodoPage.module.css";

class TodoPage extends Component{
    state = {
        contacts: [
            {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
            {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
            {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
            {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
        ],
        filter: ''
    }

    addTodo = (todo) => {
        this.setState((prev) => ({
            contacts: [...prev.contacts, todo],
        }));
    };

    filterTodoList = () => {
        const { contacts, filter } = this.state;
        if (filter === '') return contacts; 
        return contacts.filter((el) => el.name.toLowerCase().includes(filter.toLowerCase()));
    };

    getFilter = (event) => {
        const { name, value } = event.target;
        this.setState({ [name]: value });
    };

    removeTodo = (id) => {
        this.setState((prev) => ({
            contacts: prev.contacts.filter((el) => el.id !== id),
        }));
    };


    render() {
        const { contacts, filter } = this.state;

        const filterTodo = this.filterTodoList();

        return (
            <div className={css.main}>
                <h1>Phonebook</h1>
                <TodoForm contacts={contacts} addTodo={this.addTodo} />
                <h2>Contacts</h2>
                <TodoFilter filter={filter} getFilter={this.getFilter} />
                <TodoList
                    contacts={filterTodo}
                    removeTodo={this.removeTodo}
                />
            </div>
        );
    }
}

export default TodoPage;