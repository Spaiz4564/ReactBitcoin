import { Route, HashRouter as Router, Switch } from 'react-router-dom'
import './assets/scss/global.scss'
import { ContactPage } from './views/ContactPage'
import { HomePage } from './views/HomePage'
import { StatisticPage } from './views/StatisticPage'
import { AppHeader } from './cmps/AppHeader'
import { ContactDetailsPage } from './views/ContactDetailsPage'
import { UserProfile } from './views/UserProfile'
import ContactEdit from './views/ContactEdit'

function App() {
  return (
    <Router>
      <section className='main-app'>
        <AppHeader />
        <main className='container'>
          <Switch>
            <Route path="/contact/edit/:id?" component={ContactEdit} />
            <Route path='/contact/:id' component={ContactDetailsPage} />
            <Route path='/contacts' component={ContactPage} />
            <Route path='/statistics' component={StatisticPage} />
            <Route path='/profile' component={UserProfile} />
            <Route path='/' component={HomePage} />
          </Switch>
        </main>
      </section>
    </Router>
  )
}

export default App
