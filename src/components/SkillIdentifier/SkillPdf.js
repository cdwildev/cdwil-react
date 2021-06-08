import React, { useEffect, useState } from 'react';
import { Page, Text, View, Document, StyleSheet, ReactPDF } from '@react-pdf/renderer';
// Create styles
const styles = StyleSheet.create({
  page: {
    flexDirection: 'row',
    backgroundColor: '#E4E4E4'
  },
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1
  }
});

// Create Document Component
export const MyDocument = ({skillList}) => {

const [list, setList] = useState([])
useEffect(() => {
    setList(skillList)

    console.log(skillList)
}, [skillList])
    
return(

  <Document>
    <Page size="A4" style={styles.page}>
      <View style={styles.section}>
        <Text>{list.map(skill => <p>{skill}</p>)}</Text>

        <Text render={({list}) => (
        list
      )} />
      </View>
      <View style={styles.section}>
        <Text>Section #2</Text>
      </View>
    </Page>
  </Document>
)
  
}