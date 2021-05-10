import { Component } from 'react';
import Head from 'next/head';
import FilterBox from '../components/filter-box';
import GreetingBlock from '../components/greeting-block';
import Layout, { siteTitle } from '../components/layout';
import styles from '../styles/Home.module.css';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import blue from '@material-ui/core/colors/blue';
import orange from '@material-ui/core/colors/orange';
// import fs from 'fs';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: blue[500],
    },
    secondary: {
      main: orange[500],
    },
  },
});
class Home extends Component {
  // static async getInitialProps() {
  //   const inputsraw = await fs.readFileSync('./data/inputs.json');
  //   const inputs = await JSON.parse(inputsraw);
  //   // console.log('====================')
  //   return inputs
  // }

  constructor(props) {
    super(props);
    this.state = {
      areas: [],
      days: [],
      hours: [],
      features: []
    }
  }

  componentDidMount() {
    fetch('http://localhost:3001/areas')
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            areas: result
          })
        }
      )
    fetch('http://localhost:3001/days')
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            days: result
          })
        }
      )
    fetch('http://localhost:3001/hours')
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            hours: result
          })
        }
      )
    fetch('http://localhost:3001/features')
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            features: result
          })
        }
      )
  }

  render() {
    // console.log(this.props);
    return (
      <ThemeProvider theme={theme}>
        <Layout home>
          <Head>
            <title>{siteTitle}</title>
          </Head>
          <GreetingBlock></GreetingBlock>
          <FilterBox inputs={this.state}></FilterBox>
        </Layout>
      </ThemeProvider>
    )
  }
}

export default Home;