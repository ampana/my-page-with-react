import './App.css';
import Interest from './Interest'
import data from "./data"
import footerData from "./footerData"
import Footer from './Footer';

export default function App() {
  
  const interests = data.map(interest => {
    return (
      <Interest 
        key = {interest.id}
        item = {interest}
      />
    )
  })

  const footer = footerData.map(footerdata => {
      return (
        <Footer 
          key = {footerdata.id}
          item = {footerdata}
        />
      )
    }
    )

  return (
    <div className="App">
      {interests}
      {footer}
    </div>
  );
}

