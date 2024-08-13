import './App.css'
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import Login from './components/Login'
import Footer from './components/Footer'
import Header from './components/Header'
import Home from './components/Home'
import Sidebar from './components/Sidebar'
import YourDetails from './components/YourDetails'

// Note: Use the lists in your code to pass the test cases
const stepsList = [
  {stepId: 'YOUR_DETAILS', displayText: 'Your Details'},
  {stepId: 'DATE_SELECTION', displayText: 'Date Selection'},
  {stepId: 'GUESTS', displayText: 'Guests'},
  {stepId: 'TRAVEL_ASSISTANCE', displayText: 'Travel Assistance'},
  {stepId: 'CONFIRMATION', displayText: 'Confirmation'},
]

const travelAssistanceList = [
  {value: 'car', displayText: 'Car'},
  {value: 'flight', displayText: 'Flight'},
  {value: 'bus', displayText: 'Bus'},
  {value: 'train', displayText: 'Train'},
]

// Replace your code here
// const App = () => (
//   <BrowserRouter>
//     <Switch>
//       <Route exact path="/login" component={Login} />
//       <Route exact path="/" component={Home} />
//     </Switch>
//   </BrowserRouter>
// )

const App = () => <YourDetails />

export default App
