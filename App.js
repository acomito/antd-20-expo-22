import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
// ANTD
import enUS from 'antd-mobile/lib/locale-provider/en_US';
import { LocaleProvider } from 'antd-mobile';
import { List } from 'antd-mobile';
import Picker from 'antd-mobile/lib/picker';  // for js

export const CATEGORY_OPTIONS = [
  // FIRST

  'Art, Crafts, Handmade',
  'Baby & Kids',
  'Beauty & Health',
  'Books, CDs & DVDs',
  'Cars, Vehicles, Boats & Parts',
  'Cell Phones & Tablets',
  'Clothes, Shoes & Jewelry',
  'Computers & Accessories',
  'Electronics & Photography',
  'Food & Produce',
  'Furniture',
  'Home & Kitchen',
  'Pets & Supplies',
  'Services / For Hire',
  'Sports, Outdoors & Fitness',
  'Tickets',
  'Tools & Garden',
  'Toys & Video Games',
  'General / Other',
];

let MAPPED_CATEGORY_OPTIONS = CATEGORY_OPTIONS.map( item => {
  return { value: item, label: item }
});

export default class App extends React.Component {
  render() {
    
    return (
      <LocaleProvider locale={enUS}>
        <List 
          style={{flex: 1, paddingTop: 50}} 
          renderHeader={() => <Text>Category</Text>}
        >
          <Picker
            data={MAPPED_CATEGORY_OPTIONS}
            cols={1}
            extra="Category"
            title="Category"
            onOk={e => console.log(e)}
            okText="Okay"
            onDismiss={e => console.log(e)}
          >
            <List.Item arrow="horizontal" />
          </Picker>
        </List>
      </LocaleProvider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: 'flex',
    backgroundColor: '#efefef',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
