import BasicLayout from '../layouts/BasicLayout'

// REDUX

import { Provider } from 'react-redux';
import store from '../store';


export default function Home() {

  return (
      <Provider store={store}>
        <BasicLayout>
          <h1>Estamos en la home</h1>
        </BasicLayout>
      </Provider>
 
  )
}
