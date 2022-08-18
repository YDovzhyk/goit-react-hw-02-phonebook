import { Component } from "react";

import ContactForm from "./Phonebook/ContactForm/ContactForm";
import Filter from "./Phonebook/Filter/Filter";
import ContactList from "./Phonebook/ContactList/ContactList";
import { element } from 'prop-types';

export class App extends Component {
    state = {
        contacts: [],
        name: '',
        number: ''
        }

    handleInputChange = event => {
        const { name, value } = event.currentTarget;
        this.setState({ 
            [name]: value,
        });
    };

    handleSubmit = event => {
        event.preventDefault();
        console.log(this.state);
    }

    render(){


        return (
            <div>
                <h1>Phonebook</h1>
                {/* <div>
        <form onSubmit={this.handleSubmit}>
            <label htmlFor="Name">
                Name
                <input
                    type="text"
                    name="name"
                    pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                    title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                    value={this.state.name}
                    onChange={this.handleInputChange}
                    required
                />
            </label>

            <label htmlFor="Number">
                Number
                <input
                    type="tel"
                    name="number"
                    pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                    title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                    value={this.state.number}
                    onChange={this.handleInputChange}
                    required
                />
                </label>
                <button type="submit">Add contact</button>
            </form>
        </div> */}
            <ContactForm options={this.state} handleInputChange={this.handleInputChange} handleSubmit={this.handleSubmit} />

                <h2>Contacts</h2>
                <Filter />
                <ContactList options={this.state}/>
</div>
        )
    }
}

export default App;