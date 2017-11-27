import React from 'react';
import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles';
import teal from 'material-ui/colors/teal';
import blueGrey from 'material-ui/colors/blueGrey';
import red from 'material-ui/colors/red';
import blue from 'material-ui/colors/blue';

// export const green = '#34C3A4';
// export const grey = '#454545';
// export const red = '#E6716D';
// export const blue = '#00A2FF';


const theme = createMuiTheme({
  palette: {
    type: 'dark',
    primary: teal,
    secondary: blueGrey,
    error: red
  }
});


class Theme extends React.Component {
  render() {
    return (
      <MuiThemeProvider theme={theme}>
        {this.props.children}
      </MuiThemeProvider>
    )
  }
}

export default Theme;
