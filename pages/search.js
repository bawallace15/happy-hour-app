import Head from 'next/head';
import { Component } from 'react';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import { useRouter } from 'next/router';
import blue from '@material-ui/core/colors/blue';
import orange from '@material-ui/core/colors/orange';
import Layout, { siteTitle } from '../components/layout';

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

// interface WithRouterProps {
//   router: NextRouter
// }

// interface MyComponentProps extends WithRouterProps {}
//dumb function wrapping because nextjs makes you use either functions with router or typescript
//TODO maybe use withRouter instead, but idk how without typescript
export default function Search() {
  const searchObj = useRouter().query
  class Search extends Component {
  // static async getInitialProps() {
  //   try {
  //     const inputsraw = await fs.readFileSync('./data/inputs.json');
  //     const inputs = await JSON.parse(inputsraw);
  //     console.log('====================');
  //     return inputs
  //   }
  //   catch {
  //     return {}
  //   }
  // }

  constructor(props) {
    super(props);
    console.log('search props')
    console.log(this.props.searchObj);
  }

  // async componentDidMount() {
  //   console.log(this.props.location);
  // //   const { location: {search}} = this.props;
  // //   console.log('search params????')
  // //   console.log(search);
  // }
  
  render() {
    console.log(this.props.searchObj.area);
    return (
        <ThemeProvider theme={theme}>
            <Layout>
                <Head>
                    <title>{siteTitle}</title>
                </Head>
                <h1>HIII</h1>
                <div>{JSON.stringify(this.props.areas)}</div>
            </Layout>
        </ThemeProvider>
      )
    }
  }

  return <Search searchObj={searchObj}></Search>
}


  
// export default function Search({ searchRes }) {
//     return (
//     <ThemeProvider theme={theme}>
//         <Layout>
//             <Head>
//                 <title>{siteTitle}</title>
//             </Head>
//             <h1>HIII</h1>
//             <div>{JSON.stringify(searchRes)}</div>
//         </Layout>
//     </ThemeProvider>
//     )
// }

// export async function getServerSideProps() {
//     const searchRes = await getSearchData()
//     return {
//       props: {
//         searchRes
//       }
//     } 
//   }