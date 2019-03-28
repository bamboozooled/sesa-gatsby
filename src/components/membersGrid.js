import React from 'react'
import Grid from '@material-ui/core/Grid'
import MemberProfile from './memberProfile'
import Typography from '@material-ui/core/Typography'
import createTypography from '@material-ui/core/styles/createTypography';
import createPalette from '@material-ui/core/styles/createPalette';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles'
import Helmet from 'react-helmet'
import { transform } from 'popmotion';

const currentMembers = [
  {
    name: 'Anushka Paliwal',
    title: 'President',
    tenure: '2015-Present',
    photoFile: '',
  },
  {
    name: 'Tolu Olubode',
    title: 'Vice President',
    tenure: '2017-Present',
    photoFile: 'tolu.jpg',
  },
  {
    name: 'Faizaan Christie',
    title: 'VP Academic',
    tenure: '2018-Present',
    photoFile: '',
  },
  {
    name: 'Anthony A. Nader',
    title: 'VP Marketing',
    tenure: '2016-Present',
    photoFile: 'anthony.png',
  },
  {
    name: 'Melody Habbouche',
    title: 'VP Communication',
    tenure: '2015-Present',
    photoFile: '',
  },
  {
    name: 'Harsh Gupta',
    title: 'VP Events',
    tenure: '2018-Present',
    photoFile: 'harsh.jpeg',
  },
  {
    name: 'Amelie Khan',
    title: 'VP Community Engagement',
    tenure: '2017-Present',
    photoFile: '',
  },
  {
    name: 'Munir Aljawahari',
    title: 'Graphic Designer',
    tenure: '2017-Present',
    photoFile: 'munir.jpg',
  },
  {
    name: 'Sagal Maxamud',
    title: 'Academic Coordinator',
    tenure: '2018-Present',
    photoFile: '',
  },
  {
    name: 'Maulik Shah',
    title: 'Event Coordinator',
    tenure: '2018-Present',
    photoFile: '',
  },
  {
    name: 'Sanat Nayar',
    title: 'Event Coordinator',
    tenure: '2018-Present',
    photoFile: '',
  },
  {
    name: 'Ian Desson',
    title: 'Web Master',
    tenure: '2017-Present',
    photoFile: '',
  },
  {
    name: 'Timi Owoturo',
    title: 'Web Director',
    tenure: '2018-Present',
    photoFile: '',
  },
  {
    name: 'Owen Anderson',
    title: 'Web Director',
    tenure: '2018-Present',
    photoFile: '',
  },
]
const palette = createPalette ({
  primary: {
    main:"#990012"
  },
  secondary: {
    main: '#545454',
    light:'#cacaca'
  }
})

const typography = createTypography(palette, {
  fontFamily: 'Raleway'
})
const theme = createMuiTheme({
  palette: palette,
  typography: typography
});

const MembersGrid = () => (
  <Grid 
    container
    direction="column"
    alignItems="center"
    style={{
      textTransform:'uppercase'
    }}
  >
  <Helmet>
    <link href="https://fonts.googleapis.com/css?family=Raleway" rel="stylesheet"/>
  </Helmet>
  <MuiThemeProvider theme={theme}>
    <Typography 
      align="center" 
      variant="title"
      color="primary"
      style={{
        fontSize:"3rem"
      }}
    >
      Awesome team of execs
      <Typography 
        align="center" 
        variant="subtitle1"
        color="secondary"
        style={{
          fontSize:'80%'
        }}
      >
      The "A-Team" for Short
      </Typography>
    </Typography>
    <br/>
    <br/>
    <Grid
      container
      direction="row"
      justify="center"
      alignItems="center"
      spacing={16}
      style={{
        width:'75rem'
      }}
    >
      {currentMembers.slice(0, 6).map(function(member, index) {
        return (
          <Grid
            item
            key={index}
            style={{
              width: '30%',
            }}
          >
            <MemberProfile
              memberName={member.name}
              memberTitle={member.title}
              memberTenure={member.tenure}
              photoFile={member.photoFile}
            />
          </Grid>
        )
      })}
    </Grid>
    <br/>
    <br/>
    <Typography
      align="center"
      variant="title"
      color="primary"
      style={{
        fontSize:'3rem'
      }}
    >
      Directors
    </Typography>
    <Grid
      container
      direction="row"
      justify="center"
      alignItems="center"
      spacing={16}
      style={{
        width:'75rem'
      }}
    >
      {currentMembers.slice(6).map(function(member, index) {
        return (
          <Grid
            item
            key={index}
            style={{
              width: '30%',
            }}
          >
            <MemberProfile
              memberName={member.name}
              memberTitle={member.title}
              memberTenure={member.tenure}
              photoFile={member.photoFile}
            />
          </Grid>
        )
      })}
    </Grid>
    </MuiThemeProvider>
  </Grid>
)
export default MembersGrid
