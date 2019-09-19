import React from 'react';
import './App.css';
import store from './store'
import { Provider } from 'react-redux'
import { Route } from 'react-router-dom'
import EventsListContainer from './components/EventsList/EventsListContainer';
import TicketsListContainer from './components/TicketsList/TicketsListContainer'
import LoginFormContainer from './components/LoginForm/LoginFormContainer'
import EditTicketFormContainer from './components/EditTicketForm/EditTicketFormContainer'
import SignUpFormContainer from './components/SignUpForm/SignUpFormContainer'
import TicketDetailsContainer from './components/TicketDetails/TicketDetailsContainer'

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <div>
          <h1>TicketSwap App</h1>
          <Route path="/" exact component={LoginFormContainer} />
          <Route path="/sign-up" exact component={SignUpFormContainer}/>
          <Route path="/events" exact component={EventsListContainer}/>
          <Route path="/events/:eventId" exact component={TicketsListContainer}/>
          <Route path="/edit-ticket/:ticketId" exact component={EditTicketFormContainer}/>
          <Route path="/ticket/:ticketId" exact component={TicketDetailsContainer}/>
        </div>
      </Provider>
    );
  }
}

export default App
