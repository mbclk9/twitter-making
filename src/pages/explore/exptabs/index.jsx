import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

export function ExTabs(props) {
  const { children, value, index, ...other } = props;
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box style={{ padding: 1 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

ExTabs.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function ExTabPanel() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box style={{ width: '100%'}}>
      <Box style={{ borderBottom: 1, borderColor: 'divider' ,textTransform: 'lowercase'}}>
        <Tabs value={value} className=''  onChange={handleChange} aria-label="basic tabs example">
          <Tab sx={{color:'#71767b'}}  label="Four you" {...a11yProps(0)} />
          <Tab sx={{color:'#71767b'}} label="Trending" {...a11yProps(1)} />
          <Tab sx={{color:'#71767b'}} label="News" {...a11yProps(2)} />
          <Tab sx={{color:'#71767b'}} label="Sports" {...a11yProps(3)} />
          <Tab sx={{color:'#71767b'}} label="Entertainment" {...a11yProps(4)} />
        </Tabs>
      </Box>
      <ExTabs value={value} index={0}>
        <div className='py-3 px-4'>
          <h4 className=' text-xl text-[#e7e9ea] font-extrabold leading-6 tracking-normal '>İlgini çekebilecek gündemler</h4>
        </div>
      </ExTabs>
      <ExTabs value={value} index={1}>
        Trending
      </ExTabs>
      <ExTabs value={value} index={2}>
        News
      </ExTabs>
      <ExTabs value={value} index={3}>
        Item Four
      </ExTabs>
      <ExTabs value={value} index={4}>
        Entertainment
      </ExTabs>
    </Box>
  );
}
